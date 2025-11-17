import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Basic health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Misshka Learning API is running!' });
});

// API routes
app.get('/api/v1', (req, res) => {
  res.json({ 
    message: 'Welcome to Misshka Learning API',
    version: '1.0.0'
  });
});

// Auth routes (placeholder for now)
app.post('/api/v1/auth/register', (req, res) => {
  res.json({ message: 'Register endpoint - coming soon!' });
});

app.post('/api/v1/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint - coming soon!' });
});

// Activities route (placeholder)
app.get('/api/v1/activities', (req, res) => {
  res.json({
    activities: [
      {
        id: 'math-addition-1',
        title: 'Adding Animals',
        category: 'math',
        difficultyLevel: 1
      },
      {
        id: 'science-animals-1',
        title: 'Meet the Animals',
        category: 'science',
        difficultyLevel: 1
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 Misshka's Learning Progress App - Backend API`);
});
