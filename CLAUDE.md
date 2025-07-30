# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Start development server with Turbopack for faster refreshes
npm run dev

# Build for production (creates standalone output for Docker)
npm run build

# Run production server
npm run start

# Run linting
npm run lint
```

## Environment Variables

Required for contact form functionality:
- `TELEGRAM_BOT_TOKEN`: Telegram bot token for contact form notifications
- `TELEGRAM_CHAT_ID`: Telegram chat ID where notifications will be sent
- `CSRF_SECRET`: Secret key for CSRF token generation (optional, has default for development)

## Architecture Overview

This is a Next.js 15 portfolio website with a single-page design. Key architectural elements:

### Technology Stack
- **Framework**: Next.js 15.3.2 with App Router
- **UI Libraries**: HeroUI (NextUI fork), Tailwind CSS, Framer Motion, RSuite
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom purple-dark theme
- **Deployment**: Docker-ready with standalone output, GitHub Pages

### Project Structure
```
app/
├── components/         # Reusable UI components
│   ├── forms/         # Contact form and LINE Notify integration
│   ├── navbar/        # Navigation components
│   ├── selections/    # Main page sections (home, skills, experience, projects)
│   └── timeline/      # Experience timeline components
├── config/
│   └── site.ts        # All site content and data (experiences, skills, projects)
├── api/
│   └── contact/       # Contact form API endpoint
├── [handle]/          # Dynamic catch-all route (redirects to home)
└── page.tsx           # Main single-page portfolio
```

### Key Design Patterns
1. **Single Source of Truth**: All content data is centralized in `app/config/site.ts`
2. **Client Components**: Most components use "use client" for interactivity
3. **Theme System**: Dark mode default with HeroUI + next-themes integration
4. **Responsive Design**: Mobile-first approach using Tailwind breakpoints

### Development Guidelines
- The site is primarily client-side rendered for rich interactions
- All new components should follow the existing pattern of TypeScript + client components
- Content updates should be made in `app/config/site.ts`
- Maintain the existing component organization structure
- The dynamic `[handle]` route is reserved for future expansion

### Docker Deployment
The project includes a multi-stage Dockerfile that:
1. Builds a standalone Next.js application
2. Runs on port 3000
3. Uses Node.js 20 Alpine for minimal image size