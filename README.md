# Vinodhan - Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Theme**: Professional dark theme with lime green accents
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **GitHub Integration**: Automatically fetches your latest repositories
- **Contact Form**: Easy-to-use contact form with mailto fallback
- **SEO Optimized**: Meta tags, sitemap, and robots.txt included
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons

## 📦 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

## 🔧 Configuration

### Personal Information

Update your personal details in the following files:

- **Contact info**: `src/components/Hero.tsx`, `src/components/Contact.tsx`, `src/components/Footer.tsx`
- **Projects**: `src/data/projects.ts`
- **GitHub username**: `src/lib/github.ts` and `src/components/Projects.tsx` (change "vinodhan07" to your username)
- **Skills**: `src/components/Skills.tsx`
- **About content**: `src/components/About.tsx`

### Resume

Replace `public/resume.pdf` with your own resume file.

### SEO

Update meta tags in `index.html`:
- Title
- Description
- Open Graph tags
- Twitter card tags

Update `public/sitemap.xml` with your domain.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build settings
4. Click "Deploy"

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click "Deploy"

## 📝 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Customization

### Colors

Edit the color scheme in `src/index.css`:
- `--primary`: Main accent color (lime green by default)
- `--background`: Background color
- `--foreground`: Text color
- Other semantic tokens

### Animations

Animations are configured in:
- `tailwind.config.ts` - Animation keyframes and utilities
- Components use Framer Motion for advanced animations

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

- **Email**: vinovb21@gmail.com
- **GitHub**: [vinodhan07](https://github.com/vinodhan07)
- **LinkedIn**: [vavinodhan](https://www.linkedin.com/in/vavinodhan/)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
