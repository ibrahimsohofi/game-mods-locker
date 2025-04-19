# Game Mods Locker

A modern, modular web application to showcase and manage mods for popular games (Minecraft, Fortnite, Roblox, GTA 5, Among Us).

## Features
- Dynamic, modular pages for each game and mod
- Beautiful, consistent card designs and modal lockers
- Enhanced modal locker: email capture, survey, unlock logic
- Easily extensible: one file for all mod/game data
- Admin/editor panel for in-browser mod management (local demo)
- Automated Netlify/GitHub deployment support

---

## Structure
- `src/js/mods-data.js` - Single source of truth for all mods per game
- `src/*.html` - Game pages (dynamic mod listings)
- `src/mod-details.html` - Universal details page for all mods
- `src/js/game-mods.js` - Game-specific dynamic loaders (all now reference `mods-data.js`)
- `src/admin/index.html` - Admin/editor pane for rapid, browser-based CRUD (uses localStorage)

---

## How to Add New Mods/Games

### Fastest (Manual)
Edit `src/js/mods-data.js` and add entries to the corresponding game or a new game array:

```js
minecraft: [
  { id: 'new-id', name: 'My Awesome Mod', img: 'images/mymod.jpg', desc: '...', downloads: '1.1k', rating: '5.0' }
],
```
- The `img` field can be relative (`images/xxx.jpg`) or an external URL.
- Save and reload. The new mod appears automatically.

### Using the Admin Editor
1. Go to `/admin/index.html` in your browser.
2. Use the form to add/edit mods for any game.
3. Your changes will be saved in your browser (localStorage; separate from source until copied back to `mods-data.js`).

---

## Developer / Contributor Guide
- `bun install` to install dependencies
- Run the dev server:
  - `bun run dev` (local on http://localhost:3000)
- Make changes in `src/js/mods-data.js` for mods or in `src/admin/` for demo admin/editor
- Push commits to GitHub!

---

## Deployment & Continuous Delivery
1. **Connect your GitHub repo** to Netlify (via Netlify dashboard UI, or site settings)
2. **Build command**: `bun run build`
3. **Publish directory**: `dist`
4. Every push to GitHub will automatically update your live Netlify site

Extra:
- You can connect a custom domain in Netlify > Site Settings
- If using environment variables or secrets, see Netlify docs for setup

---

## Contributions & Support
- Want to add a new game, feature, or unlocker mechanism?
- Found a bug or want new styling?

Open a GitHub issue or PR! All feedback and help appreciated.
