// Performance tracking types for analytics and adaptive learning

import type { Subject, Category, Difficulty } from '../data/allQuestions';

export interface QuestionAttempt {
  questionId: number;
  subject: Subject;
  category: Category;
  difficulty: Difficulty;
  correct: boolean;
  timestamp: number;
  attempts: number; // How many tries before getting it right or skipping
}

export interface SubjectPerformance {
  subject: Subject;
  totalAttempts: number;
  correctAnswers: number;
  accuracy: number; // percentage
  averageAttempts: number;
  lastAttemptTime: number;
  difficultyCounts: {
    easy: { correct: number; total: number };
    medium: { correct: number; total: number };
    hard: { correct: number; total: number };
  };
  categoryPerformance: Map<Category, { correct: number; total: number }>;
}

export interface CategoryInsight {
  category: Category;
  subject: Subject;
  accuracy: number;
  totalQuestions: number;
  isStrength: boolean; // accuracy > 70%
  isWeakness: boolean; // accuracy < 40%
}

export interface LearningInsights {
  strongSubjects: Subject[];
  weakSubjects: Subject[];
  interestedCategories: Category[]; // Based on high accuracy
  recommendedCategories: Category[]; // Based on low accuracy but improving
  overallAccuracy: number;
  totalQuestionsAnswered: number;
  favoriteSubject: Subject | null; // Highest accuracy + most attempts
}

export class PerformanceTracker {
  private attempts: QuestionAttempt[] = [];
  private askedQuestions: Set<number> = new Set();

  constructor() {
    // Load from localStorage if available
    this.loadFromStorage();
  }

  // Track a question attempt
  addAttempt(attempt: QuestionAttempt) {
    this.attempts.push(attempt);
    this.askedQuestions.add(attempt.questionId);
    this.saveToStorage();
  }

  // Check if a question has been asked in this session
  hasBeenAsked(questionId: number): boolean {
    return this.askedQuestions.has(questionId);
  }

  // Get all attempts for a subject
  getSubjectAttempts(subject: Subject): QuestionAttempt[] {
    return this.attempts.filter(a => a.subject === subject);
  }

  // Calculate subject performance
  getSubjectPerformance(subject: Subject): SubjectPerformance {
    const subjectAttempts = this.getSubjectAttempts(subject);
    const correctAnswers = subjectAttempts.filter(a => a.correct).length;
    const totalAttempts = subjectAttempts.length;

    // Calculate difficulty breakdowns
    const difficultyCounts = {
      easy: { correct: 0, total: 0 },
      medium: { correct: 0, total: 0 },
      hard: { correct: 0, total: 0 },
    };

    subjectAttempts.forEach(attempt => {
      difficultyCounts[attempt.difficulty].total++;
      if (attempt.correct) {
        difficultyCounts[attempt.difficulty].correct++;
      }
    });

    // Calculate category performance
    const categoryMap = new Map<Category, { correct: number; total: number }>();
    subjectAttempts.forEach(attempt => {
      if (!categoryMap.has(attempt.category)) {
        categoryMap.set(attempt.category, { correct: 0, total: 0 });
      }
      const cat = categoryMap.get(attempt.category)!;
      cat.total++;
      if (attempt.correct) cat.correct++;
    });

    return {
      subject,
      totalAttempts,
      correctAnswers,
      accuracy: totalAttempts > 0 ? (correctAnswers / totalAttempts) * 100 : 0,
      averageAttempts: totalAttempts > 0
        ? subjectAttempts.reduce((sum, a) => sum + a.attempts, 0) / totalAttempts
        : 0,
      lastAttemptTime: subjectAttempts.length > 0
        ? Math.max(...subjectAttempts.map(a => a.timestamp))
        : 0,
      difficultyCounts,
      categoryPerformance: categoryMap,
    };
  }

