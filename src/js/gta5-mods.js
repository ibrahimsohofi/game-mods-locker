import './mods-data.js';

const MODS = {
  gta5: [
    { id: 'menyoo', name: 'Menyoo PC', img: 'images/mod1.jpg', desc: 'Legendary in-game GTA 5 mod menu.', downloads: '16.1k', rating: '4.9' },
    { id: 'ls-life', name: 'LS Life', img: 'images/mod2.jpg', desc: 'Drug dealing and roleplay expansion.', downloads: '12.7k', rating: '4.6' },
    { id: 'graphics-enhancer', name: 'Realism Graphics Enhancer', img: 'images/mod3.jpg', desc: 'Make GTA 5 look hyper-realistic!', downloads: '18.2k', rating: '4.8' }
  ]
};

function createModCard(mod) {
  return `<div class="mod-card" onclick="window.location.href='mod-details.html?game=gta5&mod=${mod.id}'">
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
  grid.innerHTML = MODS.gta5.map(createModCard).join('');
});
