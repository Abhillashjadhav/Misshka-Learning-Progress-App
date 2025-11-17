export interface ProgressStats {
  id: string;
  childId: string;
  date: string;
  category?: 'math' | 'science' | 'overall';
  activitiesCompleted: number;
  totalTimeSeconds: number;
  accuracyAvg?: number;
  starsEarned: number;
}

export interface DailyProgress {
  date: string;
  math: ProgressStats;
  science: ProgressStats;
  overall: ProgressStats;
}

export interface OverallProgress {
  totalActivitiesCompleted: number;
  totalTimeSpent: number; // in seconds
  overallAccuracy: number; // 0-100
  currentStreak: number; // days
  longestStreak: number;
  starsEarned: number;
  level: number;
  experiencePoints: number;
}
