export interface Achievement {
  id: string;
  title: string;
  description?: string;
  category: 'math' | 'science' | 'overall' | 'special';
  badgeIconUrl?: string;
  criteria: AchievementCriteria;
  rewardPoints: number;
  createdAt: string;
}

export interface AchievementCriteria {
  type: 'activity_count' | 'accuracy' | 'streak' | 'time_spent' | 'special';
  category?: 'math' | 'science' | 'overall';
  count?: number;
  accuracyMin?: number;
  days?: number;
  timeSeconds?: number;
}

export interface UserAchievement {
  id: string;
  childId: string;
  achievementId: string;
  achievement: Achievement;
  unlockedAt: string;
  notifiedParent: boolean;
}
