# DarktheDE Portfolio - AI Coding Assistant Instructions

## Project Overview
This is a personal portfolio website built with **React 19.1**, **Vite 7.1**, and **Tailwind CSS 3.4**. It's deployed to GitHub Pages at `darktheDE.github.io` and showcases projects, skills, and university coursework.

## Architecture & Key Patterns

### Component Structure
- **Main App**: Single-page application with section-based layout
- **Section Components**: `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Homework`, `Contact`, `Footer`
- **Data-driven Components**: Projects and homework are rendered from external data files
- **Responsive Design**: Mobile-first approach using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)

### Data Organization
```jsx
// Pattern: External data files in src/data/
src/data/projectsData.js    // Array of project objects
src/data/homeworkData.js    // Array of coursework assignments
```

Each project object requires: `id`, `title`, `image`, `description`, `tags[]`, `liveUrl`, `repoUrl`
Each homework object requires: `id`, `week`, `title`, `liveUrl`, `reportUrl`

### Data Structure Examples
```javascript
// src/data/projectsData.js
export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    image: "/assets/project1.png",
    description: "Full-featured e-commerce website with cart and authentication.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/darktheDE/project-repo"
  }
];

// src/data/homeworkData.js
export const homeworks = [
  {
    id: 1,
    week: 1,
    title: "Introduction to Servlets & JSP",
    liveUrl: "https://example.com/week1",
    reportUrl: "/reports/week1_report.pdf"
  }
];
```

### Styling Conventions
- **Tailwind Classes**: Use utility-first approach, prefer Tailwind over custom CSS
- **Component Styling**: Minimal custom CSS in `App.css`, mainly Tailwind utilities
- **Responsive Breakpoints**: `sm:` (640px+), `md:` (768px+), `lg:` (1024px+)
- **Color Scheme**: Currently light theme (gray-100 backgrounds, blue-500 accents)

## Development Workflow

### Essential Commands
```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # ESLint validation
npm run deploy    # Deploy to GitHub Pages (predeploy + gh-pages)
```

### Deployment Configuration
- **Build Output**: `dist/` directory (ignored in git)
- **GitHub Pages**: Uses `gh-pages` package to deploy `dist/` to `gh-pages` branch
- **Base Path**: Set to `/` in `vite.config.js` for root domain deployment (darktheDE.github.io)
- **Assets**: Static assets in `public/` (accessible via `/filename`)

### Asset Management
- **Icons**: Use `react-icons` library for consistent iconography
- **Images**: Store in `src/assets/` for bundled assets or `public/` for static files
- **Documents**: PDF reports and CV in `public/` directory

## Code Quality Standards

### ESLint Configuration
- Uses modern ESLint flat config (`eslint.config.js`)
- React Hooks rules enforced
- React Refresh (HMR) support
- Custom rule: `no-unused-vars` with exception for constants (`^[A-Z_]` pattern)

### Component Best Practices
- **Functional Components**: Use modern React patterns with hooks
- **State Management**: Currently uses `useState` for local state
- **Props Validation**: Consider adding PropTypes for reusable components
- **File Naming**: `.jsx` extension for React components

## Project-Specific Implementation Notes

### Navigation & Routing
- **Single Page**: No React Router, uses smooth scrolling to sections
- **Mobile Menu**: Implement hamburger menu pattern for responsive navigation
- **Scroll Behavior**: Use `scrollIntoView` or scroll libraries for smooth navigation

### Portfolio Sections
1. **Hero**: Full-screen introduction with CTAs
2. **About**: Two-column layout (photo + bio)
3. **Skills**: Grid layout with categorized tech skills
4. **Projects**: Card-based grid from `projectsData.js`
5. **Homework**: University coursework showcase from `homeworkData.js`
6. **Contact**: Static contact info (no form backend yet)

### Special Requirements
- **Homework Section**: Unique to this project - displays weekly Java servlet assignments
- **Report Links**: PDF documents linked from homework entries
- **Live Demo Links**: Both projects and homework link to hosted versions

## Environment & Dependencies

### React 19 Considerations
- Uses new `createRoot` API (already implemented in `main.jsx`)
- StrictMode enabled for development warnings
- Modern hook usage patterns

### Build Tool Integration
- **Vite**: Fast HMR, ES modules, optimized builds
- **PostCSS**: Tailwind processing via `postcss.config.js`
- **Asset Optimization**: Built-in asset handling and optimization

## Common Tasks & Patterns

### Adding New Projects
1. Add project object to `src/data/projectsData.js`
2. Add project image to `src/assets/` or `public/`
3. Ensure required fields: `tags`, `liveUrl`, `repoUrl`

### Styling New Components
1. Use Tailwind utilities first
2. Only add custom CSS to `App.css` for animations or complex layouts
3. Follow responsive-first design patterns
4. Maintain consistency with existing color scheme

### Testing Changes
1. Always run `npm run dev` to test locally
2. Check responsive behavior at different breakpoints
3. Run `npm run lint` before committing
4. Test production build with `npm run preview`

## Deployment Notes
- Repository: `darktheDE/darktheDE.github.io`
- Branch: Deploys from `gh-pages` branch (auto-generated)
- Domain: Direct GitHub Pages deployment
- Build artifacts in `dist/` are not committed to source control