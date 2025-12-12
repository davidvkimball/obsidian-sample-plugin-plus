<!--
Source: Project-specific instructions
Last synced: 2025-01-27
Update frequency: Update as reference management strategy evolves
Applicability: Both
-->

# .ref Folder Instructions

## Purpose

The `.ref` folder is a gitignored directory used to store reference materials, documentation, and cloned repositories that are useful for development but should not be committed to version control.

## For AI Agents

**IMPORTANT**: When the user asks you to reference something in `.ref`, actively search for it. The `.ref` folder may be hidden by default in some file explorers, but it exists in the project root. Use tools like `list_dir`, `glob_file_search`, or `read_file` to access `.ref` contents.

If you cannot find `.ref` initially, try:
- Listing the root directory with hidden files enabled
- Using `glob_file_search` with pattern `.ref/**`
- Directly reading files with paths like `.ref/obsidian-api/README.md`

## Symlink Strategy for Windows

To efficiently manage shared reference repositories (like `obsidian-api`) across multiple Obsidian plugin projects, use Windows directory junctions (symlinks).

### Setup Steps

1. **Clone the reference repositories once to a central location**:
   ```powershell
   # Clone all reference repos to a central refs directory
   cd C:\Users\david\Development\.ref
   git clone https://github.com/obsidianmd/obsidian-api.git obsidian-api
   git clone https://github.com/obsidianmd/obsidian-sample-plugin.git obsidian-sample-plugin
   git clone https://github.com/obsidianmd/obsidian-developer-docs.git obsidian-developer-docs
   git clone https://github.com/obsidianmd/obsidian-plugin-docs.git obsidian-plugin-docs
   git clone https://github.com/obsidianmd/obsidian-sample-theme.git obsidian-sample-theme
   ```
   
   **Note**: If you've already cloned these repos, you can skip this step.

2. **Create directory junctions in each plugin project**:
   ```powershell
   # Navigate to your plugin project root
   cd C:\Users\david\Development\obsidian-ui-tweaker
   
   # Create the .ref directory if it doesn't exist
   New-Item -ItemType Directory -Force -Path .ref
   
   # Create directory junctions pointing to the central clones
   mklink /J .ref\obsidian-api C:\Users\david\Development\.ref\obsidian-api
   mklink /J .ref\obsidian-sample-plugin C:\Users\david\Development\.ref\obsidian-sample-plugin
   mklink /J .ref\obsidian-developer-docs C:\Users\david\Development\.ref\obsidian-developer-docs
   mklink /J .ref\obsidian-plugin-docs C:\Users\david\Development\.ref\obsidian-plugin-docs
   mklink /J .ref\obsidian-sample-theme C:\Users\david\Development\.ref\obsidian-sample-theme
   ```

3. **Update all references at once**:
   ```powershell
   # Navigate to the central location and pull updates
   cd C:\Users\david\Development\.ref\obsidian-api
   git pull
   
   cd ..\obsidian-sample-plugin
   git pull
   
   cd ..\obsidian-developer-docs
   git pull
   
   cd ..\obsidian-plugin-docs
   git pull
   
   cd ..\obsidian-sample-theme
   git pull
   ```
   
   All plugin projects using the junctions will immediately see the updated content.

### Benefits

- **Single source of truth**: One clone that all projects reference
- **Easy updates**: One `git pull` updates all projects
- **Disk space efficient**: No duplicate clones
- **Works with Git**: Junctions are transparent to Git operations

### Alternative: Multiple Clones

If you prefer to have separate clones in each project (simpler but less efficient):

```powershell
cd .ref
git clone https://github.com/obsidianmd/obsidian-api.git obsidian-api
git clone https://github.com/obsidianmd/obsidian-sample-plugin.git obsidian-sample-plugin
git clone https://github.com/obsidianmd/obsidian-developer-docs.git obsidian-developer-docs
git clone https://github.com/obsidianmd/obsidian-plugin-docs.git obsidian-plugin-docs
git clone https://github.com/obsidianmd/obsidian-sample-theme.git obsidian-sample-theme
```

Then update each clone separately when needed.

### Common Reference Repositories

- `obsidian-api`: Official Obsidian API documentation and type definitions
- `obsidian-sample-plugin`: Template plugin with best practices (contains `AGENTS.md` to sync from)
- `obsidian-developer-docs`: Source vault for docs.obsidian.md (official documentation)
- `obsidian-plugin-docs`: Plugin-specific documentation and guides
- `obsidian-sample-theme`: Theme template (useful for organizational patterns, less critical for plugins)
- Other community plugins: For reference and learning

**Note**: See [sync-procedure.md](sync-procedure.md) for the standard procedure to keep `.agents` content synchronized with updates from these repositories.

## Adding Project-Specific References

Sometimes you want to reference another project on your PC that's specific to this plugin/theme project (not shared across all projects). Choose the method based on your use case:

### Option A: External Project or Repository

**Use when**: Referencing an external project or repository where you want to check for updates periodically, or you're not actively developing it alongside this project.

```powershell
# From your project root
cd .ref

# Clone the repository directly into .ref
git clone https://github.com/username/repo-name.git repo-name

# Or if it's a local Git repo
git clone C:\path\to\local\project.git repo-name
```

**Benefits**: 
- Can check for updates with `git pull`
- Full Git history available
- Easy to keep in sync when needed

**To check for updates later**:
```powershell
cd .ref\repo-name
git pull
```

### Option B: Concurrent Development (Live Updates)

**Use when**: You're actively developing another project alongside this one and want to see changes in real-time.

```powershell
# From your project root
# Create a directory junction pointing to the local project
cmd /c mklink /J .ref\project-name C:\path\to\local\project
```

**Benefits**:
- No duplication - references existing project
- Changes in original project are immediately visible
- Perfect for projects you're actively developing alongside this one

**Example**:
```powershell
# Reference another Obsidian plugin you're working on concurrently
cmd /c mklink /J .ref\my-other-plugin C:\Users\david\Development\my-other-plugin
```

**Note**: With symlinks, any changes you make to the original project are immediately visible in `.ref/project-name/` - no need to pull or sync.

### Option C: Static Snapshot (Rarely Needed)

If the project isn't a Git repo and you just need a one-time snapshot:

```powershell
# Copy the entire project folder
Copy-Item -Path C:\path\to\local\project -Destination .ref\project-name -Recurse
```

**Note**: This creates a static copy - changes to the original won't be reflected. Usually Option A or B is better.

### Quick Decision Guide

- **Project you're actively developing alongside this one** → Use **Option B (Symlink)** - See live changes as you work
- **External project or repository you want to reference** → Use **Option A (Git Clone)** - Can check for updates with `git pull`

### Quick Workflow

1. **Decide which option** based on your use case (see above)
2. **Add to `.ref`** using the appropriate method
3. **Reference in your work** - AI agents can now access it via `.ref/project-name/`
4. **Update as needed**:
   - **Option A (Git)**: `cd .ref/project-name && git pull` when you want to check for updates
   - **Option B (Symlink)**: Changes automatically visible - no action needed
   - **Option C (Copy)**: Re-copy if you need a fresh snapshot

### Notes

- Directory junctions (`mklink /J`) work on Windows and are preferred over symbolic links (`mklink /D`) for directories
- Junctions require administrator privileges or Developer Mode enabled in Windows 10/11
- The `.ref` folder should be added to `.gitignore` (see project `.gitignore`)

