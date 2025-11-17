# Backend Architecture
## Misshka's Learning Progress App

**Backend Architect Agent Deliverable**

---

## Technology Stack

### Runtime & Framework
Node.js 20.x LTS + Express.js 4.x

Mature, stable ecosystem
Excellent for real-time features
Easy deployment
Great TypeScript support

### Database
PostgreSQL 15+ (Production) SQLite (Development)

Reason: PostgreSQL for robust data integrity SQLite for easy local development


### ORM
Prisma 5.x

Type-safe database client
Auto-generated types
Easy migrations
Great DX

### Authentication
JSON Web Tokens (JWT)

Stateless authentication
Refresh token rotation
httpOnly cookies for security

### File Storage
AWS S3 or Cloudflare R2

User drawings/creations
Achievement badges
Audio files

---

## API Architecture

### REST API Design

**Base URL**: `https://api.misshka-learning.com/v1`

**Endpoints:**

#### Authentication
POST /auth/register # Parent registration POST /auth/login # Parent login POST /auth/logout # Logout POST /auth/refresh # Refresh access token GET /auth/me # Get current user


#### Child Profile
GET /child # Get child profile PUT /child # Update child profile (age, interests) POST /child/setup # Initial setup


#### Activities
GET /activities # List all activities GET /activities/:id # Get activity details GET /activities/math # Math activities only GET /activities/science # Science activities only POST /activities/:id/start # Start activity session POST /activities/:id/submit # Submit answer GET /activities/:id/progress # Get activity progress


#### Progress
GET /progress # Overall progress GET /progress/stats # Statistics (accuracy, time, etc.) GET /progress/weekly # Weekly summary GET /progress/export # Export progress report (PDF) POST /progress/activity # Save activity completion


#### Achievements
GET /achievements # List all achievements GET /achievements/unlocked # User's unlocked achievements POST /achievements/check # Check for new achievements


#### Screen Time
GET /screen-time/today # Today's usage POST /screen-time/log # Log session time GET /screen-time/limit # Get daily limit PUT /screen-time/limit # Update limit (parent only)


#### Parent Dashboard
GET /parent/dashboard # Dashboard summary GET /parent/notifications # Achievement notifications PUT /parent/settings # Update settings GET /parent/reports # Detailed reports


#### Content
GET /content/narration/:id # Get audio narration file GET /content/image/:id # Get image asset


---

## Database Schema

### Tables

#### users (Parents)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
children
CREATE TABLE children (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL,
  interests JSONB DEFAULT '[]'::jsonb,  -- ["animals", "space", "unicorns"]
  avatar_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
activities
CREATE TABLE activities (
  id VARCHAR(50) PRIMARY KEY,  -- "math-addition-1"
  title VARCHAR(200) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL,  -- "math" or "science"
  sub_category VARCHAR(50),       -- "addition", "animals", etc.
  difficulty_level INTEGER NOT NULL,  -- 1-5
  recommended_age_min INTEGER,
  recommended_age_max INTEGER,
  content JSONB NOT NULL,  -- Activity questions/challenges
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
activity_sessions
CREATE TABLE activity_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  activity_id VARCHAR(50) REFERENCES activities(id),
  started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP,
  duration_seconds INTEGER,
  questions_total INTEGER NOT NULL,
  questions_correct INTEGER DEFAULT 0,
  accuracy DECIMAL(5, 2),  -- 0.00 to 100.00
  attempts JSONB DEFAULT '[]'::jsonb,  -- Array of attempts
  is_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
achievements
CREATE TABLE achievements (
  id VARCHAR(50) PRIMARY KEY,  -- "first-math-activity"
  title VARCHAR(200) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL,
  badge_icon_url VARCHAR(255),
  criteria JSONB NOT NULL,  -- Unlock criteria
  reward_points INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
user_achievements
CREATE TABLE user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  achievement_id VARCHAR(50) REFERENCES achievements(id),
  unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notified_parent BOOLEAN DEFAULT FALSE,
  UNIQUE(child_id, achievement_id)
);
progress_stats
CREATE TABLE progress_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  category VARCHAR(50),  -- "math", "science", "overall"
  activities_completed INTEGER DEFAULT 0,
  total_time_seconds INTEGER DEFAULT 0,
  accuracy_avg DECIMAL(5, 2),
  stars_earned INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(child_id, date, category)
);
screen_time_logs
CREATE TABLE screen_time_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  session_start TIMESTAMP NOT NULL,
  session_end TIMESTAMP,
  duration_seconds INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
settings
CREATE TABLE settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  daily_time_limit_seconds INTEGER DEFAULT 3600,  -- 1 hour
  volume DECIMAL(3, 2) DEFAULT 0.70,
  narration_enabled BOOLEAN DEFAULT TRUE,
  notifications_enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
drawings (User creations)
CREATE TABLE drawings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_id UUID REFERENCES children(id) ON DELETE CASCADE,
  title VARCHAR(200),
  image_url VARCHAR(255) NOT NULL,
  category VARCHAR(50),  -- "math", "science", "free"
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Prisma Schema
// schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String    @id @default(uuid())
  email        String    @unique
  passwordHash String    @map("password_hash")
  name         String
  children     Child[]
  createdAt    DateTime  @default(now()) @map("created_at")
  updatedAt    DateTime  @updatedAt @map("updated_at")

  @@map("users")
}

