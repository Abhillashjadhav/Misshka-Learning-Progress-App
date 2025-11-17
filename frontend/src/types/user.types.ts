export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface Child {
  id: string;
  userId: string;
  name: string;
  age: number;
  interests: string[]; // ["animals", "space", "unicorns"]
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  child: Child | null;
  isAuthenticated: boolean;
  token: string | null;
}
