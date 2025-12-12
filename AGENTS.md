# AI Agent Instructions

This file serves as the entry point for AI agents working on Obsidian plugin or theme development projects. The detailed instructions have been organized into a structured directory for better maintainability.

**Applicability**: Each file in `.agents` is marked with its applicability:
- **Plugin** - Only relevant for plugin development
- **Theme** - Only relevant for theme development  
- **Both** - Relevant for both plugins and themes

## Quick Start

**All agent instructions are located in the [`.agents`](.agents/) directory.**

## Help: Interactive Guidance

**When the user asks for "help"**, present these three options and guide them based on their choice:

---

### Option 1: Check for Updates to Reference Documentation

**Present this option when**: User wants to sync latest best practices from official Obsidian repositories.

**Instructions for AI agent**:
1. Ask: "Would you like to check for updates to the reference documentation (Sample Plugin, API, Developer Docs, etc.)?"
2. If yes, guide them through:
   - Pulling latest changes: See [quick-sync-guide.md](.agents/quick-sync-guide.md)
   - Reviewing what changed: Check git logs in `.ref/` repos
   - Updating `.agents/` files if needed: See [sync-procedure.md](.agents/sync-procedure.md)

**Key files**: [quick-sync-guide.md](.agents/quick-sync-guide.md), [sync-procedure.md](.agents/sync-procedure.md)

---

### Option 2: Add a Project to Your References

**Present this option when**: User wants to reference another project (concurrent development or external reference).

**Instructions for AI agent**:
1. Ask: "Would you like to add a project to your references?"
2. Then ask: "Is this a project you're actively developing alongside this one, or an external project you want to reference?"
   - **Actively developing** → Use symlink (Option B in [ref-instructions.md](.agents/ref-instructions.md))
   - **External reference** → Use git clone (Option A in [ref-instructions.md](.agents/ref-instructions.md))
3. Ask for the project path or repository URL
4. Provide the exact command based on their choice (see [ref-instructions.md](.agents/ref-instructions.md#adding-project-specific-references))

**Key file**: [ref-instructions.md](.agents/ref-instructions.md)

---

### Option 3: Start a New Plugin or Theme Project

**Present this option when**: User wants to create a new Obsidian plugin or theme.

**Instructions for AI agent** - Follow this funnel:

1. **Initial question**: "What kind of project are you wanting to make?"
   - If **Plugin** → Go to Plugin Funnel
   - If **Theme** → Go to Theme Funnel

2. **Plugin Funnel** - Ask these questions in order:
   - "What functionality do you want your plugin to provide?" (core purpose)
   - "Will it need user settings or configuration?" → If yes, point to [commands-settings.md](.agents/commands-settings.md)
   - "What will it interact with?" (vault files, editor, UI components, workspace)
   - "Do you need any external API integrations?" → If yes, review [security-privacy.md](.agents/security-privacy.md) for guidelines
   - "Will it work on mobile, or desktop-only?" → Point to [mobile.md](.agents/mobile.md) and `isDesktopOnly` in [manifest.md](.agents/manifest.md)

3. **Theme Funnel** - Ask these questions in order:
   - "What visual style are you aiming for?" (color scheme, typography, layout)
   - "Will it support both light and dark modes?" → Point to CSS variable usage
   - "Are there specific UI elements you want to customize?" (editor, sidebar, status bar, etc.)
   - "Do you want to include theme snippets?" → Point to file structure in [file-conventions.md](.agents/file-conventions.md)

4. **After gathering answers**, guide them to:
   - [project-overview.md](.agents/project-overview.md) - Project structure
   - [environment.md](.agents/environment.md) - Setup and tooling
   - [file-conventions.md](.agents/file-conventions.md) - File organization
   - [common-tasks.md](.agents/common-tasks.md) - Code examples
   - [references.md](.agents/references.md) - Official documentation links

**Key files**: [project-overview.md](.agents/project-overview.md), [common-tasks.md](.agents/common-tasks.md), [references.md](.agents/references.md)

## Navigation

### Core Development
- **[project-overview.md](.agents/project-overview.md)** - Project structure, entry points, and artifacts (Plugin/Theme)
- **[environment.md](.agents/environment.md)** - Development environment and tooling (Plugin/Theme)
- **[file-conventions.md](.agents/file-conventions.md)** - File organization and folder structure (Plugin/Theme)
- **[coding-conventions.md](.agents/coding-conventions.md)** - Code standards and organization (Plugin)

### Configuration
- **[manifest.md](.agents/manifest.md)** - `manifest.json` rules and requirements (Plugin/Theme)
- **[commands-settings.md](.agents/commands-settings.md)** - Commands and settings patterns (Plugin)
- **[versioning-releases.md](.agents/versioning-releases.md)** - Versioning and GitHub release workflow (Both)

### Best Practices
- **[security-privacy.md](.agents/security-privacy.md)** - Security, privacy, and compliance guidelines (Both)
- **[ux-copy.md](.agents/ux-copy.md)** - UX guidelines and UI text conventions (Both)
- **[performance.md](.agents/performance.md)** - Performance optimization best practices (Both)
- **[mobile.md](.agents/mobile.md)** - Mobile compatibility considerations (Both)

### Development Workflow
- **[testing.md](.agents/testing.md)** - Testing and manual installation procedures (Plugin/Theme)
- **[common-tasks.md](.agents/common-tasks.md)** - Code examples and common patterns (Plugin/Theme)
- **[troubleshooting.md](.agents/troubleshooting.md)** - Common issues and solutions (Both)
- **[agent-dos-donts.md](.agents/agent-dos-donts.md)** - Specific do's and don'ts for AI agents (Both)

### Reference Materials
- **[references.md](.agents/references.md)** - External links and resources
- **[ref-instructions.md](.agents/ref-instructions.md)** - Instructions for using the `.ref` folder
- **[sync-procedure.md](.agents/sync-procedure.md)** - Procedure for syncing content from Sample Plugin and API
- **[quick-sync-guide.md](.agents/quick-sync-guide.md)** - Quick reference for pulling updates from reference repos

## Important: .ref Folder

When asked to reference something in the `.ref` folder, **actively search for it**. The `.ref` folder is gitignored and may be hidden by default, but it exists in the project root. See [ref-instructions.md](.agents/ref-instructions.md) for details.

## Source Attribution

Each file in `.agents` includes a header comment with:
- Source(s) of the information
- Last sync date
- Update frequency guidance

This helps track where content comes from and when it should be updated.

## Updating Content

Content in this directory is based on:
- Obsidian Sample Plugin repository
- Obsidian Sample Theme repository
- Obsidian official documentation
- Community best practices

Check the source attribution in each file header for update frequency guidance. When the Obsidian Sample Plugin, Sample Theme, or API documentation is updated, relevant files here should be reviewed and updated accordingly.

**See [sync-procedure.md](.agents/sync-procedure.md) for the standard procedure to sync content from the latest Sample Plugin, Sample Theme, and API updates.**

## General Purpose / Reusable

This `.agents` directory structure and content is designed to be **general-purpose and reusable** across Obsidian plugin and theme projects. The content is based on official Obsidian repositories and documentation, not project-specific code. You can:

- Copy this structure to other Obsidian projects
- Use it as a template for new projects
- Share it with other developers
- Adapt it for your specific needs

The only project-specific content is in `ref-instructions.md` (which references your local setup) and any custom additions you make. Everything else syncs from official Obsidian sources.