model Child {
  id                 String              @id @default(uuid())
  userId             String              @map("user_id")
  user               User                @relation(fields: [userId], references: [id], onDelete: Cascade)
  name               String
  age                Int
  interests          Json                @default("[]")
  avatarUrl          String?             @map("avatar_url")
  sessions           ActivitySession[]
  achievements       UserAchievement[]
  stats              ProgressStat[]
  screenTimeLogs     ScreenTimeLog[]
  settings           Setting?
  drawings           Drawing[]
  createdAt          DateTime            @default(now()) @map("created_at")
  updatedAt          DateTime            @updatedAt @map("updated_at")

  @@map("children")
}

model Activity {
  id                 String              @id
  title              String
  description        String?
  category           String
  subCategory        String?             @map("sub_category")
  difficultyLevel    Int                 @map("difficulty_level")
  recommendedAgeMin  Int?                @map("recommended_age_min")
  recommendedAgeMax  Int?                @map("recommended_age_max")
  content            Json
  sessions           ActivitySession[]
  createdAt          DateTime            @default(now()) @map("created_at")

  @@map("activities")
}

model ActivitySession {
  id               String    @id @default(uuid())
  childId          String    @map("child_id")
  child            Child     @relation(fields: [childId], references: [id], onDelete: Cascade)
  activityId       String    @map("activity_id")
  activity         Activity  @relation(fields: [activityId], references: [id])
  startedAt        DateTime  @default(now()) @map("started_at")
  completedAt      DateTime? @map("completed_at")
  durationSeconds  Int?      @map("duration_seconds")
  questionsTotal   Int       @map("questions_total")
  questionsCorrect Int       @default(0) @map("questions_correct")
  accuracy         Decimal?  @db.Decimal(5, 2)
  attempts         Json      @default("[]")
  isCompleted      Boolean   @default(false) @map("is_completed")
  createdAt        DateTime  @default(now()) @map("created_at")

  @@map("activity_sessions")
}

model Achievement {
  id            String             @id
  title         String
  description   String?
  category      String
  badgeIconUrl  String?            @map("badge_icon_url")
  criteria      Json
  rewardPoints  Int                @default(0) @map("reward_points")
  users         UserAchievement[]
  createdAt     DateTime           @default(now()) @map("created_at")

  @@map("achievements")
}

model UserAchievement {
  id             String      @id @default(uuid())
  childId        String      @map("child_id")
  child          Child       @relation(fields: [childId], references: [id], onDelete: Cascade)
  achievementId  String      @map("achievement_id")
  achievement    Achievement @relation(fields: [achievementId], references: [id])
  unlockedAt     DateTime    @default(now()) @map("unlocked_at")
  notifiedParent Boolean     @default(false) @map("notified_parent")

  @@unique([childId, achievementId])
  @@map("user_achievements")
}

model ProgressStat {
  id                   String   @id @default(uuid())
  childId              String   @map("child_id")
  child                Child    @relation(fields: [childId], references: [id], onDelete: Cascade)
  date                 DateTime @db.Date
  category             String?
  activitiesCompleted  Int      @default(0) @map("activities_completed")
  totalTimeSeconds     Int      @default(0) @map("total_time_seconds")
  accuracyAvg          Decimal? @db.Decimal(5, 2) @map("accuracy_avg")
  starsEarned          Int      @default(0) @map("stars_earned")
  createdAt            DateTime @default(now()) @map("created_at")

  @@unique([childId, date, category])
  @@map("progress_stats")
}

model ScreenTimeLog {
  id              String    @id @default(uuid())
  childId         String    @map("child_id")
  child           Child     @relation(fields: [childId], references: [id], onDelete: Cascade)
  date            DateTime  @db.Date
  sessionStart    DateTime  @map("session_start")
  sessionEnd      DateTime? @map("session_end")
  durationSeconds Int?      @map("duration_seconds")
  createdAt       DateTime  @default(now()) @map("created_at")

  @@map("screen_time_logs")
}

