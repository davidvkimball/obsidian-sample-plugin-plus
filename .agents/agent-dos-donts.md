<!--
Source: Based on Obsidian community best practices
Last synced: 2025-01-27
Update frequency: Review periodically for AI agent-specific guidance
Applicability: Both
-->

# Agent do/don't

**Do**
- **Plugins**: Add commands with stable IDs (don't rename once released).
- **Plugins**: Provide defaults and validation in settings.
- **Plugins**: Write idempotent code paths so reload/unload doesn't leak listeners or intervals.
- **Plugins**: Use `this.register*` helpers for everything that needs cleanup.
- **Themes**: Use consistent CSS variable naming conventions.
- **Themes**: Test themes in both light and dark modes.

**Don't**
- Introduce network calls without an obvious user-facing reason and documentation.
- Ship features that require cloud services without clear disclosure and explicit opt-in.
- Store or transmit vault contents unless essential and consented.
- **Themes**: Don't override core Obsidian functionality with CSS hacks that break features.

