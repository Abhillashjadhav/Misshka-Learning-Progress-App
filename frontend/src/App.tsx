import { useState, useEffect } from 'react'
import { Nova } from './components/character/Nova'
import { NovaDialog } from './components/character/NovaDialog'
import { Button } from './components/common/Button'
import { Card } from './components/common/Card'
import { Dashboard } from './components/Dashboard'
import { speakQuestion, speakExcited, speakEncouraging } from './utils/speech'
import {
  ALL_QUESTIONS,
  SUBJECT_METADATA,
  getQuestionsByDifficulty
} from './data/allQuestions'
import type { Subject, Difficulty } from './data/allQuestions'
import { performanceTracker } from './types/performance'
import type { QuestionAttempt } from './types/performance'

type Page = 'home' | 'dashboard' | Subject;

// Helper to check if page is a non-math subject
const isNonMathSubject = (page: Page): page is Exclude<Subject, 'math'> => {
  return page !== 'home' && page !== 'dashboard' && page !== 'math';
};

// Math question type
interface MathQuestion {
  num1: number;
  num2: number;
  operation: '+' | '-';
  answer: number;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [score, setScore] = useState(0)
  const [audioEnabled, setAudioEnabled] = useState(false)

  // Difficulty tracking per subject
  const [difficulties, setDifficulties] = useState<Record<Subject, Difficulty>>({
    math: 'easy',
    science: 'easy',
    english: 'easy',
    'general-knowledge': 'easy',
    art: 'easy',
    logic: 'easy',
  })

  // Streak tracking per subject
  const [streaks, setStreaks] = useState<Record<Subject, number>>({
    math: 0,
    science: 0,
    english: 0,
    'general-knowledge': 0,
    art: 0,
    logic: 0,
  })

  // Math activity state
  const [mathQuestion, setMathQuestion] = useState<MathQuestion>({ num1: 2, num2: 3, answer: 5, operation: '+' })
  const [selectedMathAnswer, setSelectedMathAnswer] = useState<number | null>(null)
  const [showMathFeedback, setShowMathFeedback] = useState(false)
  const [mathAttempts, setMathAttempts] = useState(0)

  // Other subjects state
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [attempts, setAttempts] = useState(0)

  // Enable audio on first interaction
  const enableAudio = () => {
    if (!audioEnabled) {
      setAudioEnabled(true)
      speakExcited("Hi Misshka! I'm Nova! Let's learn together!")
    }
  }

  // Generate math question based on difficulty
  const generateNewMathQuestion = () => {
    const difficulty = difficulties.math;
    let num1: number, num2: number, operation: '+' | '-', answer: number;

    if (difficulty === 'easy') {
      // Easy: 1-5 addition
      num1 = Math.floor(Math.random() * 5) + 1
      num2 = Math.floor(Math.random() * 5) + 1
      operation = '+'
      answer = num1 + num2
    } else if (difficulty === 'medium') {
      // Medium: 5-10 addition and simple subtraction
      if (Math.random() > 0.5) {
        num1 = Math.floor(Math.random() * 6) + 5 // 5-10
        num2 = Math.floor(Math.random() * 6) + 5
        operation = '+'
        answer = num1 + num2
      } else {
        num1 = Math.floor(Math.random() * 8) + 3 // 3-10
        num2 = Math.floor(Math.random() * num1) + 1
        operation = '-'
        answer = num1 - num2
      }
    } else {
      // Hard: larger numbers
      if (Math.random() > 0.4) {
        num1 = Math.floor(Math.random() * 11) + 10 // 10-20
        num2 = Math.floor(Math.random() * 10) + 1
        operation = '+'
        answer = num1 + num2
      } else {
        num1 = Math.floor(Math.random() * 11) + 10
        num2 = Math.floor(Math.random() * 10) + 1
        operation = '-'
        answer = num1 - num2
      }
    }

    setMathQuestion({ num1, num2, answer, operation })
    setSelectedMathAnswer(null)
    setShowMathFeedback(false)
    setMathAttempts(0)

    if (audioEnabled) {
      setTimeout(() => {
        const operationWord = operation === '+' ? 'plus' : 'minus'
        speakQuestion(`What is ${num1} ${operationWord} ${num2}?`)
      }, 500)
    }
  }