model Setting {
  id                      String   @id @default(uuid())
  childId                 String   @unique @map("child_id")
  child                   Child    @relation(fields: [childId], references: [id], onDelete: Cascade)
  dailyTimeLimitSeconds   Int      @default(3600) @map("daily_time_limit_seconds")
  volume                  Decimal  @default(0.70) @db.Decimal(3, 2)
  narrationEnabled        Boolean  @default(true) @map("narration_enabled")
  notificationsEnabled    Boolean  @default(true) @map("notifications_enabled")
  createdAt               DateTime @default(now()) @map("created_at")
  updatedAt               DateTime @updatedAt @map("updated_at")

  @@map("settings")
}

model Drawing {
  id         String   @id @default(uuid())
  childId    String   @map("child_id")
  child      Child    @relation(fields: [childId], references: [id], onDelete: Cascade)
  title      String?
  imageUrl   String   @map("image_url")
  category   String?
  createdAt  DateTime @default(now()) @map("created_at")

  @@map("drawings")
}
Project Structure
backend/
├── src/
│   ├── server.ts                 # App entry point
│   ├── app.ts                    # Express app setup
│   │
│   ├── config/
│   │   ├── database.ts           # Prisma client
│   │   ├── auth.ts               # JWT config
│   │   └── storage.ts            # S3/R2 config
│   │
│   ├── middleware/
│   │   ├── auth.ts               # Authentication middleware
│   │   ├── errorHandler.ts      # Global error handler
│   │   ├── validation.ts         # Request validation
│   │   ├── rateLimit.ts          # Rate limiting
│   │   └── cors.ts               # CORS configuration
│   │
│   ├── routes/
│   │   ├── index.ts              # Route aggregator
│   │   ├── auth.routes.ts
│   │   ├── child.routes.ts
│   │   ├── activities.routes.ts
│   │   ├── progress.routes.ts
│   │   ├── achievements.routes.ts
│   │   ├── screenTime.routes.ts
│   │   ├── parent.routes.ts
│   │   └── content.routes.ts
│   │
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── child.controller.ts
│   │   ├── activities.controller.ts
│   │   ├── progress.controller.ts
│   │   ├── achievements.controller.ts
│   │   ├── screenTime.controller.ts
│   │   └── parent.controller.ts
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── child.service.ts
│   │   ├── activity.service.ts
│   │   ├── progress.service.ts
│   │   ├── achievement.service.ts
│   │   ├── screenTime.service.ts
│   │   ├── notification.service.ts
│   │   └── storage.service.ts
│   │
│   ├── utils/
│   │   ├── jwt.ts                # JWT helpers
│   │   ├── hash.ts               # Password hashing
│   │   ├── validators.ts         # Data validators
│   │   └── logger.ts             # Winston logger
│   │
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── activity.types.ts
│   │   └── express.d.ts          # Express type extensions
│   │
│   └── __tests__/
│       ├── auth.test.ts
│       ├── activities.test.ts
│       └── progress.test.ts
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts                   # Seed data
│
├── .env.example
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
Authentication Flow
1. Parent Registration
   POST /auth/register
   { email, password, name }
       ↓
   Hash password (bcrypt, 12 rounds)
       ↓
   Create user in database
       ↓
   Generate JWT access token (15 min)
   Generate refresh token (7 days)
       ↓
   Set httpOnly cookies
       ↓
   Return user data (no password)

2. Parent Login
   POST /auth/login
   { email, password }
       ↓
   Find user by email
       ↓
   Verify password (bcrypt.compare)
       ↓
   Generate new tokens
       ↓
   Set httpOnly cookies
       ↓
   Return user + child data

3. Token Refresh
   POST /auth/refresh
   (Refresh token from cookie)
       ↓
   Verify refresh token
       ↓
   Generate new access token
       ↓
   Optionally rotate refresh token
       ↓
   Set new cookies
       ↓
   Return success

4. Protected Routes
   GET /activities (requires auth)
   Authorization: Bearer {token}
       ↓
   Extract token from cookie/header
       ↓
   Verify JWT
       ↓
   Attach user to req.user
       ↓
   Continue to route handler
Activity Content Storage
Activities are stored as JSON in database:

{
  "id": "math-addition-1",
  "title": "Adding Animals",
  "category": "math",
  "subCategory": "addition",
  "difficultyLevel": 1,
  "content": {
    "introduction": {
      "text": "Let's learn addition with animals!",
      "narration_url": "/audio/math-add-1-intro.mp3",
      "image_url": "/images/nova-welcome.png"
    },
    "questions": [
      {
        "id": "q1",
        "question": "How many animals in total?",
        "visualization": {
          "type": "image-count",
          "images": [
            { "url": "/animals/cat.png", "count": 2 },
            { "url": "/animals/dog.png", "count": 3 }
          ]
        },
        "answer_type": "multiple_choice",
        "options": [3, 4, 5, 6],
        "correct_answer": 5,
        "explanation": "2 cats + 3 dogs = 5 animals!",
        "narration_url": "/audio/math-add-1-q1.mp3"
      }
    ]
  }
}
Achievement Criteria Logic
// Example achievement criteria
{
  "id": "first-math-master",
  "title": "Math Beginner",
  "criteria": {
    "type": "activity_count",
    "category": "math",
    "count": 5,
    "accuracy_min": 0.7
  }
}

