import { useState, useEffect } from 'react'
import { Nova } from './components/character/Nova'
import { NovaDialog } from './components/character/NovaDialog'
import { Button } from './components/common/Button'
import { Card } from './components/common/Card'
import { speakQuestion, speakExcited, speakEncouraging } from './utils/speech'
import { SCIENCE_QUESTIONS, getQuestionsByDifficulty } from './data/scienceQuestions'

type Difficulty = 'easy' | 'medium' | 'hard';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'math' | 'science'>('home')
  const [score, setScore] = useState(0)
  const [audioEnabled, setAudioEnabled] = useState(false)

  // Difficulty tracking
  const [mathDifficulty, setMathDifficulty] = useState<Difficulty>('easy')
  const [scienceDifficulty, setScienceDifficulty] = useState<Difficulty>('easy')
  const [mathCorrectStreak, setMathCorrectStreak] = useState(0)
  const [scienceCorrectStreak, setScienceCorrectStreak] = useState(0)

  // Math activity state
  const [mathQuestion, setMathQuestion] = useState({ num1: 2, num2: 3, answer: 5, operation: '+' as '+' | '-' })
  const [selectedMathAnswer, setSelectedMathAnswer] = useState<number | null>(null)
  const [showMathFeedback, setShowMathFeedback] = useState(false)
  const [mathAttempts, setMathAttempts] = useState(0)

  // Science activity state
  const [askedQuestions, setAskedQuestions] = useState<number[]>([])
  const [currentScienceQ, setCurrentScienceQ] = useState(0)
  const [selectedScienceAnswer, setSelectedScienceAnswer] = useState<number | null>(null)
  const [showScienceFeedback, setShowScienceFeedback] = useState(false)
  const [scienceAttempts, setScienceAttempts] = useState(0)

  // Enable audio on first interaction
  const enableAudio = () => {
    if (!audioEnabled) {
      setAudioEnabled(true)
      speakExcited("Hi Misshka! I'm Nova! Let's learn together!")
    }
  }

  // Generate math question based on difficulty
  const generateNewMathQuestion = () => {
    let num1, num2, operation: '+' | '-', answer;

    if (mathDifficulty === 'easy') {
      // Easy: 1-5 addition
      num1 = Math.floor(Math.random() * 5) + 1
      num2 = Math.floor(Math.random() * 5) + 1
      operation = '+'
      answer = num1 + num2
    } else if (mathDifficulty === 'medium') {
      // Medium: 5-10 addition and simple subtraction
      if (Math.random() > 0.5) {
        num1 = Math.floor(Math.random() * 6) + 5 // 5-10
        num2 = Math.floor(Math.random() * 6) + 5
        operation = '+'
        answer = num1 + num2
      } else {
        num1 = Math.floor(Math.random() * 8) + 3 // 3-10
        num2 = Math.floor(Math.random() * num1) + 1 // 1 to num1
        operation = '-'
        answer = num1 - num2
      }
    } else {
      // Hard: larger numbers and subtraction
      if (Math.random() > 0.4) {
        num1 = Math.floor(Math.random() * 11) + 10 // 10-20
        num2 = Math.floor(Math.random() * 10) + 1
        operation = '+'
        answer = num1 + num2
      } else {
        num1 = Math.floor(Math.random() * 11) + 10 // 10-20
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

  // Get next science question based on difficulty and avoid repetition
  const getNextScienceQuestion = () => {
    const difficultyQuestions = getQuestionsByDifficulty(scienceDifficulty)
    const unasked = difficultyQuestions.filter(q => !askedQuestions.includes(q.id))

    if (unasked.length === 0) {
      // All questions asked, reset but increase difficulty if possible
      setAskedQuestions([])
      if (scienceDifficulty === 'easy' && scienceCorrectStreak >= 3) {
        setScienceDifficulty('medium')
      } else if (scienceDifficulty === 'medium' && scienceCorrectStreak >= 5) {
        setScienceDifficulty('hard')
      }
      return difficultyQuestions[0]
    }

    return unasked[Math.floor(Math.random() * unasked.length)]
  }

  const loadNextScienceQuestion = () => {
    const nextQ = getNextScienceQuestion()
    setCurrentScienceQ(SCIENCE_QUESTIONS.findIndex(q => q.id === nextQ.id))
    setSelectedScienceAnswer(null)
    setShowScienceFeedback(false)
    setScienceAttempts(0)
  }

  const checkMathAnswer = (answer: number) => {
    setSelectedMathAnswer(answer)
    setShowMathFeedback(true)
    setMathAttempts(mathAttempts + 1)

    if (answer === mathQuestion.answer) {
      setScore(score + 1)
      setMathCorrectStreak(mathCorrectStreak + 1)

      // Adapt difficulty based on performance
      if (mathCorrectStreak >= 3 && mathDifficulty === 'easy') {
        setMathDifficulty('medium')
        if (audioEnabled) speakExcited("You're getting better, Misshka! Let's try harder questions!")
      } else if (mathCorrectStreak >= 5 && mathDifficulty === 'medium') {
        setMathDifficulty('hard')
        if (audioEnabled) speakExcited("Wow Misshka! You're amazing! Here come the challenge questions!")
      }

      const messages = [
        "That's correct, Misshka! You're amazing!",
        "Wonderful job, Misshka! You got it right!",
        "Excellent work, Misshka! You're so smart!",
        "Perfect, Misshka! You're a math star!"
      ]
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]

      if (audioEnabled) {
        speakExcited(randomMessage)
      }

      // Milestone achievements
      if ((score + 1) % 5 === 0) {
        setTimeout(() => {
          if (audioEnabled) {
            speakExcited(`Amazing, Misshka! You've earned ${score + 1} stars! You're doing so well!`)
          }
        }, 2000)
      }

      setTimeout(() => generateNewMathQuestion(), 3000)
    } else {
      setMathCorrectStreak(0)
      if (audioEnabled) {
        if (mathAttempts === 0) {
          speakEncouraging("Not quite, Misshka! Try again, you can do it!")
        } else {
          speakEncouraging("That's okay, Misshka! Let's try another question!")
        }
      }
    }
  }

  const checkScienceAnswer = (answerIndex: number) => {
    setSelectedScienceAnswer(answerIndex)
    setShowScienceFeedback(true)
    setScienceAttempts(scienceAttempts + 1)

    const question = SCIENCE_QUESTIONS[currentScienceQ]

    if (answerIndex === question.correct) {
      setScore(score + 1)
      setScienceCorrectStreak(scienceCorrectStreak + 1)
      setAskedQuestions([...askedQuestions, question.id])

      // Adapt difficulty
      if (scienceCorrectStreak >= 3 && scienceDifficulty === 'easy') {
        setScienceDifficulty('medium')
        if (audioEnabled) speakExcited("You're so smart, Misshka! Let's try harder science questions!")
      } else if (scienceCorrectStreak >= 5 && scienceDifficulty === 'medium') {
        setScienceDifficulty('hard')
        if (audioEnabled) speakExcited("Incredible, Misshka! You're a science genius! Challenge mode!")
      }

      const messages = [
        `Correct, Misshka! ${question.explanation}`,
        `You're right, Misshka! ${question.explanation}`,
        `Perfect, Misshka! ${question.explanation}`
      ]
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]

      if (audioEnabled) {
        speakExcited(randomMessage)
      }

      // Milestone achievements
      if ((score + 1) % 5 === 0) {
        setTimeout(() => {
          if (audioEnabled) {
            speakExcited(`Wonderful, Misshka! You've earned ${score + 1} stars! Keep going!`)
          }
        }, 3000)
      }

      setTimeout(() => {
        loadNextScienceQuestion()
      }, 5000)
    } else {
      setScienceCorrectStreak(0)
      if (audioEnabled) {
        if (scienceAttempts === 0) {
          speakEncouraging("Hmm, not quite! Try another answer, Misshka!")
        } else {
          speakEncouraging("That's okay, Misshka! Learning is fun!")
        }
      }
    }
  }

  // Skip to next question
  const skipQuestion = (type: 'math' | 'science') => {
    if (type === 'math') {
      generateNewMathQuestion()
    } else {
      const question = SCIENCE_QUESTIONS[currentScienceQ]
      setAskedQuestions([...askedQuestions, question.id])
      loadNextScienceQuestion()
    }
  }

  // Try again (reset attempts)
  const tryAgain = (type: 'math' | 'science') => {
    if (type === 'math') {
      setSelectedMathAnswer(null)
      setShowMathFeedback(false)
    } else {
      setSelectedScienceAnswer(null)
      setShowScienceFeedback(false)
    }
  }

  // Initialize first questions
  useEffect(() => {
    generateNewMathQuestion()
    loadNextScienceQuestion()
  }, [])

  // Ask question when entering science page
  useEffect(() => {
    if (currentPage === 'science' && audioEnabled && SCIENCE_QUESTIONS[currentScienceQ]) {
      setTimeout(() => {
        const question = SCIENCE_QUESTIONS[currentScienceQ]
        speakQuestion(question.question)
      }, 500)
    }
  }, [currentPage, currentScienceQ, audioEnabled])

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
          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="activity" onClick={() => { setCurrentPage('math'); enableAudio(); }}>
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🔢</div>
                <h2 className="text-3xl font-bold text-purple-600 mb-2">Math Games</h2>
                <p className="text-xl text-gray-600">Addition and subtraction!</p>
                <p className="text-sm text-gray-500 mt-2">Level: {mathDifficulty.toUpperCase()}</p>
              </div>
            </Card>

            <Card variant="activity" onClick={() => { setCurrentPage('science'); enableAudio(); }}>
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-3xl font-bold text-purple-600 mb-2">Science Fun</h2>
                <p className="text-xl text-gray-600">Explore nature and space!</p>
                <p className="text-sm text-gray-500 mt-2">Level: {scienceDifficulty.toUpperCase()}</p>
              </div>
            </Card>
          </div>

          {/* Score Display */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-3xl shadow-lg px-8 py-4">
              <p className="text-xl text-gray-700">⭐ Stars Earned: <span className="text-3xl font-bold text-gold-400">{score}</span></p>
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
              Level: {mathDifficulty.toUpperCase()} | Streak: {mathCorrectStreak}
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold gradient-text mb-4">
              Math Challenge! {mathQuestion.operation === '+' ? '➕' : '➖'}
            </h2>
          </div>

          <div className="mb-8 flex justify-center">
            <Nova emotion={showMathFeedback && selectedMathAnswer === mathQuestion.answer ? 'celebrating' : 'happy'} size="large" />
          </div>

          {/* Math Question */}
          <div className="bg-white rounded-4xl shadow-2xl p-12 mb-8">
            <div className="text-center mb-8">
              <p className="text-6xl font-bold text-gray-800 mb-8">
                {mathQuestion.num1} {mathQuestion.operation} {mathQuestion.num2} = ?
              </p>
            </div>

            {/* Answer Options */}
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

            {/* Feedback and Navigation */}
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
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Science Activity Page */}
      {currentPage === 'science' && SCIENCE_QUESTIONS[currentScienceQ] && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <Button variant="secondary" onClick={() => setCurrentPage('home')}>
              ← Back to Home
            </Button>
            <div className="text-xl font-bold text-purple-600">
              Level: {scienceDifficulty.toUpperCase()} | Streak: {scienceCorrectStreak}
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold gradient-text mb-4">
              Science Explorer! 🚀🔬
            </h2>
          </div>

          <div className="mb-8 flex justify-center">
            <Nova emotion={showScienceFeedback && selectedScienceAnswer === SCIENCE_QUESTIONS[currentScienceQ].correct ? 'celebrating' : 'thinking'} size="large" />
          </div>

          {/* Science Question */}
          <div className="bg-white rounded-4xl shadow-2xl p-12 mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-6">{SCIENCE_QUESTIONS[currentScienceQ].emoji}</div>
              <p className="text-4xl text-gray-700 mb-4">{SCIENCE_QUESTIONS[currentScienceQ].question}</p>
              <p className="text-sm text-purple-600">Category: {SCIENCE_QUESTIONS[currentScienceQ].category.toUpperCase()}</p>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
              {SCIENCE_QUESTIONS[currentScienceQ].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedScienceAnswer === index ? (index === SCIENCE_QUESTIONS[currentScienceQ].correct ? 'gold' : 'primary') : 'purple'}
                  size="child"
                  onClick={() => checkScienceAnswer(index)}
                  disabled={showScienceFeedback}
                  className="text-xl py-6"
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Feedback and Navigation */}
            {showScienceFeedback && (
              <div className="mt-8 text-center">
                {selectedScienceAnswer === SCIENCE_QUESTIONS[currentScienceQ].correct ? (
                  <div>
                    <div className="text-4xl font-bold text-green-600 animate-bounce mb-4">
                      🎉 Perfect, Misshka! 🎉
                    </div>
                    <div className="text-2xl text-gray-700">
                      {SCIENCE_QUESTIONS[currentScienceQ].explanation}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-6">
                      {scienceAttempts === 1 ? "Hmm, try another answer!" : "That's okay! Let's learn more!"}
                    </div>
                    <div className="flex gap-4 justify-center">
                      {scienceAttempts === 1 && (
                        <Button variant="purple" onClick={() => tryAgain('science')}>
                          🔄 Try Again
                        </Button>
                      )}
                      <Button variant="secondary" onClick={() => skipQuestion('science')}>
                        ⏭️ Next Question
                      </Button>
                    </div>
                    {scienceAttempts > 1 && (
                      <div className="mt-4 text-lg text-gray-600">
                        Correct answer: {SCIENCE_QUESTIONS[currentScienceQ].options[SCIENCE_QUESTIONS[currentScienceQ].correct]}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
