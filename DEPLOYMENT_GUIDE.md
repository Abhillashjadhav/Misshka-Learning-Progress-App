# 🚀 Deployment Guide - Misshka's Learning Progress App

## Deploy to Render (You Have an Account!)

### Step 1: Push Code to GitHub

Since the code is on the server and committed locally, you need to get it to GitHub:

#### Option A: Download & Upload (EASIEST)
1. I'll create a ZIP file for you
2. Extract it on your Mac
3. Upload to GitHub via web interface or GitHub Desktop

#### Option B: Git Push (if you have credentials)
```bash
cd /home/user/Misshka-Learning-Progress-App
git push -u origin claude/app-development-roles-01MJC6LpxMnRWGKwxxwS2frN
```

---

### Step 2: Deploy Backend to Render

1. **Go to Render Dashboard**: https://dashboard.render.com/

2. **Create New Web Service**:
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub account (if not already)
   - Select repository: `Misshka-Learning-Progress-App`
   - Select branch: `claude/app-development-roles-01MJC6LpxMnRWGKwxxwS2frN`

3. **Configure Service**:
   - **Name**: `misshka-learning-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

4. **Add Environment Variables**:
   - `NODE_ENV` = `production`
   - `PORT` = `10000`
   - `DATABASE_URL` = `file:./prod.db`
   - `JWT_SECRET` = (click "Generate" for random value)
   - `REFRESH_SECRET` = (click "Generate" for random value)
   - `FRONTEND_URL` = (leave blank for now, will add after frontend is deployed)

5. **Deploy**:
   - Click "Create Web Service"
   - Wait 5-10 minutes for deployment
   - You'll get a URL like: `https://misshka-learning-backend.onrender.com`

---

### Step 3: Deploy Frontend to Render

1. **Create New Static Site**:
   - Click "New +"
   - Select "Static Site"
   - Select same repository
   - Select branch: `claude/app-development-roles-01MJC6LpxMnRWGKwxxwS2frN`

2. **Configure Static Site**:
   - **Name**: `misshka-learning-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

3. **Add Environment Variables**:
   - `VITE_API_URL` = `https://misshka-learning-backend.onrender.com`
   (Use the backend URL from Step 2)

4. **Deploy**:
   - Click "Create Static Site"
   - Wait 5-10 minutes
   - You'll get a URL like: `https://misshka-learning-frontend.onrender.com`

---

### Step 4: Update Backend CORS

1. Go back to your backend service on Render
2. Add/Update environment variable:
   - `FRONTEND_URL` = `https://misshka-learning-frontend.onrender.com`
3. Save changes (backend will redeploy automatically)

---

## 🎉 Done! Your App is Live!

Visit: `https://misshka-learning-frontend.onrender.com`

You should see Nova welcoming Misshka! 🦄✨

---

## Troubleshooting

**Backend not starting?**
- Check Render logs for errors
- Ensure all environment variables are set

**Frontend can't connect to backend?**
- Check CORS settings
- Verify `VITE_API_URL` matches backend URL
- Check browser console for errors

**Need help?**
Just ask and I'll help debug!