  // Load next question for non-math subjects using AI-driven selection
  const loadNextQuestion = (subject: Subject) => {
    if (subject === 'math') {
      generateNewMathQuestion()
      return
    }

    const difficulty = difficulties[subject]
    const subjectQuestions = getQuestionsByDifficulty(subject, difficulty)
    const availableIds = subjectQuestions.map(q => q.id)

    // Use AI-driven selection
    const selection = performanceTracker.selectNextQuestion(subject, difficulty, availableIds)

    if (selection) {
      const question = ALL_QUESTIONS.find(q => q.id === selection.questionId)
      if (question) {
        setCurrentQuestion(question.id)
        setSelectedAnswer(null)
        setShowFeedback(false)
        setAttempts(0)

        if (audioEnabled) {
          setTimeout(() => {
            speakQuestion(question.question)
          }, 500)
        }
        return
      }
    }

    // Fallback: if all questions are asked, increase difficulty
    const nextDiff = difficulty === 'easy' ? 'medium' : difficulty === 'medium' ? 'hard' : 'easy'
    setDifficulties(prev => ({ ...prev, [subject]: nextDiff }))
    performanceTracker.resetSession()

    // Try again with new difficulty
    const nextQuestions = getQuestionsByDifficulty(subject, nextDiff)
    if (nextQuestions.length > 0) {
      const randomQ = nextQuestions[Math.floor(Math.random() * nextQuestions.length)]
      setCurrentQuestion(randomQ.id)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setAttempts(0)

      if (audioEnabled) {
        setTimeout(() => {
          speakQuestion(randomQ.question)
          if (nextDiff === 'medium') {
            speakExcited("Wow Misshka! You've answered all easy questions! Moving to medium level!")
          } else if (nextDiff === 'hard') {
            speakExcited("Amazing Misshka! You're ready for hard questions!")
          }
        }, 500)
      }
    }
  }

