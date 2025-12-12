<!--
Source: Based on Obsidian community troubleshooting
Last synced: 2025-01-27
Update frequency: Update as common issues are identified
Applicability: Both
-->

# Troubleshooting

## Plugins

- Plugin doesn't load after build: ensure `main.js` and `manifest.json` are at the top level of the plugin folder under `<Vault>/.obsidian/plugins/<plugin-id>/`. 
- Build issues: if `main.js` is missing, run `npm run build` or `npm run dev` to compile your TypeScript source code.
- Commands not appearing: verify `addCommand` runs after `onload` and IDs are unique.
- Settings not persisting: ensure `loadData`/`saveData` are awaited and you re-render the UI after changes.
- Mobile-only issues: confirm you're not using desktop-only APIs; check `isDesktopOnly` and adjust.

## Themes

- Theme doesn't appear: ensure `manifest.json` and `theme.css` are at the top level of the theme folder under `<Vault>/.obsidian/themes/<theme-name>/`.
- Theme not applying: check that `manifest.json` has correct `name` field matching the folder name.
- CSS not loading: verify `theme.css` exists and is properly formatted.
- SCSS compilation issues: if using SCSS, ensure build process runs and outputs `theme.css`.
- Mobile display issues: test CSS on mobile devices and check for viewport-specific styles.

