# Netflix Clone 

A complete Netflix clone built with React, TypeScript, Vite, and Tailwind CSS. This application replicates the Netflix experience with exact visual design, user interface, and functionality.

![Netflix Clone](https://img.shields.io/badge/Netflix-Clone-red?style=for-the-badge&logo=netflix&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🌟 Features

- **🎯 Exact Netflix Replication**: Pixel-perfect design matching Netflix's UI/UX
- **🔐 Authentication System**: Complete sign-in/sign-up flow with profile management
- **👥 Multiple Profiles**: User profiles with Kids mode and personalized experiences
- **🎬 Content Browsing**: Netflix Originals with hover previews and detailed information
- **🔍 Search Functionality**: Real-time search with content filtering
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎮 Interactive Elements**: Hover animations, auto-play previews, and smooth transitions
- **🎥 Video Player**: Full-featured player with Netflix-style controls

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** (comes with Node.js)
- **Git** (for cloning)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd netflix-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌍 Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy from project directory**
   ```bash
   cd netflix-clone
   vercel
   ```

3. **Follow the prompts**
   - Choose your scope (personal/team)
   - Link to existing project or create new
   - Vercel will auto-detect the framework and build settings

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically configure build settings

### Option 3: Deploy via GitHub Integration

1. **Fork this repository** on GitHub
2. **Connect your GitHub** account to Vercel
3. **Import the repository** in Vercel dashboard
4. **Deploy automatically** - Vercel detects the configuration

### Build Configuration

The project includes `vercel.json` for optimal deployment:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## 🛠 Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **TypeScript** | 5.6 | Type Safety |
| **Vite** | 6.3 | Build Tool & Dev Server |
| **Tailwind CSS** | 3.4 | Styling Framework |
| **React Router** | 6.x | Client-side Routing |
| **Lucide React** | 0.364 | Icon Library |
| **Radix UI** | Latest | Headless UI Components |

## 📁 Project Structure

```
netflix-clone/
├── public/                 # Static assets
│   └── images/            # Netflix content images
├── src/
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Radix UI components
│   ├── context/          # React Context providers
│   ├── data/             # Content database
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── pages/            # Page components
├── dist/                 # Production build
├── vercel.json           # Vercel deployment config
└── package.json          # Project dependencies
```

## 🎨 Features Overview

### 🏠 Landing Page
- Hero section with Netflix branding
- Feature highlights and benefits
- Trending content carousel
- Comprehensive FAQ section

### 🔐 Authentication
- Email/password sign-in and sign-up
- 3-step registration process
- Plan selection and pricing
- Profile creation and management

### 📺 Dashboard
- Personalized content recommendations
- Continue watching functionality
- Genre-based content rows
- Netflix Originals showcase

### 👤 User Experience
- Multiple user profiles
- Kids profile with age-appropriate content
- Search and content discovery
- Video player with advanced controls

## 🔧 Development

### Environment Setup

1. **Clone and install**
   ```bash
   git clone <repo-url>
   cd netflix-clone
   npm install
   ```

2. **Development workflow**
   ```bash
   npm run dev      # Start dev server
   npm run build    # Build for production
   npm run preview  # Test production build
   ```

### Code Quality

- **ESLint** - Code linting and best practices
- **TypeScript** - Type safety and better development experience
- **Prettier** - Code formatting (configure as needed)

## 🚀 Performance

- **Optimized Bundle**: ~333KB JavaScript, ~79KB CSS
- **Fast Loading**: Vite's optimized development and build process
- **Responsive Images**: Optimized Netflix content posters
- **Efficient Routing**: Client-side navigation with React Router

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational purposes only. Netflix is a trademark of Netflix, Inc.

## 🌟 Demo

**Live Demo**: [Deploy your own on Vercel](https://vercel.com/new/clone?repository-url=your-repo-url)

---

**Made with ❤️ using React, TypeScript, and Vite**

*Perfect Netflix clone ready for local development and Vercel deployment!*
