<!--
Source: Based on Obsidian Sample Plugin and Sample Theme
Last synced: 2025-01-27
Update frequency: Check Obsidian Sample Plugin and Sample Theme repos for updates
Applicability: Plugin / Theme
-->

# Environment & tooling

## Plugins

- Node.js: use current LTS (Node 18+ recommended).
- **Package manager: npm** (required for this sample - `package.json` defines npm scripts and dependencies).
- **Bundler: esbuild** (required for this sample - `esbuild.config.mjs` and build scripts depend on it). Alternative bundlers like Rollup or webpack are acceptable for other projects if they bundle all external dependencies into `main.js`.
- Types: `obsidian` type definitions.

**Note**: This sample project has specific technical dependencies on npm and esbuild. If you're creating a plugin from scratch, you can choose different tools, but you'll need to replace the build configuration accordingly.

### Install

```bash
npm install
```

### Dev (watch)

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Linting

- To use eslint install eslint from terminal: `npm install -g eslint`
- To use eslint to analyze this project use this command: `eslint main.ts`
- eslint will then create a report with suggestions for code improvement by file and line number.
- If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder: `eslint ./src/`

## Themes

- **Optional**: Node.js and npm if using SCSS/Sass preprocessors or build tools.
- **Simple themes**: Can be developed with just CSS and `manifest.json` (no build tools required).
- **SCSS themes**: Use Sass/SCSS compiler (e.g., `sass`, `node-sass`, or build tools like Vite).
- No TypeScript or bundler required for basic themes.

### Simple Theme Setup

No build tools needed - just edit `theme.css` directly.

### SCSS Theme Setup

```bash
npm install -D sass
npm run build  # Compile SCSS to CSS
```

### Linting (Optional)

- Use `stylelint` for CSS/SCSS linting: `npm install -D stylelint`
- Configure stylelint for Obsidian theme conventions

