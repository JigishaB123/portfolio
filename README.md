# Jigisha Bhole — Portfolio

A responsive, single-page portfolio built with React 19 and SCSS. Showcases professional experience, projects, skills, and open-source contributions.

**Live site:** [jigishabhole.dev](https://jigishabhole.dev) <!-- update if different -->

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Styling | SCSS (SASS 1.89) with custom design tokens |
| Icons | Lucide React, React Icons |
| Tooling | Create React App (react-scripts 5) |
| Linting | ESLint + Prettier |

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/              # Project screenshots and logos
│   └── Jigisha-Resume.pdf   # Downloadable resume
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, About, Skills, Experience, Projects,
│   │   │                    # Education, Contact, OpenSource
│   │   └── ui/              # Reusable components (SkillBadge, etc.)
│   ├── data/                # Content layer — projects, experience, skills,
│   │                        # education, personal info, open source
│   ├── hooks/               # useScrollAnimation, useResponsive
│   ├── styles/
│   │   └── abstracts/       # Design tokens: colors, typography, spacing,
│   │                        # breakpoints, shadows, transitions
│   ├── utils/               # Scroll navigation helpers
│   └── App.jsx              # Root component, section orchestration
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, social links, resume download, CTA |
| **About** | Professional background |
| **Skills** | Categorized by domain — Frontend, Backend, Databases, Cloud, Tools, Languages |
| **Experience** | 3 professional roles with responsibilities |
| **Projects** | 5 featured projects with tech stacks and links |
| **Education** | MS @ Northeastern University, BE @ Pune University |
| **Open Source** | Published packages and community contributions |
| **Contact** | Email and social links |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Production build
npm run build

# Run tests
npm test
```
---

## Customization

All content lives in `src/data/` — no component edits needed for content updates:

| File | Controls |
|---|---|
| `projects.js` | Project cards, tech stacks, links, images |
| `experience.js` | Work history and responsibilities |
| `skills.js` | Skill categories and badge list |
| `education.js` | Degree details |
| `personalInfo.js` | Name, title, bio, social links, location |
| `openSource.js` | Published packages and contributions |

---

## License

MIT
