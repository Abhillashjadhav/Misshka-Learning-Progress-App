import { performanceTracker } from '../types/performance';
import { SUBJECT_METADATA } from '../data/allQuestions';
import { Card } from './common/Card';
import { Button } from './common/Button';

interface DashboardProps {
  onClose: () => void;
}

export function Dashboard({ onClose }: DashboardProps) {
  const insights = performanceTracker.getInsights();
  const categoryInsights = performanceTracker.getCategoryInsights();

  const subjects = Object.keys(SUBJECT_METADATA) as Array<keyof typeof SUBJECT_METADATA>;
  const performances = subjects.map(s => performanceTracker.getSubjectPerformance(s));

  // Filter subjects with at least 1 attempt
  const activePerformances = performances.filter(p => p.totalAttempts > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold gradient-text">
            Misshka's Learning Dashboard
          </h1>
          <Button variant="secondary" onClick={onClose}>
            ← Back
          </Button>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="p-6 text-center">
              <div className="text-6xl mb-2">⭐</div>
              <div className="text-3xl font-bold text-purple-600">
                {insights.totalQuestionsAnswered}
              </div>
              <div className="text-gray-600">Questions Answered</div>
            </div>
          </Card>

          <Card>
            <div className="p-6 text-center">
              <div className="text-6xl mb-2">🎯</div>
              <div className="text-3xl font-bold text-green-600">
                {insights.overallAccuracy.toFixed(1)}%
              </div>
              <div className="text-gray-600">Overall Accuracy</div>
            </div>
          </Card>

          <Card>
            <div className="p-6 text-center">
              <div className="text-6xl mb-2">
                {insights.favoriteSubject ? SUBJECT_METADATA[insights.favoriteSubject].icon : '🌟'}
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {insights.favoriteSubject
                  ? SUBJECT_METADATA[insights.favoriteSubject].name
                  : 'Keep Learning!'}
              </div>
              <div className="text-gray-600">Favorite Subject</div>
            </div>
          </Card>
        </div>

        {/* Strengths and Weaknesses */}
        {(insights.strongSubjects.length > 0 || insights.weakSubjects.length > 0) && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Strengths */}
            {insights.strongSubjects.length > 0 && (
              <Card>
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-green-600 mb-4 flex items-center gap-2">
                    💪 Strengths
                  </h2>
                  <div className="space-y-3">
                    {insights.strongSubjects.map(subject => {
                      const perf = performanceTracker.getSubjectPerformance(subject);
                      return (
                        <div key={subject} className="flex items-center justify-between bg-green-50 p-3 rounded-xl">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{SUBJECT_METADATA[subject].icon}</span>
                            <span className="text-lg font-semibold text-gray-700">
                              {SUBJECT_METADATA[subject].name}
                            </span>
                          </div>
                          <div className="text-xl font-bold text-green-600">
                            {perf.accuracy.toFixed(0)}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-gray-600 italic">
                    Amazing work, Misshka! You're excelling in these subjects! 🌟
                  </p>
                </div>
              </Card>
            )}

            {/* Areas for Improvement */}
            {insights.weakSubjects.length > 0 && (
              <Card>
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                    📈 Let's Practice More
                  </h2>
                  <div className="space-y-3">
                    {insights.weakSubjects.map(subject => {
                      const perf = performanceTracker.getSubjectPerformance(subject);
                      return (
                        <div key={subject} className="flex items-center justify-between bg-orange-50 p-3 rounded-xl">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{SUBJECT_METADATA[subject].icon}</span>
                            <span className="text-lg font-semibold text-gray-700">
                              {SUBJECT_METADATA[subject].name}
                            </span>
                          </div>
                          <div className="text-xl font-bold text-orange-600">
                            {perf.accuracy.toFixed(0)}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-gray-600 italic">
                    Keep trying, Misshka! Practice makes perfect! 💪
                  </p>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Subject Performance Breakdown */}
        {activePerformances.length > 0 && (
          <Card>
            <div className="p-6">
              <h2 className="text-3xl font-bold text-purple-600 mb-6">
                Subject Performance
              </h2>
              <div className="space-y-4">
                {activePerformances.map(perf => (
                  <div key={perf.subject} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{SUBJECT_METADATA[perf.subject].icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {SUBJECT_METADATA[perf.subject].name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {perf.totalAttempts} question{perf.totalAttempts !== 1 ? 's' : ''} answered
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${
                          perf.accuracy > 70 ? 'text-green-600' :
                          perf.accuracy > 40 ? 'text-yellow-600' :
                          'text-orange-600'
                        }`}>
                          {perf.accuracy.toFixed(1)}%
                        </div>
                        <div className="text-sm text-gray-500">
                          {perf.correctAnswers}/{perf.totalAttempts} correct
                        </div>
                      </div>
                    </div>

                    {/* Difficulty breakdown */}
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      {(['easy', 'medium', 'hard'] as const).map(diff => {
                        const count = perf.difficultyCounts[diff];
                        if (count.total === 0) return null;
                        const acc = (count.correct / count.total) * 100;
                        return (
                          <div key={diff} className="bg-gray-50 p-2 rounded-lg text-center">
                            <div className="text-xs text-gray-600 uppercase">{diff}</div>
                            <div className={`text-lg font-bold ${
                              acc > 70 ? 'text-green-600' :
                              acc > 40 ? 'text-yellow-600' :
                              'text-orange-600'
                            }`}>
                              {acc.toFixed(0)}%
                            </div>
                            <div className="text-xs text-gray-500">
                              {count.correct}/{count.total}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Category Insights - What Misshka Loves */}
        {insights.interestedCategories.length > 0 && (
          <Card className="mt-6">
            <div className="p-6">
              <h2 className="text-3xl font-bold text-pink-600 mb-4">
                💖 What Misshka Loves
              </h2>
              <p className="text-gray-600 mb-4">
                Based on your high accuracy, you seem to really enjoy these topics:
              </p>
              <div className="flex flex-wrap gap-3">
                {insights.interestedCategories.map(category => (
                  <div
                    key={category}
                    className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-semibold text-lg"
                  >
                    {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600 italic">
                Great job, Misshka! Your interests are showing! Keep exploring what you love! 🌟
              </p>
            </div>
          </Card>
        )}

        {/* Recommended Practice Areas */}
        {insights.recommendedCategories.length > 0 && (
          <Card className="mt-6">
            <div className="p-6">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                🎯 Recommended Practice
              </h2>
              <p className="text-gray-600 mb-4">
                These topics would be great for you to practice more:
              </p>
              <div className="flex flex-wrap gap-3">
                {insights.recommendedCategories.map(category => (
                  <div
                    key={category}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-lg"
                  >
                    {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600 italic">
                Keep practicing, Misshka! You're making great progress! 💪
              </p>
            </div>
          </Card>
        )}

        {/* Empty State */}
        {insights.totalQuestionsAnswered === 0 && (
          <Card>
            <div className="p-12 text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold text-gray-700 mb-2">
                Start Your Learning Journey!
              </h2>
              <p className="text-xl text-gray-600">
                Answer some questions to see your progress and insights here!
              </p>
            </div>
          </Card>
        )}

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Button variant="primary" size="large" onClick={onClose}>
            Continue Learning
          </Button>
        </div>
      </div>
    </div>
  );
}
