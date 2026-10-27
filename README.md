# Jose Damara Hadriana — Personal Website

My portfolio site: a short intro, a grid of projects I've worked on, and ways to contact me.

Built with React (Create React App) and plain CSS.

## Running locally

```bash
npm install
npm start
```

The site runs at http://localhost:3000.

## Building

```bash
npm run build
```

The production files are written to `build/`.

## Adding a project

Add an entry to the `projects` list in `src/App.js`:

- `name`, `tools`, `description`, `image` (put the image in `src/img/`, ideally WebP about 800px wide)
- `liveLink` (optional): the deployed site; the project title links here
- `githubLink` (optional): the repository; shown as a GitHub icon on the card
- `status` (optional): a small badge, e.g. `"Deploying soon"`
