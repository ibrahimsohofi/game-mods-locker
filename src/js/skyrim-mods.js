import './mods-data.js';

function createModCard(mod) {
  return `<div class="mod-card" onclick="window.location.href='mod-details.html?game=skyrim&mod=${mod.id}'">
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
  grid.innerHTML = MODS.skyrim.map(createModCard).join('');
});
