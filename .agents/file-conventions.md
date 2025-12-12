<!--
Source: Based on Obsidian Sample Plugin and Sample Theme
Last synced: 2025-01-27
Update frequency: Check Obsidian Sample Plugin and Sample Theme repos for updates
Applicability: Plugin / Theme
-->

# File & folder conventions

## Plugins

- **Organize code into multiple files**: Split functionality across separate modules rather than putting everything in `main.ts`.
- Source lives in `src/`. Keep `main.ts` small and focused on plugin lifecycle (loading, unloading, registering commands).
- **Example file structure**:
  ```
  src/
    main.ts           # Plugin entry point, lifecycle management
    settings.ts       # Settings interface and defaults
    commands/         # Command implementations
      command1.ts
      command2.ts
    ui/              # UI components, modals, views
      modal.ts
      view.ts
    utils/           # Utility functions, helpers
      helpers.ts
      constants.ts
    types.ts         # TypeScript interfaces and types
  ```
- **Do not commit build artifacts**: Never commit `node_modules/`, `main.js`, or other generated files to version control.
- Keep the plugin small. Avoid large dependencies. Prefer browser-compatible packages.
- Generated output should be placed at the plugin root or `dist/` depending on your build setup. Release artifacts must end up at the top level of the plugin folder in the vault (`main.js`, `manifest.json`, `styles.css`).

## Themes

- **Organize CSS/SCSS into logical files**: Split styles into separate files for maintainability.
- **Example file structure**:
  ```
  src/               # Source SCSS files (if using preprocessor)
    main.scss
    variables.scss
    components/
  theme.css          # Compiled CSS (or source if not using preprocessor)
  manifest.json
  snippets/         # Optional: Theme snippets
    snippet-name.css
  ```
- **Do not commit build artifacts**: Never commit `node_modules/`, compiled CSS if using SCSS, or other generated files.
- Keep themes lightweight. Avoid complex build processes unless necessary.
- Release artifacts: `manifest.json` and `theme.css` must be at the top level of the theme folder in the vault.

