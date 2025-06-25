# 🚀 Deployment Guide

This guide covers different deployment options for the Netflix Clone application.

## 🌍 Vercel Deployment (Recommended)

Vercel is the easiest and fastest way to deploy this React application.

### Method 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=your-repository-url)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd netflix-clone

# Deploy (follow the prompts)
vercel

# For production deployment
vercel --prod
```

### Method 3: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Deploy automatically!

## 🏠 Local Development

### Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd netflix-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run code linting
```

## 🌐 Other Deployment Options

### Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Build and deploy
   npm run build
   netlify deploy --prod --dir=dist
   ```

### GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/netflix-clone"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway deploy
```

### Render

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically

## ⚙️ Environment Configuration

### Build Environment Variables

No environment variables are required for basic deployment. The app works out of the box!

### Custom Domain (Vercel)

1. Add domain in Vercel dashboard
2. Configure DNS settings
3. SSL certificate is automatically provided

## 🔧 Build Configuration

The project includes optimized configurations:

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### vite.config.ts
Optimized for production builds with proper asset handling.

## 📊 Performance Tips

1. **Pre-compressed assets** - Vite automatically optimizes bundles
2. **Image optimization** - Images are already optimized for web
3. **Code splitting** - Automatic with Vite
4. **CDN delivery** - Vercel provides global CDN

## 🔍 Troubleshooting

### Common Issues

**Build fails on deployment:**
- Check Node.js version (18+ required)
- Verify all dependencies are in package.json
- Check for TypeScript errors

**Routing issues (404 on refresh):**
- Ensure `vercel.json` rewrites are configured
- For other platforms, configure SPA fallback

**Slow loading:**
- Enable gzip compression (automatic on Vercel)
- Optimize images if needed
- Check bundle size with `npm run build`

### Support

If you encounter issues:
1. Check the build logs
2. Verify all files are committed
3. Ensure package.json scripts are correct
4. Test locally with `npm run build && npm run preview`

---

**🎉 Your Netflix Clone is ready to deploy!**

Choose your preferred platform and follow the steps above. Vercel is recommended for the best experience.
