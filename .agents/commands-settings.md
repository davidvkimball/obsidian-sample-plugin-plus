<!--
Source: Based on Obsidian Sample Plugin and community plugin guidelines
Last synced: 2025-01-27
Update frequency: Check Obsidian Sample Plugin repo for updates
Applicability: Plugin
-->

# Commands & settings

**Note**: This file is specific to plugin development. Themes do not have commands or settings.

- Any user-facing commands should be added via `this.addCommand(...)`.
- If the plugin has configuration, provide a settings tab and sensible defaults.
- Persist settings using `this.loadData()` / `this.saveData()`.
- Use stable command IDs; avoid renaming once released.

