import '../js/mods-data.js';

const LS_KEY = 'admin-mods-data';
function getStoredMods() {
  const raw = localStorage.getItem(LS_KEY);
  if (raw) return JSON.parse(raw);
  // If no local copy, deep clone the default MODS (so edits don't affect site until export)
  return JSON.parse(JSON.stringify(MODS));
}
function setStoredMods(mods) {
  localStorage.setItem(LS_KEY, JSON.stringify(mods));
}
let mods = getStoredMods();
const GAMES = [
  { val: 'minecraft', label: 'Minecraft' },
  { val: 'fortnite', label: 'Fortnite' },
  { val: 'roblox', label: 'Roblox' },
  { val: 'gta5', label: 'GTA 5' },
  { val: 'amongus', label: 'Among Us' },
];

function renderModList() {
  const section = document.getElementById('mod-list-section');
  section.innerHTML = '';
  for (const game of GAMES) {
    section.innerHTML += `<div class='mod-list-group'><h3>${game.label}</h3><div id='group-${game.val}'></div></div>`;
    const container = section.querySelector(`#group-${game.val}`);
    mods[game.val].forEach((mod, idx) => {
      container.innerHTML += `
      <div class="mod-row" id="mod-row-${game.val}-${mod.id}">
        <img src="../${mod.img}" alt="${mod.name}">
        <b>${mod.name}</b>
        <span style="font-size:0.95em;margin-left:7px;">(${mod.id})</span>
        <span style="margin-left:6px;opacity:0.8">${mod.downloads} DL • ★${mod.rating}</span>
        <div class="actions" style="margin-left:auto;">
          <button onclick="window.editMod('${game.val}','${mod.id}')" class="secondary">Edit</button>
          <button onclick="window.deleteMod('${game.val}','${mod.id}')" class="danger">Delete</button>
        </div>
      </div>
      <form class="edit-form" id="edit-form-${game.val}-${mod.id}" style="display:none;background:#322958;">
        <label>Name <input type="text" value="${mod.name}" id="edit-name-${game.val}-${mod.id}"></label>
        <label>Description <input type="text" value="${mod.desc}" id="edit-desc-${game.val}-${mod.id}"></label>
        <label>Image Path/URL <input type="text" value="${mod.img}" id="edit-img-${game.val}-${mod.id}"></label>
        <label>Downloads <input type="text" value="${mod.downloads}" id="edit-downloads-${game.val}-${mod.id}"></label>
        <label>Rating <input type="text" value="${mod.rating}" id="edit-rating-${game.val}-${mod.id}"></label>
        <button type="button" onclick="window.saveModEdit('${game.val}','${mod.id}')">Save</button>
        <button type="button" onclick="window.cancelEdit('${game.val}','${mod.id}')">Cancel</button>
      </form>`;
    });
  }
}

window.editMod = function(game, id) {
  document.getElementById(`edit-form-${game}-${id}`).style.display = '';
};
window.cancelEdit = function(game, id) {
  document.getElementById(`edit-form-${game}-${id}`).style.display = 'none';
};
window.saveModEdit = function(game, id) {
  const i = mods[game].findIndex(m => m.id === id);
  mods[game][i].name = document.getElementById(`edit-name-${game}-${id}`).value;
  mods[game][i].desc = document.getElementById(`edit-desc-${game}-${id}`).value;
  mods[game][i].img = document.getElementById(`edit-img-${game}-${id}`).value;
  mods[game][i].downloads = document.getElementById(`edit-downloads-${game}-${id}`).value;
  mods[game][i].rating = document.getElementById(`edit-rating-${game}-${id}`).value;
  setStoredMods(mods);
  renderModList();
};
window.deleteMod = function(game, id) {
  mods[game] = mods[game].filter(m => m.id !== id);
  setStoredMods(mods);
  renderModList();
};

document.getElementById('add-mod-form').addEventListener('submit', function(e){
  e.preventDefault();
  const game = document.getElementById('add-game').value;
  const id = document.getElementById('add-id').value.trim();
  if (!id || mods[game].some(m => m.id === id)) { alert('ID must be unique for the game.'); return; }
  const name = document.getElementById('add-name').value.trim();
  const desc = document.getElementById('add-desc').value.trim();
  const img = document.getElementById('add-img').value.trim();
  const downloads = document.getElementById('add-downloads').value.trim();
  const rating = document.getElementById('add-rating').value.trim();
  mods[game].push({ id, name, desc, img, downloads, rating });
  setStoredMods(mods);
  renderModList();
  this.reset();
});

// Initial render
renderModList();
