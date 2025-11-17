export type ActivityCategory = 'math' | 'science';
export type MathSubCategory = 'addition' | 'subtraction' | 'counting' | 'shapes';
export type ScienceSubCategory = 'animals' | 'space' | 'physics' | 'chemistry';

export interface Activity {
  id: string;
  title: string;
  description?: string;
  category: ActivityCategory;
  subCategory: MathSubCategory | ScienceSubCategory;
  difficultyLevel: number; // 1-5
  recommendedAgeMin?: number;
  recommendedAgeMax?: number;
  content: ActivityContent;
  createdAt: string;
}

export interface ActivityContent {
  introduction: {
    text: string;
    narrationUrl?: string;
    imageUrl?: string;
  };
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  visualization?: {
    type: 'image-count' | 'number-line' | 'shapes' | 'animation';
    images?: Array<{ url: string; count: number }>;
    data?: any;
  };
  answerType: 'multiple_choice' | 'numeric' | 'true_false' | 'drawing';
  options?: any[];
  correctAnswer: any;
  explanation: string;
  narrationUrl?: string;
}

export interface ActivitySession {
  id: string;
  childId: string;
  activityId: string;
  startedAt: string;
  completedAt?: string;
  durationSeconds?: number;
  questionsTotal: number;
  questionsCorrect: number;
  accuracy?: number;
  attempts: QuestionAttempt[];
  isCompleted: boolean;
}

export interface QuestionAttempt {
  questionId: string;
  answer: any;
  isCorrect: boolean;
  attemptNumber: number;
  timestamp: string;
}
