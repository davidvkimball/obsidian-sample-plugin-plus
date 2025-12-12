<!--
Source: Based on Obsidian community guidelines
Last synced: 2025-01-27
Update frequency: Check Obsidian releases repo for validation requirements
Applicability: Plugin / Theme
-->

# Manifest rules (`manifest.json`)

## Plugins

- Must include (non-exhaustive):  
  - `id` (plugin ID; for local dev it should match the folder name)  
  - `name`  
  - `version` (Semantic Versioning `x.y.z`)  
  - `minAppVersion`  
  - `description`  
  - `isDesktopOnly` (boolean)  
  - Optional: `author`, `authorUrl`, `fundingUrl` (string or map)
- Never change `id` after release. Treat it as stable API.
- Keep `minAppVersion` accurate when using newer APIs.
- Canonical requirements: https://github.com/obsidianmd/obsidian-releases/blob/master/.github/workflows/validate-plugin-entry.yml

## Themes

- Must include (non-exhaustive):
  - `name` (theme name)
  - `version` (Semantic Versioning `x.y.z`)
  - `minAppVersion`
  - `author` (required for themes)
  - Optional: `authorUrl`, `fundingUrl`
- Themes do not use `id` or `isDesktopOnly` fields.
- Canonical requirements: https://github.com/obsidianmd/obsidian-releases/blob/master/.github/workflows/validate-theme-entry.yml

