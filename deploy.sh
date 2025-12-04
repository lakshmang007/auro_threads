#!/bin/bash

echo "🚀 AURA THREADS - Deployment Setup"
echo "=================================="
echo ""

echo "📋 Step 1: Database Setup"
echo "-------------------------"
echo "1. Go to: https://neon.tech"
echo "2. Sign up with GitHub"
echo "3. Create new project: 'aura-threads'"
echo "4. Copy the connection string"
echo ""
echo "Press Enter when you have your DATABASE_URL..."
read

echo ""
echo "📋 Step 2: Vercel Deployment"
echo "---------------------------"
echo "Installing Vercel CLI..."
npm install -g vercel

echo ""
echo "Building project..."
npm run build

echo ""
echo "Deploying to Vercel..."
echo "When prompted:"
echo "  - Link to existing project? N"
echo "  - Project name: auro-threads"
echo "  - Directory: ./"
echo "  - Override settings? N"
echo ""
vercel --prod

echo ""
echo "📋 Step 3: Configure Environment Variables"
echo "-----------------------------------------"
echo "After deployment:"
echo "1. Go to: https://vercel.com/dashboard"
echo "2. Select your project"
echo "3. Go to Settings → Environment Variables"
echo "4. Add these variables:"
echo "   - DATABASE_URL = [your Neon connection string]"
echo "   - SESSION_SECRET = [random string]"
echo "   - NODE_ENV = production"
echo ""
echo "5. Redeploy: vercel --prod"
echo ""
echo "✅ Done! Your site will be live at: https://auro-threads.vercel.app"
