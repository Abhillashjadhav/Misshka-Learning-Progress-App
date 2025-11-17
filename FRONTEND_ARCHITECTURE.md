# Frontend Architecture
## Misshka's Learning Progress App

**Frontend Architect Agent Deliverable**

---

## Technology Stack

### Core Framework
React 18.2+ with TypeScript

Component-based architecture
Hooks for state management
TypeScript for type safety
Fast refresh for development

### Build Tool
Vite 5.0+

Lightning-fast HMR
Optimized production builds
Modern ES modules
Better than Create React App

### State Management
React Context + useReducer

No external library needed for MVP
Simple, built-in solution
Good for app-wide state

### Routing
React Router v6

Declarative routing
Nested routes for dashboard
Protected routes for parent area

### Styling
Tailwind CSS 3.x

Utility-first CSS
Custom design system configuration
Responsive design utilities
PurgeCSS for optimization

### Animation
Framer Motion

React-first animation library
Declarative animations
Gesture recognition
Spring physics
Lottie (react-lottie-player)

Complex character animations
Small file sizes
Scalable animations

### Audio
Howler.js

Cross-browser audio
Sprite support
Volume control
Audio pools for performance

### HTTP Client
Axios

Promise-based requests
Interceptors for auth
Better error handling than fetch

---

## Project Structure

kids-learning-adventure/ ├── public/ │ ├── index.html │ ├── favicon.ico │ ├── assets/ │ │ ├── images/ │ │ │ ├── nova/ # Character animations │ │ │ ├── animals/ # Animal illustrations │ │ │ ├── space/ # Space illustrations │ │ │ └── badges/ # Achievement badges │ │ ├── audio/ │ │ │ ├── music/ # Background music │ │ │ ├── sfx/ # Sound effects │ │ │ └── voice/ # Narration files │ │ └── animations/ # Lottie JSON files │ └── manifest.json # PWA manifest │ ├── src/ │ ├── main.tsx # App entry point │ ├── App.tsx # Root component │ │ │ ├── components/ # Reusable components │ │ ├── common/ │ │ │ ├── Button.tsx │ │ │ ├── Card.tsx │ │ │ ├── Modal.tsx │ │ │ ├── ProgressBar.tsx │ │ │ └── StarRating.tsx │ │ ├── layout/ │ │ │ ├── ChildLayout.tsx # Layout for child interface │ │ │ ├── ParentLayout.tsx # Layout for parent dashboard │ │ │ └── Navigation.tsx │ │ ├── character/ │ │ │ ├── Nova.tsx # Nova character component │ │ │ └── NovaDialog.tsx # Nova speech bubbles │ │ └── activities/ │ │ ├── ActivityCard.tsx │ │ ├── QuestionDisplay.tsx │ │ └── AnswerOptions.tsx │ │ │ ├── pages/ # Page components │ │ ├── child/ │ │ │ ├── HomePage.tsx # Child home screen │ │ │ ├── MathPage.tsx # Math activities │ │ │ ├── SciencePage.tsx # Science activities │ │ │ ├── DrawingPage.tsx # Drawing tools │ │ │ ├── RewardsPage.tsx # Trophy case │ │ │ └── ActivityPage.tsx # Individual activity │ │ ├── parent/ │ │ │ ├── DashboardPage.tsx # Parent dashboard │ │ │ ├── ProgressPage.tsx # Detailed progress │ │ │ ├── SettingsPage.tsx # Settings │ │ │ └── ReportsPage.tsx # Export reports │ │ ├── auth/ │ │ │ ├── LoginPage.tsx │ │ │ ├── RegisterPage.tsx │ │ │ └── OnboardingPage.tsx │ │ └── ErrorPage.tsx │ │ │ ├── features/ # Feature-specific code │ │ ├── math/ │ │ │ ├── activities/ │ │ │ │ ├── Addition.tsx │ │ │ │ ├── Subtraction.tsx │ │ │ │ ├── Counting.tsx │ │ │ │ └── Shapes.tsx │ │ │ └── utils/ │ │ │ └── mathHelpers.ts │ │ ├── science/ │ │ │ ├── activities/ │ │ │ │ ├── Animals.tsx │ │ │ │ ├── Space.tsx │ │ │ │ ├── Physics.tsx │ │ │ │ └── Chemistry.tsx │ │ │ └── utils/ │ │ │ └── scienceData.ts │ │ ├── drawing/ │ │ │ ├── Canvas.tsx │ │ │ ├── Tools.tsx │ │ │ └── Gallery.tsx │ │ └── achievements/ │ │ ├── BadgeDisplay.tsx │ │ ├── UnlockAnimation.tsx │ │ └── achievementData.ts │ │ │ ├── context/ # React Context │ │ ├── AuthContext.tsx # Authentication state │ │ ├── ProgressContext.tsx # Learning progress │ │ ├── SettingsContext.tsx # App settings │ │ └── AudioContext.tsx # Audio player │ │ │ ├── hooks/ # Custom hooks │ │ ├── useAuth.ts │ │ ├── useProgress.ts │ │ ├── useAudio.ts │ │ ├── useTimer.ts # Screen time timer │ │ ├── useActivity.ts # Activity logic │ │ └── useAnimations.ts │ │ │ ├── services/ # API services │ │ ├── api.ts # Axios instance │ │ ├── authService.ts │ │ ├── progressService.ts │ │ ├── activityService.ts │ │ └── achievementService.ts │ │ │ ├── types/ # TypeScript types │ │ ├── user.types.ts │ │ ├── activity.types.ts │ │ ├── progress.types.ts │ │ └── achievement.types.ts │ │ │ ├── utils/ # Utility functions │ │ ├── storage.ts # LocalStorage helpers │ │ ├── validators.ts # Form validation │ │ ├── formatters.ts # Data formatting │ │ └── constants.ts # App constants │ │ │ ├── styles/ # Global styles │ │ ├── index.css # Tailwind imports │ │ └── animations.css # Custom animations │ │ │ └── tests/ # Test files │ ├── components/ │ ├── hooks/ │ └── utils/ │ ├── .env.example # Environment variables template ├── .env.local # Local environment (gitignored) ├── .gitignore ├── package.json ├── tsconfig.json # TypeScript config ├── vite.config.ts # Vite configuration ├── tailwind.config.js # Tailwind configuration ├── postcss.config.js # PostCSS configuration └── README.md