  // Get learning insights with AI-driven recommendations
  getInsights(): LearningInsights {
    const subjects: Subject[] = ['math', 'science', 'english', 'general-knowledge', 'art', 'logic'];
    const performances = subjects.map(s => this.getSubjectPerformance(s));

    // Filter subjects with at least 3 attempts for meaningful analysis
    const activePerformances = performances.filter(p => p.totalAttempts >= 3);

    // Strong subjects: accuracy > 70%
    const strongSubjects = activePerformances
      .filter(p => p.accuracy > 70)
      .sort((a, b) => b.accuracy - a.accuracy)
      .map(p => p.subject);

    // Weak subjects: accuracy < 40%
    const weakSubjects = activePerformances
      .filter(p => p.accuracy < 40)
      .map(p => p.subject);

    // Overall stats
    const totalQuestions = this.attempts.length;
    const totalCorrect = this.attempts.filter(a => a.correct).length;
    const overallAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;

    // Find favorite subject (highest accuracy with most attempts)
    let favoriteSubject: Subject | null = null;
    if (activePerformances.length > 0) {
      const sorted = [...activePerformances].sort((a, b) => {
        // Weight: 70% accuracy, 30% engagement (total attempts)
        const scoreA = a.accuracy * 0.7 + (a.totalAttempts / totalQuestions) * 100 * 0.3;
        const scoreB = b.accuracy * 0.7 + (b.totalAttempts / totalQuestions) * 100 * 0.3;
        return scoreB - scoreA;
      });
      favoriteSubject = sorted[0].subject;
    }

    // Category analysis
    const allCategories = new Map<Category, { correct: number; total: number; subject: Subject }>();
    performances.forEach(perf => {
      perf.categoryPerformance.forEach((stats, category) => {
        if (!allCategories.has(category)) {
          allCategories.set(category, { ...stats, subject: perf.subject });
        }
      });
    });

    // Interested categories: accuracy > 70%
    const interestedCategories: Category[] = [];
    const recommendedCategories: Category[] = [];

    allCategories.forEach((stats, category) => {
      const accuracy = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
      if (accuracy > 70 && stats.total >= 2) {
        interestedCategories.push(category);
      } else if (accuracy >= 30 && accuracy <= 70 && stats.total >= 2) {
        // Categories where Misshka is improving - good for practice
        recommendedCategories.push(category);
      }
    });

    return {
      strongSubjects,
      weakSubjects,
      interestedCategories,
      recommendedCategories,
      overallAccuracy,
      totalQuestionsAnswered: totalQuestions,
      favoriteSubject,
    };
  }

  // Get category insights for dashboard
  getCategoryInsights(): CategoryInsight[] {
    const insights: CategoryInsight[] = [];
    const subjects: Subject[] = ['math', 'science', 'english', 'general-knowledge', 'art', 'logic'];

    subjects.forEach(subject => {
      const perf = this.getSubjectPerformance(subject);
      perf.categoryPerformance.forEach((stats, category) => {
        const accuracy = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;
        if (stats.total >= 2) { // Only show categories with at least 2 attempts
          insights.push({
            category,
            subject,
            accuracy,
            totalQuestions: stats.total,
            isStrength: accuracy > 70,
            isWeakness: accuracy < 40,
          });
        }
      });
    });

    return insights.sort((a, b) => b.accuracy - a.accuracy);
  }

  // AI-driven question selection
  selectNextQuestion(
    subject: Subject,
    _currentDifficulty: Difficulty,
    availableQuestions: number[]
  ): { questionId: number; reason: string } | null {
    const performance = this.getSubjectPerformance(subject);

    // Filter out already asked questions
    const unasked = availableQuestions.filter(id => !this.askedQuestions.has(id));

    if (unasked.length === 0) {
      return null; // All questions asked
    }

    // Select based on performance
    const random = unasked[Math.floor(Math.random() * unasked.length)];

    let reason = '';
    if (performance.totalAttempts === 0) {
      reason = 'Starting with a fresh question';
    } else if (performance.accuracy > 80) {
      reason = `You're doing great! Here's a challenge`;
    } else if (performance.accuracy < 40) {
      reason = `Let's practice this together`;
    } else {
      reason = `Building your skills`;
    }

    return { questionId: random, reason };
  }

  // Reset session (but keep historical data)
  resetSession() {
    this.askedQuestions.clear();
    this.saveToStorage();
  }

  // Clear all data (for complete reset)
  clearAllData() {
    this.attempts = [];
    this.askedQuestions.clear();
    localStorage.removeItem('misshka_performance');
  }

  // Persistence
  private saveToStorage() {
    try {
      const data = {
        attempts: this.attempts,
        askedQuestions: Array.from(this.askedQuestions),
      };
      localStorage.setItem('misshka_performance', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save performance data:', error);
    }
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem('misshka_performance');
      if (stored) {
        const data = JSON.parse(stored);
        this.attempts = data.attempts || [];
        this.askedQuestions = new Set(data.askedQuestions || []);
      }
    } catch (error) {
      console.error('Failed to load performance data:', error);
    }
  }

  // Get total count of unique questions asked
  getTotalUniqueQuestionsAsked(): number {
    return this.askedQuestions.size;
  }

  // Get last N attempts for recent activity
  getRecentAttempts(count: number = 10): QuestionAttempt[] {
    return this.attempts.slice(-count);
  }
}

// Singleton instance
export const performanceTracker = new PerformanceTracker();
