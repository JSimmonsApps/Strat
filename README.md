# STRATA — The Professional Skills Lab

A static, client-side professional development environment for learning, deliberate practice, practical tools, and local progress tracking.

## Run locally

```bash
npm install
npm run dev
```

## Build for GitHub Pages

For a repository named `strata-skills-lab`, build with the repository path as the base URL:

```bash
BASE_PATH=/strata-skills-lab/ npm run build
```

The production files are created in `dist/`. Publish that folder with GitHub Pages.

For a custom domain or a repository served at the domain root, use:

```bash
npm run build
```

## Notes

- No backend, database, authentication, or paid service is required.
- Learner progress, notes, bookmarks, and saved resources stay in browser localStorage.
- Course, lesson, practice, toolkit, and resource content is data-driven in `src/data.ts`.