---

## Key Architecture Decisions

### 1. Component Architecture

**Atomic Design Principles:**
Atoms: Button, Input, Icon, Star Molecules: Card, Modal, ProgressBar Organisms: ActivityCard, NovaCharacter, Dashboard Templates: ChildLayout, ParentLayout Pages: HomePage, MathPage, DashboardPage


**Component Patterns:**
- Presentational components (UI only)
- Container components (logic + data)
- HOC for authentication
- Render props for complex interactions

### 2. State Management Strategy

```typescript
// Global State (Context)
- Auth state (user, token, isAuthenticated)
- Progress state (completed activities, achievements, stats)
- Settings (volume, theme, time limits)
- Audio player (current track, playing state)

// Local State (useState)
- Form inputs
- UI state (modals, tooltips)
- Activity-specific state

// Server State (React Query - future)
- API data caching
- Automatic refetching
- Optimistic updates
3. Routing Structure
/                           → Landing/Welcome
/login                      → Parent login
/register                   → Parent registration
/onboarding                 → First-time setup

/child                      → Child interface (protected)
  /child/home               → Home screen
  /child/math               → Math activities list
  /child/math/:activityId   → Specific math activity
  /child/science            → Science activities list
  /child/science/:activityId → Specific science activity
  /child/drawing            → Drawing tools
  /child/rewards            → Trophy case

/parent                     → Parent dashboard (protected)
  /parent/dashboard         → Overview
  /parent/progress          → Detailed progress
  /parent/settings          → Settings
  /parent/reports           → Reports

/404                        → Not found page
4. Performance Optimizations
Code Splitting:

// Lazy load pages
const MathPage = lazy(() => import('./pages/child/MathPage'))
const SciencePage = lazy(() => import('./pages/child/SciencePage'))
const ParentDashboard = lazy(() => import('./pages/parent/DashboardPage'))

// Route-based splitting
<Route path="/child/math" element={<Suspense><MathPage /></Suspense>} />
Asset Optimization:

Images: WebP format, responsive srcset
Audio: MP3 sprite sheets
Animations: Lottie JSON (smaller than GIF/video)
Fonts: Subset fonts, preload critical fonts
Rendering Optimization:

// React.memo for expensive components
export const ActivityCard = React.memo(ActivityCardComponent)

// useMemo for expensive calculations
const sortedActivities = useMemo(() =>
  activities.sort((a, b) => a.difficulty - b.difficulty),
  [activities]
)

// useCallback for event handlers
const handleSubmit = useCallback(() => {
  submitAnswer(answer)
}, [answer])
5. Progressive Web App (PWA)
Offline Support:

Service worker for asset caching
IndexedDB for offline progress
Sync when back online
Installability:

Web app manifest
Add to home screen
Standalone display mode
Data Flow
Activity Flow
User selects activity
    ↓
Load activity data from API
    ↓
Display question/challenge
    ↓
User interacts (answer/draw/build)
    ↓
Validate answer (client + server)
    ↓
Show feedback animation
    ↓
Update progress (local + API)
    ↓
Check for achievements
    ↓
Next question or complete activity
    ↓
Save final results to API
    ↓
Update parent dashboard data
Progress Tracking Flow
Activity completed
    ↓
Calculate stats (accuracy, time, attempts)
    ↓
Update local progress context
    ↓
Send to API (debounced)
    ↓
Check achievement criteria
    ↓
Unlock achievements if earned
    ↓
Trigger celebration animation
    ↓
Notify parent (if milestone)
    ↓
Update dashboard cache
Key Features Implementation
1. Screen Time Timer
// useTimer hook
function useTimer(dailyLimit: number) {
  const [timeRemaining, setTimeRemaining] = useState(dailyLimit)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    // Load today's usage from localStorage
    const used = getUsageToday()
    setTimeRemaining(dailyLimit - used)

    // Start countdown
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        const newTime = prev - 1
        saveUsageToday(dailyLimit - newTime)

        if (newTime === 600) { // 10 minutes left
          showWarning()
        }

        if (newTime === 0) {
          handleTimeUp()
        }

        return newTime
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [dailyLimit])

  return { timeRemaining, formatTime(timeRemaining) }
}
2. Adaptive Difficulty
// Activity difficulty adjustment
function calculateNextDifficulty(history: ActivityResult[]) {
  const recent = history.slice(-5) // Last 5 attempts
  const accuracy = recent.reduce((sum, r) => sum + r.accuracy, 0) / recent.length

  if (accuracy >= 0.9) return 'increase' // Too easy
  if (accuracy <= 0.5) return 'decrease' // Too hard
  return 'maintain' // Just right
}
3. Achievement System
// Achievement unlocking logic
function checkAchievements(progress: Progress): Achievement[] {
  const newAchievements = []

  for (const achievement of ALL_ACHIEVEMENTS) {
    if (achievement.isUnlocked(progress)) {
      if (!progress.unlockedAchievements.includes(achievement.id)) {
        newAchievements.push(achievement)
        triggerCelebration(achievement)
      }
    }
  }

  return newAchievements
}
4. Audio Management
// Audio context for app-wide sound
const AudioContext = createContext<AudioContextType>(null)

function AudioProvider({ children }) {
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)

  const playSound = useCallback((soundId: string) => {
    if (!isMuted) {
      Howler.play(soundId, { volume })
    }
  }, [volume, isMuted])

  const playNarration = useCallback((text: string) => {
    // Text-to-speech or pre-recorded audio
    const audio = getNarrationAudio(text)
    audio.play()
  }, [])

  return (
    <AudioContext.Provider value={{ playSound, playNarration, volume, setVolume }}>
      {children}
    </AudioContext.Provider>
  )
}
Security Considerations
1. Authentication
JWT tokens in httpOnly cookies (not localStorage)
Refresh token rotation
Protected routes (RequireAuth HOC)
Auto-logout after inactivity
2. Data Validation
Client-side validation (UX)
Server-side validation (security)
TypeScript for type safety
Input sanitization
3. Child Safety
No external links
No user-generated content from strangers
COPPA compliance
Parental controls enforced
Testing Strategy
Unit Tests (Vitest)
// Component testing
describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByText('Click'))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
Integration Tests (React Testing Library)
// Feature testing
describe('Math Activity', () => {
  it('completes full activity flow', async () => {
    render(<MathActivity id="addition-1" />)

    // Answer questions
    await userEvent.click(screen.getByText('5'))
    await userEvent.click(screen.getByText('Submit'))

    // Check feedback
    expect(screen.getByText('Correct!')).toBeInTheDocument()

    // Check progress update
    await waitFor(() => {
      expect(screen.getByText('1/5 completed')).toBeInTheDocument()
    })
  })
})
E2E Tests (Playwright - future)
test('child can complete activity and earn achievement', async ({ page }) => {
  await page.goto('/child/home')
  await page.click('text=Math Game')
  // ... complete activity
  await expect(page.locator('.achievement-unlocked')).toBeVisible()
})
Deployment Architecture
Build Configuration
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'lottie-react'],
          'audio-vendor': ['howler'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
Environment Variables
VITE_API_URL=https://api.misskha-learning.com
VITE_APP_NAME=Misshka's Learning App
VITE_MAX_DAILY_TIME=3600
Hosting (Vercel)
Automatic deployments from GitHub
CDN for global distribution
Edge functions for API routes
Analytics and monitoring
Browser Support
Target Browsers:

Chrome 90+ (most common for kids)
Safari 14+ (iPads)
Firefox 88+
Edge 90+
Polyfills Needed:

None (modern browsers only)
Accessibility
ARIA Labels
<button aria-label="Start math activity">
  <PlayIcon />
</button>

<div role="progressbar" aria-valuenow={progress} aria-valuemax={100}>
  {progress}%
</div>
Keyboard Navigation
Tab through all interactive elements
Enter/Space to activate buttons
Escape to close modals
Arrow keys for navigation (where appropriate)
Screen Reader Support (for parents)
Semantic HTML
Proper heading hierarchy
Alt text for all images
Live regions for dynamic updates
Performance Budget
Target Metrics:

First Contentful Paint (FCP): < 1.5s
Largest Contentful Paint (LCP): < 2.5s
Time to Interactive (TTI): < 3s
Cumulative Layout Shift (CLS): < 0.1
Total bundle size: < 500KB (gzipped)
Monitoring:

Lighthouse CI
Web Vitals reporting
Error tracking (Sentry)
Analytics (privacy-focused)
Next Steps
✅ Frontend architecture approved
→ Set up Vite + React + TypeScript project
→ Configure Tailwind CSS with custom design system
→ Implement core components
→ Build authentication flow
→ Build child interface
→ Build parent dashboard
→ Integrate with backend API
→ Add animations and audio
→ Testing and optimization
Status: ✅ Frontend Architecture Complete Ready for: Backend Architecture & Development

