import { useState } from 'react'
import { Nova } from './components/character/Nova'
import { NovaDialog } from './components/character/NovaDialog'
import { Button } from './components/common/Button'
import { Card } from './components/common/Card'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'math' | 'science'>('home')
  const [score, setScore] = useState(0)

  // Simple math activity state
  const [mathQuestion, setMathQuestion] = useState({ num1: 2, num2: 3, answer: 5 })
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const generateNewQuestion = () => {
    const num1 = Math.floor(Math.random() * 5) + 1
    const num2 = Math.floor(Math.random() * 5) + 1
    setMathQuestion({ num1, num2, answer: num1 + num2 })
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  const checkAnswer = (answer: number) => {
    setSelectedAnswer(answer)
    setShowFeedback(true)
    if (answer === mathQuestion.answer) {
      setScore(score + 1)
      setTimeout(() => generateNewQuestion(), 2000)
    }
  }

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
            <Card variant="activity" onClick={() => setCurrentPage('math')}>
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🔢</div>
                <h2 className="text-3xl font-bold text-purple-600 mb-2">Math Games</h2>
                <p className="text-xl text-gray-600">Add numbers with cute animals!</p>
              </div>
            </Card>

            <Card variant="activity" onClick={() => setCurrentPage('science')}>
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
            <Nova emotion={showFeedback && selectedAnswer === mathQuestion.answer ? 'celebrating' : 'happy'} size="large" />
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
                  variant={selectedAnswer === option ? (option === mathQuestion.answer ? 'gold' : 'primary') : 'purple'}
                  size="child"
                  onClick={() => checkAnswer(option)}
                  disabled={showFeedback}
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className="mt-8 text-center">
                {selectedAnswer === mathQuestion.answer ? (
                  <div className="text-4xl font-bold text-green-600 animate-bounce">
                    🎉 Amazing! That's correct! 🎉
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-orange-500">
                    Oops! Try again! The answer is {mathQuestion.answer}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Science Activity Page (Placeholder) */}
      {currentPage === 'science' && (
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="secondary" onClick={() => setCurrentPage('home')}>
              ← Back to Home
            </Button>
          </div>

          <div className="text-center">
            <h2 className="text-5xl font-bold gradient-text mb-8">Space Explorer! 🚀</h2>
            <div className="flex justify-center mb-8">
              <Nova emotion="thinking" size="large" />
            </div>
            <div className="nova-speech max-w-2xl mx-auto">
              <p className="text-2xl">
                The science activities are coming soon! We'll explore planets, stars, and amazing animals together! 🌟
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