// Checking logic
async function checkAchievement(childId: string, achievementId: string) {
  const achievement = await getAchievement(achievementId)
  const progress = await getChildProgress(childId)

  switch (achievement.criteria.type) {
    case 'activity_count':
      return progress.completedActivities[achievement.criteria.category] >= achievement.criteria.count
    case 'accuracy':
      return progress.overallAccuracy >= achievement.criteria.accuracy_min
    case 'streak':
      return progress.currentStreak >= achievement.criteria.days
    // ... more criteria types
  }
}
Security Measures
1. Password Security
import bcrypt from 'bcrypt'

// Hashing
const hash = await bcrypt.hash(password, 12)

// Verification
const isValid = await bcrypt.compare(password, hash)
2. JWT Security
// Access token (short-lived)
const accessToken = jwt.sign(
  { userId: user.id, email: user.email },
  process.env.JWT_SECRET!,
  { expiresIn: '15m' }
)

// Refresh token (longer-lived)
const refreshToken = jwt.sign(
  { userId: user.id, tokenVersion: user.tokenVersion },
  process.env.REFRESH_SECRET!,
  { expiresIn: '7d' }
)
3. Rate Limiting
import rateLimit from 'express-rate-limit'

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many login attempts'
})

app.use('/auth/login', authLimiter)
4. Input Validation
import { z } from 'zod'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2).max(100)
})

// In route
const { email, password, name } = registerSchema.parse(req.body)
5. CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true, // Allow cookies
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
Error Handling
class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message)
  }
}

// Global error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  // Log unexpected errors
  logger.error(err)

  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong'
  })
})
Deployment
Environment Variables
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@host:5432/dbname
JWT_SECRET=your-secret-key-change-this
REFRESH_SECRET=your-refresh-secret-change-this
FRONTEND_URL=https://misshka-learning.com
S3_BUCKET_NAME=misshka-learning-assets
S3_REGION=us-east-1
S3_ACCESS_KEY=your-key
S3_SECRET_KEY=your-secret
Hosting Options
Railway (Recommended): Easy deploy, PostgreSQL included
Render: Free tier available
Heroku: Well-known, easy setup
AWS ECS: More control, more complex
Monitoring
Logging (Winston)
import winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})
Health Check Endpoint
app.get('/health', async (req, res) => {
  const dbStatus = await checkDatabaseConnection()
  const storageStatus = await checkStorageConnection()

  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now(),
    services: {
      database: dbStatus ? 'healthy' : 'unhealthy',
      storage: storageStatus ? 'healthy' : 'unhealthy'
    }
  })
})
Performance Optimizations
Database Indexing
CREATE INDEX idx_child_id ON activity_sessions(child_id);
CREATE INDEX idx_activity_id ON activity_sessions(activity_id);
CREATE INDEX idx_date ON progress_stats(date);
CREATE INDEX idx_child_date ON screen_time_logs(child_id, date);
Caching (Redis - Future)
// Cache frequently accessed data
const activities = await redis.get('activities:all')
if (!activities) {
  const data = await prisma.activity.findMany()
  await redis.setex('activities:all', 3600, JSON.stringify(data))
  return data
}
return JSON.parse(activities)
Query Optimization
// Include related data in single query
const child = await prisma.child.findUnique({
  where: { id: childId },
  include: {
    settings: true,
    achievements: {
      include: { achievement: true }
    },
    stats: {
      where: {
        date: { gte: lastWeek }
      }
    }
  }
})
Testing Strategy
Unit Tests (Jest)
describe('AuthService', () => {
  it('should hash password correctly', async () => {
    const password = 'Test1234!'
    const hash = await AuthService.hashPassword(password)
    expect(hash).not.toBe(password)
    expect(await bcrypt.compare(password, hash)).toBe(true)
  })
})
Integration Tests
describe('POST /auth/register', () => {
  it('should create new user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        email: 'test@example.com',
        password: 'Test1234!',
        name: 'Test User'
      })

    expect(res.status).toBe(201)
    expect(res.body.user.email).toBe('test@example.com')
  })
})
Next Steps
✅ Backend architecture approved
→ Initialize Node.js + Express + TypeScript project
→ Set up Prisma with PostgreSQL
→ Implement authentication endpoints
→ Implement activity endpoints
→ Implement progress tracking
→ Seed database with initial activities
→ Deploy to Railway/Render
→ Connect to frontend
Status: ✅ Backend Architecture Complete Ready for: Implementation & Deployment
