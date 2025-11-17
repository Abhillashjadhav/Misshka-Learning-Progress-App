import { useState, useEffect } from 'react'
import { Nova } from './components/character/Nova'
import { NovaDialog } from './components/character/NovaDialog'
import { Button } from './components/common/Button'
import { Card } from './components/common/Card'
import { speakQuestion, speakExcited, speakEncouraging } from './utils/speech'

// Science questions data
const SCIENCE_QUESTIONS = [
  {
    id: 1,
    question: "Which animal lives in the ocean?",
    emoji: "🌊",
    options: ["🐘 Elephant", "🐠 Fish", "🦁 Lion", "🐻 Bear"],
    correct: 1,
    explanation: "Fish live in the ocean! They have gills to breathe underwater."
  },
  {
    id: 2,
    question: "Which animal can fly?",
    emoji: "✨",
    options: ["🦅 Eagle", "🐄 Cow", "🐢 Turtle", "🐷 Pig"],
    correct: 0,
    explanation: "Eagles can fly high in the sky with their big wings!"
  },
  {
    id: 3,
    question: "Which planet do we live on?",
    emoji: "🌍",
    options: ["🪐 Saturn", "🌍 Earth", "🔴 Mars", "☀️ Sun"],
    correct: 1,
    explanation: "We live on Earth! It's the perfect planet for us."
  },
  {
    id: 4,
    question: "What gives us light during the day?",
    emoji: "☀️",
    options: ["🌙 Moon", "⭐ Stars", "☀️ Sun", "🔦 Flashlight"],
    correct: 2,
    explanation: "The Sun gives us light and warmth during the day!"
  },
  {
    id: 5,
    question: "Which animal is the biggest?",
    emoji: "🐋",
    options: ["🐁 Mouse", "🐋 Whale", "🐶 Dog", "🐱 Cat"],
    correct: 1,
    explanation: "Whales are the biggest animals on Earth!"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'math' | 'science'>('home')
  const [score, setScore] = useState(0)
  const [audioEnabled, setAudioEnabled] = useState(false)

  // Math activity state
  const [mathQuestion, setMathQuestion] = useState({ num1: 2, num2: 3, answer: 5 })
  const [selectedMathAnswer, setSelectedMathAnswer] = useState<number | null>(null)
  const [showMathFeedback, setShowMathFeedback] = useState(false)

  // Science activity state
  const [currentScienceQ, setCurrentScienceQ] = useState(0)
  const [selectedScienceAnswer, setSelectedScienceAnswer] = useState<number | null>(null)
  const [showScienceFeedback, setShowScienceFeedback] = useState(false)

  // Enable audio on first interaction
  const enableAudio = () => {
    if (!audioEnabled) {
      setAudioEnabled(true)
      speakExcited("Hi Misshka! I'm Nova! Let's learn together!")
    }
  }

  const generateNewMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 5) + 1
    const num2 = Math.floor(Math.random() * 5) + 1
    setMathQuestion({ num1, num2, answer: num1 + num2 })
    setSelectedMathAnswer(null)
    setShowMathFeedback(false)

    if (audioEnabled) {
      setTimeout(() => {
        speakQuestion(`How many animals in total? ${num1} plus ${num2}?`)
      }, 500)
    }
  }

  const checkMathAnswer = (answer: number) => {
    setSelectedMathAnswer(answer)
    setShowMathFeedback(true)

    if (answer === mathQuestion.answer) {
      setScore(score + 1)

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
      if (audioEnabled) {
        speakEncouraging("That's okay, Misshka! Let's try again together!")
      }
    }
  }

  const checkScienceAnswer = (answerIndex: number) => {
    setSelectedScienceAnswer(answerIndex)
    setShowScienceFeedback(true)

    const question = SCIENCE_QUESTIONS[currentScienceQ]

    if (answerIndex === question.correct) {
      setScore(score + 1)

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
        setCurrentScienceQ((currentScienceQ + 1) % SCIENCE_QUESTIONS.length)
        setSelectedScienceAnswer(null)
        setShowScienceFeedback(false)
      }, 4000)
    } else {
      if (audioEnabled) {
        speakEncouraging("Not quite, Misshka! Try another answer!")
      }
    }
  }

  // Ask question when entering science page
  useEffect(() => {
    if (currentPage === 'science' && audioEnabled) {
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
                <p className="text-xl text-gray-600">Add numbers with cute animals!</p>
              </div>
            </Card>

            <Card variant="activity" onClick={() => { setCurrentPage('science'); enableAudio(); }}>
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🚀</div>
                <h2 className="text-3xl font-bold text-purple-600 mb-2">Science Fun</h2>
                <p className="text-xl text-gray-600">Explore space and animals!</p>
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
          <div className="mb-8">
            <Button variant="secondary" onClick={() => setCurrentPage('home')}>
              ← Back to Home
            </Button>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold gradient-text mb-4">Adding Animals! 🐱🐶</h2>
          </div>

          <div className="mb-8 flex justify-center">
            <Nova emotion={showMathFeedback && selectedMathAnswer === mathQuestion.answer ? 'celebrating' : 'happy'} size="large" />
          </div>

          {/* Math Question */}
          <div className="bg-white rounded-4xl shadow-2xl p-12 mb-8">
            <div className="text-center mb-8">
              <p className="text-4xl text-gray-700 mb-8">How many animals in total?</p>

              {/* Visual representation */}
              <div className="flex justify-center gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <div className="text-6xl mb-4">
                    {Array(mathQuestion.num1).fill('🐱').join(' ')}
                  </div>
                  <p className="text-3xl font-bold">{mathQuestion.num1}</p>
                </div>
                <div className="text-6xl">+</div>
                <div className="flex flex-col items-center">
                  <div className="text-6xl mb-4">
                    {Array(mathQuestion.num2).fill('🐶').join(' ')}
                  </div>
                  <p className="text-3xl font-bold">{mathQuestion.num2}</p>
                </div>
              </div>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[mathQuestion.answer - 1, mathQuestion.answer, mathQuestion.answer + 1, mathQuestion.answer + 2].sort(() => Math.random() - 0.5).map((option) => (
                <Button
                  key={option}
                  variant={selectedMathAnswer === option ? (option === mathQuestion.answer ? 'gold' : 'primary') : 'purple'}
                  size="child"
                  onClick={() => checkMathAnswer(option)}
                  disabled={showMathFeedback}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Feedback */}
            {showMathFeedback && (
              <div className="mt-8 text-center">
                {selectedMathAnswer === mathQuestion.answer ? (
                  <div className="text-4xl font-bold text-green-600 animate-bounce">
                    🎉 That's correct, Misshka! You're amazing! 🎉
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-orange-500">
                    That's okay, Misshka! Let's try again!
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Science Activity Page */}
      {currentPage === 'science' && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="secondary" onClick={() => setCurrentPage('home')}>
              ← Back to Home
            </Button>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold gradient-text mb-4">Science Explorer! 🚀🐘</h2>
          </div>

          <div className="mb-8 flex justify-center">
            <Nova emotion={showScienceFeedback && selectedScienceAnswer === SCIENCE_QUESTIONS[currentScienceQ].correct ? 'celebrating' : 'thinking'} size="large" />
          </div>

          {/* Science Question */}
          <div className="bg-white rounded-4xl shadow-2xl p-12 mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-6">{SCIENCE_QUESTIONS[currentScienceQ].emoji}</div>
              <p className="text-4xl text-gray-700 mb-8">{SCIENCE_QUESTIONS[currentScienceQ].question}</p>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
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

            {/* Feedback */}
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
                  <div className="text-3xl font-bold text-orange-500">
                    Not quite, Misshka! Try another answer!
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
