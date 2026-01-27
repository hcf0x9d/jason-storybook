# Jason Fukura — Portfolio (Storybook)

A portfolio site built with Storybook, showcasing design systems work, case studies, and reusable components.

## Quick Start

### Run Storybook

```bash
npm run storybook
```

This starts Storybook on `http://localhost:6006`.

### Build Storybook for Deployment

```bash
npm run build-storybook
```

This creates a static build in the `storybook-static` directory.

### Run Next.js Dev Server

```bash
npm run dev
```

This starts the Next.js app on `http://localhost:3000` (though the primary site is Storybook).

## Project Structure

```
src/
├── app/                    # Next.js app (minimal, Storybook is primary)
│   └── globals.css        # Tailwind + Lineicons imports
├── components/            # Reusable portfolio components
│   ├── Icon.tsx
│   ├── PageLayout.tsx
│   ├── Callout.tsx
│   ├── Metric.tsx
│   ├── Section.tsx
│   ├── Divider.tsx
│   ├── ArtifactGallery.tsx
│   └── *.stories.tsx      # Component stories
└── stories/               # MDX pages and content
    ├── Start Here/       # Overview, How I Operate, Resume
    ├── Case Studies/     # Case study pages
    ├── Systems/          # Design system principles
    ├── Writing/          # Articles index
    └── Components/       # Component documentation (auto-generated)
```

## Content Structure

### Adding a New Case Study (MDX Page)

1. Create a new MDX file in `src/stories/Case Studies/`:
   ```mdx
   import { Meta } from '@storybook/blocks';
   import { PageLayout, Callout, Section, ... } from '../../components';
   
   <Meta title="Case Studies/Your Case Study Name" />
   
   <PageLayout title="Your Case Study" ...>
     {/* Your content */}
   </PageLayout>
   ```

2. The sidebar will automatically update based on the `title` prop in `<Meta>`.

3. Use the reusable components (`Callout`, `Section`, `Metric`, `ArtifactGallery`, etc.) to maintain consistency.

### Adding a New Component Story

1. Create a component in `src/components/YourComponent.tsx`.

2. Create a story file `src/components/YourComponent.stories.tsx`:
   ```tsx
   import type { Meta, StoryObj } from '@storybook/react';
   import { YourComponent } from './YourComponent';
   
   const meta = {
     title: 'Components/YourComponent',
     component: YourComponent,
     tags: ['autodocs'],
   } satisfies Meta<typeof YourComponent>;
   
   export default meta;
   type Story = StoryObj<typeof meta>;
   
   export const Default: Story = {
     args: { /* ... */ },
   };
   ```

3. The component will appear in the "Components" section of the sidebar.

## Components

### Icon

Wrapper for Lineicons. Usage:

```tsx
import { Icon } from '@/components';

<Icon name="lni-rocket" className="text-2xl text-blue-600" />
```

**Lineicons Import**: Lineicons is imported via npm (`lineicons` package) and included in `src/app/globals.css`. The CSS is loaded globally, so icons are available throughout Storybook.

### PageLayout

Container for MDX pages with title, subtitle, meta, and optional icon.

### Callout

Info/warn/success callouts for highlighting important content.

### Metric

Display key metrics with label, value, and optional helper text.

### Section

Structured section with heading and prose-styled content.

### Divider

Visual separator between sections.

### ArtifactGallery

Grid layout for showcasing images/artifacts with captions.

## Features

### Executive Summary Mode

A custom toolbar toggle (📊 Summary) in Docs pages that collapses long sections, showing only headings. Click headings to expand/collapse sections. State persists in localStorage.

### Typography

- Tailwind CSS v4 for styling
- `@tailwindcss/typography` for readable long-form content
- `.prose` class applied automatically in Docs pages

## Deployment

### GitHub Pages (Optional)

A workflow is included at `.github/workflows/deploy-storybook.yml` that builds and deploys Storybook on pushes to `main`.

**Setup Steps:**

1. **Enable GitHub Pages:**
   - Go to your GitHub repository → Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Configure Base Path (if needed):**
   - If your site is served from a subdirectory (e.g., `username.github.io/repo-name`):
     - Go to repository Settings → Secrets and variables → Actions
     - Add a new repository secret named `STORYBOOK_BASE_PATH`
     - Set the value to your repository name with a leading slash (e.g., `/jason-storybook`)
   - If your site is served from root (e.g., `username.github.io` or a custom domain):
     - No configuration needed - the workflow will work as-is

3. **Trigger Deployment:**
   - Push to the `main` branch to trigger automatic deployment
   - Or manually trigger via Actions tab → "Deploy Storybook to GitHub Pages" → "Run workflow"

**The workflow will:**
- Build Storybook on every push to `main`
- Deploy to GitHub Pages automatically
- Your site will be available at `https://username.github.io/repo-name` (or root if configured)

**Note:** The first deployment may take a few minutes. You can monitor progress in the Actions tab.

## Scripts

- `npm run dev` - Start Next.js dev server
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build static Storybook
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Storybook**: 10.2.0
- **Styling**: Tailwind CSS v4
- **Icons**: Lineicons (via npm)
- **Language**: TypeScript

## Notes

- Storybook is the primary "site" - Next.js is used as the underlying framework
- The UI intentionally looks like Storybook (sidebar visible, minimal theming)
- All portfolio content lives in MDX files in `src/stories/`
- Components are documented both as stories and used in MDX pages