  const checkMathAnswer = (answer: number) => {
    setSelectedMathAnswer(answer)
    setShowMathFeedback(true)
    setMathAttempts(mathAttempts + 1)

    const correct = answer === mathQuestion.answer

    // Track performance
    const attempt: QuestionAttempt = {
      questionId: -1, // Math questions don't have IDs
      subject: 'math',
      category: 'patterns', // Default category for math
      difficulty: difficulties.math,
      correct,
      timestamp: Date.now(),
      attempts: mathAttempts + 1,
    }
    performanceTracker.addAttempt(attempt)

    if (correct) {
      setScore(score + 1)
      const newStreak = streaks.math + 1
      setStreaks(prev => ({ ...prev, math: newStreak }))

      // Adapt difficulty
      if (newStreak >= 3 && difficulties.math === 'easy') {
        setDifficulties(prev => ({ ...prev, math: 'medium' }))
        if (audioEnabled) speakExcited("You're getting better, Misshka! Let's try harder questions!")
      } else if (newStreak >= 5 && difficulties.math === 'medium') {
        setDifficulties(prev => ({ ...prev, math: 'hard' }))
        if (audioEnabled) speakExcited("Wow Misshka! You're amazing! Here come the challenge questions!")
      }

      const messages = [
        "That's correct, Misshka! You're amazing!",
        "Wonderful job, Misshka! You got it right!",
        "Excellent work, Misshka! You're so smart!",
        "Perfect, Misshka! You're a math star!"
      ]
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]

      if (audioEnabled) speakExcited(randomMessage)

      setTimeout(() => generateNewMathQuestion(), 3000)
    } else {
      setStreaks(prev => ({ ...prev, math: 0 }))
      if (audioEnabled) {
        if (mathAttempts === 0) {
          speakEncouraging("Not quite, Misshka! Try again, you can do it!")
        } else {
          speakEncouraging("That's okay, Misshka! Let's try another question!")
        }
      }
    }
  }

  const checkAnswer = (answerIndex: number, subject: Subject) => {
    setSelectedAnswer(answerIndex)
    setShowFeedback(true)
    setAttempts(attempts + 1)

    const question = ALL_QUESTIONS.find(q => q.id === currentQuestion)
    if (!question) return

    const correct = answerIndex === question.correct

    // Track performance
    const attempt: QuestionAttempt = {
      questionId: question.id,
      subject: question.subject,
      category: question.category,
      difficulty: question.difficulty,
      correct,
      timestamp: Date.now(),
      attempts: attempts + 1,
    }
    performanceTracker.addAttempt(attempt)

    if (correct) {
      setScore(score + 1)
      const newStreak = streaks[subject] + 1
      setStreaks(prev => ({ ...prev, [subject]: newStreak }))

      // Adapt difficulty
      if (newStreak >= 3 && difficulties[subject] === 'easy') {
        setDifficulties(prev => ({ ...prev, [subject]: 'medium' }))
        if (audioEnabled) speakExcited(`You're so smart, Misshka! Let's try harder ${SUBJECT_METADATA[subject].name} questions!`)
      } else if (newStreak >= 5 && difficulties[subject] === 'medium') {
        setDifficulties(prev => ({ ...prev, [subject]: 'hard' }))
        if (audioEnabled) speakExcited(`Incredible, Misshka! You're a ${SUBJECT_METADATA[subject].name} genius!`)
      }

      const messages = [
        `Correct, Misshka! ${question.explanation}`,
        `You're right, Misshka! ${question.explanation}`,
        `Perfect, Misshka! ${question.explanation}`
      ]
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]

      if (audioEnabled) speakExcited(randomMessage)

      setTimeout(() => loadNextQuestion(subject), 5000)
    } else {
      setStreaks(prev => ({ ...prev, [subject]: 0 }))
      if (audioEnabled) {
        if (attempts === 0) {
          speakEncouraging("Hmm, not quite! Try another answer, Misshka!")
        } else {
          speakEncouraging("That's okay, Misshka! Learning is fun!")
        }
      }
    }
  }

  const skipQuestion = (subject: Subject) => {
    if (subject === 'math') {
      generateNewMathQuestion()
    } else {
      loadNextQuestion(subject)
    }
  }

  const tryAgain = (subject: Subject) => {
    if (subject === 'math') {
      setSelectedMathAnswer(null)
      setShowMathFeedback(false)
    } else {
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  // Initialize
  useEffect(() => {
    generateNewMathQuestion()
    loadNextQuestion('science')
  }, [])

  // Load question when page changes
  useEffect(() => {
    if (currentPage !== 'home' && currentPage !== 'dashboard' && currentPage !== 'math') {
      loadNextQuestion(currentPage as Subject)
    }
  }, [currentPage])

  // Render dashboard
  if (currentPage === 'dashboard') {
    return <Dashboard onClose={() => setCurrentPage('home')} />
  }

  const currentQ = currentQuestion ? ALL_QUESTIONS.find(q => q.id === currentQuestion) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">

      {/* Home Page */}
      {currentPage === 'home' && (
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold gradient-text mb-4">
              Misshka's Learning Adventure
            </h1>
            <p className="text-2xl text-gray-700">Let's learn and have fun with Nova!</p>
          </div>

          {/* Nova Welcome */}
          <div className="mb-12">
            <NovaDialog
              message="Hi Misshka! I'm Nova the Space Unicorn! ✨ I'm so excited to learn with you today! What do you want to explore?"
              emotion="excited"
            />
          </div>

          {/* Activity Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {(Object.keys(SUBJECT_METADATA) as Subject[]).map(subject => (
              <Card
                key={subject}
                variant="activity"
                onClick={() => {
                  setCurrentPage(subject)
                  enableAudio()
                }}
              >
                <div className="text-center p-6">
                  <div className="text-5xl mb-3">{SUBJECT_METADATA[subject].icon}</div>
                  <h2 className="text-2xl font-bold text-purple-600 mb-2">
                    {SUBJECT_METADATA[subject].name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-2">{SUBJECT_METADATA[subject].description}</p>
                  <p className="text-sm text-gray-500">Level: {difficulties[subject].toUpperCase()}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Dashboard Button */}
          <div className="text-center mb-8">
            <Button variant="gold" size="large" onClick={() => setCurrentPage('dashboard')}>
              📊 View My Progress Dashboard
            </Button>
          </div>

          {/* Score Display */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-3xl shadow-lg px-8 py-4">
              <p className="text-xl text-gray-700">
                ⭐ Stars Earned: <span className="text-3xl font-bold text-gold-400">{score}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Questions Answered: {performanceTracker.getTotalUniqueQuestionsAsked()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Math Activity Page */}
      {currentPage === 'math' && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <Button variant="secondary" onClick={() => setCurrentPage('home')}>
              ← Back to Home
            </Button>
            <div className="text-xl font-bold text-purple-600">
              Level: {difficulties.math.toUpperCase()} | Streak: {streaks.math}
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold gradient-text mb-4">
              {SUBJECT_METADATA.math.icon} Math Challenge! {mathQuestion.operation === '+' ? '➕' : '➖'}
            </h2>
          </div>

          <div className="mb-8 flex justify-center">
            <Nova emotion={showMathFeedback && selectedMathAnswer === mathQuestion.answer ? 'celebrating' : 'happy'} size="large" />
          </div>

          <div className="bg-white rounded-4xl shadow-2xl p-12 mb-8">
            <div className="text-center mb-8">
              <p className="text-6xl font-bold text-gray-800 mb-8">
                {mathQuestion.num1} {mathQuestion.operation} {mathQuestion.num2} = ?
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
              {[
                mathQuestion.answer - 2,
                mathQuestion.answer - 1,
                mathQuestion.answer,
                mathQuestion.answer + 1
              ].sort(() => Math.random() - 0.5).map((option) => (
                option >= 0 && (
                  <Button
                    key={option}
                    variant={selectedMathAnswer === option ? (option === mathQuestion.answer ? 'gold' : 'primary') : 'purple'}
                    size="child"
                    onClick={() => checkMathAnswer(option)}
                    disabled={showMathFeedback}
                  >
                    {option}
                  </Button>
                )
              ))}
            </div>

            {showMathFeedback && (
              <div className="mt-8 text-center">
                {selectedMathAnswer === mathQuestion.answer ? (
                  <div className="text-4xl font-bold text-green-600 animate-bounce">
                    🎉 That's correct, Misshka! You're amazing! 🎉
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-6">
                      {mathAttempts === 1 ? "Not quite! Try again!" : "That's okay! Let's try another question!"}
                    </div>
                    <div className="flex gap-4 justify-center">
                      {mathAttempts === 1 && (
                        <Button variant="purple" onClick={() => tryAgain('math')}>
                          🔄 Try Again
                        </Button>
                      )}
                      <Button variant="secondary" onClick={() => skipQuestion('math')}>
                        ⏭️ Next Question
                      </Button>
                    </div>
                    {mathAttempts > 1 && (
                      <div className="mt-4 text-2xl text-gray-600">
                        The answer is: <span className="font-bold text-green-600">{mathQuestion.answer}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Other Subjects Page */}
      {isNonMathSubject(currentPage) && currentQ && (() => {
        const currentSubject = currentPage;
        return (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <Button variant="secondary" onClick={() => setCurrentPage('home')}>
              ← Back to Home
            </Button>
            <div className="text-xl font-bold text-purple-600">
              Level: {difficulties[currentSubject].toUpperCase()} | Streak: {streaks[currentSubject]}
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold gradient-text mb-4">
              {SUBJECT_METADATA[currentSubject].icon} {SUBJECT_METADATA[currentSubject].name}
            </h2>
          </div>

          <div className="mb-8 flex justify-center">
            <Nova emotion={showFeedback && selectedAnswer === currentQ.correct ? 'celebrating' : 'thinking'} size="large" />
          </div>

          <div className="bg-white rounded-4xl shadow-2xl p-12 mb-8">
            <div className="text-center mb-8">
              {/* NO EMOJI HERE - removed to prevent hints */}
              <p className="text-4xl text-gray-700 mb-4">{currentQ.question}</p>
              <p className="text-sm text-purple-600">
                Category: {currentQ.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
              {currentQ.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? (index === currentQ.correct ? 'gold' : 'primary') : 'purple'}
                  size="child"
                  onClick={() => checkAnswer(index, currentSubject)}
                  disabled={showFeedback}
                  className="text-xl py-6"
                >
                  {option}
                </Button>
              ))}
            </div>

            {showFeedback && (
              <div className="mt-8 text-center">
                {selectedAnswer === currentQ.correct ? (
                  <div>
                    <div className="text-4xl font-bold text-green-600 animate-bounce mb-4">
                      🎉 Perfect, Misshka! 🎉
                    </div>
                    <div className="text-2xl text-gray-700">
                      {currentQ.explanation}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-6">
                      {attempts === 1 ? "Hmm, try another answer!" : "That's okay! Let's learn more!"}
                    </div>
                    <div className="flex gap-4 justify-center">
                      {attempts === 1 && (
                        <Button variant="purple" onClick={() => tryAgain(currentSubject)}>
                          🔄 Try Again
                        </Button>
                      )}
                      <Button variant="secondary" onClick={() => skipQuestion(currentSubject)}>
                        ⏭️ Next Question
                      </Button>
                    </div>
                    {attempts > 1 && (
                      <div className="mt-4 text-lg text-gray-600">
                        Correct answer: <span className="font-bold">{currentQ.options[currentQ.correct]}</span>
                        <br />
                        <span className="text-sm">{currentQ.explanation}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        );
      })()}
    </div>
  )
}

export default App
