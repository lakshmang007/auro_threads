# 🚀 AURA THREADS - Live Deployment Guide

## Your GitHub Repository
✅ **Repository URL**: https://github.com/lakshmang007/auro_threads.git

---

## 🎯 Quick Deployment Steps

### Step 1: Set Up Free PostgreSQL Database (5 minutes)

#### Using Neon (Recommended - Easiest)

1. **Go to Neon**: https://neon.tech
2. **Sign up** with your GitHub account
3. **Create new project**:
   - Project name: `aura-threads`
   - Region: Choose closest to your users (e.g., AWS Asia Pacific Mumbai for India)
   - PostgreSQL version: 16 (latest)
4. **Copy connection string**:
   - Click on your project
   - Go to "Connection Details"
   - Copy the connection string (starts with `postgresql://`)
   - **Save this - you'll need it!**

Example: `postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb`

---

### Step 2: Deploy to Vercel (10 minutes)

#### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com
2. **Sign up** with GitHub
3. **Import Project**:
   - Click "Add New..." → "Project"
   - Import from GitHub: `lakshmang007/auro_threads`
   - Click "Import"
4. **Configure Project**:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. **Add Environment Variables** (IMPORTANT!):
   Click "Environment Variables" and add:
   
   ```
   DATABASE_URL = [paste your Neon connection string]
   SESSION_SECRET = [generate random string - see below]
   NODE_ENV = production
   PORT = 5000
   ```

   **Generate SESSION_SECRET**:
   - Open terminal and run: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
   - Copy the output

6. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete

7. **Your Live URL**:
   - After deployment, you'll get a URL like: `https://auro-threads.vercel.app`
   - Or custom: `https://auro-threads-[random].vercel.app`

#### Option B: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [your account]
# - Link to existing project? N
# - Project name? auro-threads
# - Directory? ./
# - Override settings? N
```

After deployment, add environment variables:
```bash
vercel env add DATABASE_URL
# Paste your Neon connection string

vercel env add SESSION_SECRET
# Paste a random string

vercel env add NODE_ENV
# Type: production
```

Then redeploy:
```bash
vercel --prod
```

---

### Step 3: Initialize Database (2 minutes)

After deployment, you need to create the database tables:

#### Option A: Using Vercel CLI
```bash
# Set your DATABASE_URL locally
export DATABASE_URL="your-neon-connection-string"

# Or on Windows:
set DATABASE_URL=your-neon-connection-string

# Push schema to database
npm run db:push

# Seed with sample products (optional)
npm run db:seed
```

#### Option B: Using Neon SQL Editor
1. Go to your Neon dashboard
2. Click "SQL Editor"
3. Run the schema creation manually (see below)

---

### Step 4: Verify Deployment

1. **Visit your live URL**: `https://auro-threads.vercel.app`
2. **Test the site**:
   - Browse products
   - Add to cart
   - Check wishlist
   - Test all features

---

## 🔧 Troubleshooting

### Build Failed?
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Ensure `npm run build` works locally

### Database Connection Error?
- Verify `DATABASE_URL` is set correctly in Vercel
- Check Neon database is active
- Ensure you ran `npm run db:push`

### 500 Internal Server Error?
- Check Vercel function logs
- Verify environment variables are set
- Check database tables exist

---

## 🎨 Custom Domain (Optional)

### Add Your Own Domain

1. **Buy a domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. **Add to Vercel**:
   - Go to Project Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

3. **Configure DNS**:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or A record to Vercel's IP

---

## 📊 Database Management

### View Your Data

**Using Neon Dashboard**:
1. Go to https://console.neon.tech
2. Select your project
3. Click "SQL Editor"
4. Run queries:
   ```sql
   -- View all products
   SELECT * FROM products;
   
   -- View all orders
   SELECT * FROM orders;
   
   -- View users
   SELECT id, username, email FROM users;
   ```

**Using TablePlus/DBeaver**:
1. Download TablePlus or DBeaver
2. Create new PostgreSQL connection
3. Paste your Neon connection string
4. Browse tables visually

---

## 🔄 Update Your Site

### Push Updates

```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main

# Vercel will automatically redeploy!
```

### Manual Redeploy
```bash
vercel --prod
```

---

## 📈 Monitor Your Site

### Vercel Analytics
- Go to your project dashboard
- Click "Analytics" tab
- View traffic, performance, and errors

### Check Logs
- Go to your project dashboard
- Click "Deployments"
- Click on a deployment
- View "Function Logs" for errors

---

## 🎯 Next Steps After Deployment

### 1. Add Real Products
- Update `server/seed.ts` with your products
- Run `npm run db:seed`
- Or add via admin interface (to be built)

### 2. Set Up Payment Gateway

**For India - Razorpay**:
1. Sign up at https://razorpay.com
2. Get API keys
3. Add to Vercel environment variables:
   ```
   RAZORPAY_KEY_ID = rzp_live_xxxxx
   RAZORPAY_KEY_SECRET = xxxxx
   ```

**For International - Stripe**:
1. Sign up at https://stripe.com
2. Get API keys
3. Add to Vercel environment variables:
   ```
   STRIPE_SECRET_KEY = sk_live_xxxxx
   STRIPE_PUBLISHABLE_KEY = pk_live_xxxxx
   ```

### 3. Set Up Email Notifications

**Using SendGrid**:
1. Sign up at https://sendgrid.com
2. Get API key
3. Add to Vercel:
   ```
   SMTP_HOST = smtp.sendgrid.net
   SMTP_PORT = 587
   SMTP_USER = apikey
   SMTP_PASSWORD = [your API key]
   ```

### 4. Add Product Images

**Using Cloudinary**:
1. Sign up at https://cloudinary.com
2. Get credentials
3. Add to Vercel:
   ```
   CLOUDINARY_CLOUD_NAME = xxxxx
   CLOUDINARY_API_KEY = xxxxx
   CLOUDINARY_API_SECRET = xxxxx
   ```

---

## ✅ Deployment Checklist

- [x] Code pushed to GitHub
- [ ] Neon database created
- [ ] Vercel project created
- [ ] Environment variables configured
- [ ] Database schema pushed
- [ ] Sample data seeded
- [ ] Site is live and accessible
- [ ] All features tested
- [ ] Custom domain added (optional)
- [ ] Payment gateway integrated
- [ ] Email service configured
- [ ] Product images uploaded

---

## 🌍 Your Live URLs

After deployment, you'll have:

- **GitHub**: https://github.com/lakshmang007/auro_threads
- **Live Site**: https://auro-threads.vercel.app (or your custom domain)
- **Vercel Dashboard**: https://vercel.com/dashboard

---

## 🆘 Need Help?

### Common Issues

**"DATABASE_URL must be set"**
- Add DATABASE_URL to Vercel environment variables
- Redeploy the project

**"Build failed"**
- Check Vercel build logs
- Ensure `npm run build` works locally
- Verify all dependencies are installed

**"Cannot connect to database"**
- Check Neon database is active
- Verify connection string is correct
- Ensure database tables exist

---

## 🎉 Success!

Once deployed, your AURA THREADS e-commerce site will be:
- ✅ Accessible worldwide
- ✅ Running on Vercel's global CDN
- ✅ Connected to PostgreSQL database
- ✅ Automatically deploying on git push
- ✅ Free to host (within Vercel's free tier)

**Your site is now live! Share it with the world! 🌟**

---

## 📞 Support

- **Email**: support@aurathreads.com
- **Location**: Bangalore, India
- **Phone**: +91 7411467931

---

*Last Updated: December 2025*
*AURA THREADS - Wear Your Anime Aura*
