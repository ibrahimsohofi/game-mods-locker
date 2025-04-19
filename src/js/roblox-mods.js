import './mods-data.js';

const MODS = {
  roblox: [
    { id: 'infinite-jump', name: 'Infinite Jump', img: 'images/roblox/mod1.jpg', desc: 'Jump as much as you want in any game!', downloads: '10.2k', rating: '4.8' },
    { id: 'btools', name: 'Building Tools', img: 'images/roblox/mod2.jpg', desc: 'Place and remove parts for custom maps.', downloads: '7.8k', rating: '4.7' },
    { id: 'admin-commands', name: 'Admin Commands', img: 'images/roblox/mod3.jpg', desc: 'Unlock dozens of admin commands in-game.', downloads: '9.9k', rating: '4.9' }
  ]
};

function createModCard(mod) {
  return `<div class="mod-card" onclick="window.location.href='mod-details.html?game=roblox&mod=${mod.id}'">
    <img src="${mod.img}" alt="${mod.name}" style="border-radius:10px;max-width:192px;margin-bottom:12px;box-shadow:0 2px 12px #0002;">
    <h3 style="margin-bottom:0.4em;">${mod.name}</h3>
    <p style="min-height:48px;margin-bottom:0.7em;">${mod.desc}</p>
    <div class="mod-meta">
      <span><i class="fas fa-download"></i> ${mod.downloads}</span>
      <span><i class="fas fa-star"></i> ${mod.rating}</span>
    </div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('mods-grid');
  grid.innerHTML = MODS.roblox.map(createModCard).join('');
});
