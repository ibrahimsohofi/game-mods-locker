// Extended multi-game and multi-mod data
const MODS = {
  minecraft: [
    { id: 'shader-pack-pro', name: 'Shader Pack Pro', img: 'images/mod1.jpg', desc: 'Ultra-realistic lighting effects, water reflections, and shadow enhancements.', downloads: '5.2k', rating: '4.9' },
    { id: 'building-expansion', name: 'Building Expansion', img: 'images/mod2.jpg', desc: '500+ new building blocks and architectural elements for creative builders.', downloads: '4.7k', rating: '4.8' },
    { id: 'adventure-plus', name: 'Adventure Plus', img: 'images/mod3.jpg', desc: 'New dungeons, bosses, weapons, and quests for an enhanced adventure experience.', downloads: '6.1k', rating: '4.7' },
    { id: 'survival-enhancement', name: 'Survival Enhancement', img: 'images/mod4.jpg', desc: 'New survival mechanics, crafting recipes, and challenges for hardcore players.', downloads: '3.9k', rating: '4.6' },
    { id: 'journey-map', name: 'Journey Map', img: 'images/mod1.jpg', desc: 'Minimap and world map with waypoints.', downloads: '8.2k', rating: '4.9' },
    { id: 'just-enough-items', name: 'Just Enough Items', img: 'images/mod2.jpg', desc: 'See and search for all in-game recipes.', downloads: '7.5k', rating: '4.8' },
  ],
  fortnite: [
    { id: 'skin-changer', name: 'Skin Changer Ultimate', img: 'images/fortnite-mod1.jpg', desc: 'Change your skins with 1 click!', downloads: '11.1k', rating: '4.7' },
    { id: 'aimbot-lite', name: 'Aimbot Lite', img: 'images/fortnite-mod2.jpg', desc: 'Improved target accuracy for fun.', downloads: '10.7k', rating: '4.4' },
    { id: 'emote-unlocker', name: 'Emote Unlocker', img: 'images/fortnite-mod3.jpg', desc: 'Unlock all rare emotes instantly.', downloads: '14.1k', rating: '4.6' },
    { id: 'battle-pass-helper', name: 'Battle Pass Helper', img: 'images/fortnite-mod4.jpg', desc: 'Accelerate your battle pass progression.', downloads: '8.9k', rating: '4.5' }
  ],
  roblox: [
    { id: 'infinite-jump', name: 'Infinite Jump', img: 'images/roblox/mod1.jpg', desc: 'Jump as much as you want in any game!', downloads: '10.2k', rating: '4.8' },
    { id: 'btools', name: 'Building Tools', img: 'images/roblox/mod2.jpg', desc: 'Place and remove parts for custom maps.', downloads: '7.8k', rating: '4.7' },
    { id: 'admin-commands', name: 'Admin Commands', img: 'images/roblox/mod3.jpg', desc: 'Unlock dozens of admin commands in-game.', downloads: '9.9k', rating: '4.9' }
  ],
  gta5: [
    { id: 'menyoo', name: 'Menyoo PC', img: 'images/mod1.jpg', desc: 'Legendary in-game GTA 5 mod menu.', downloads: '16.1k', rating: '4.9' },
    { id: 'ls-life', name: 'LS Life', img: 'images/mod2.jpg', desc: 'Drug dealing and roleplay expansion.', downloads: '12.7k', rating: '4.6' },
    { id: 'graphics-enhancer', name: 'Realism Graphics Enhancer', img: 'images/mod3.jpg', desc: 'Make GTA 5 look hyper-realistic!', downloads: '18.2k', rating: '4.8' }
  ],
  amongus: [
    { id: 'all-skins', name: 'All Skins Unlock', img: 'images/mod4.jpg', desc: 'Unlock every skin instantly.', downloads: '13.3k', rating: '4.7' },
    { id: 'role-mod', name: 'Role Randomizer', img: 'images/mod2.jpg', desc: 'Adds new roles for more fun.', downloads: '8.7k', rating: '4.5' }
  ]
};

function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

document.addEventListener('DOMContentLoaded', function () {
  const game = getParam('game') || 'minecraft';
  const modId = getParam('mod');
  const modList = MODS[game] || [];
  const mod = modList.find(m => m.id === modId);
  const detailsDiv = document.getElementById('mod-details');

  if (!mod || !detailsDiv) {
    detailsDiv.innerHTML = '<p>Mod not found.</p>';
    document.getElementById('download-btn').style.display = 'none';
    return;
  }
  detailsDiv.innerHTML = `
    <img src="${mod.img}" alt="${mod.name}">
    <h1 style="margin: 0.6em 0 0.2em">${mod.name}</h1>
    <p>${mod.desc}</p>
    <div class="mod-meta" style="margin:16px 0;">
      <span><i class="fas fa-download"></i> ${mod.downloads}</span>
      <span><i class="fas fa-star"></i> ${mod.rating}</span>
    </div>
  `;

  // --- Locker Modal Enhanced Logic ---
  const downloadBtn = document.getElementById('download-btn');
  const modal = document.getElementById('locker-modal');
  const closeBtn = document.getElementById('close-locker');
  const lockerContent = document.getElementById('locker-modal-content');

  // Steps
  const stepEmail = document.getElementById('locker-step-email');
  const stepSurvey = document.getElementById('locker-step-survey');
  const stepSuccess = document.getElementById('locker-step-success');
  // Email step fields
  const emailForm = document.getElementById('locker-email-form');
  const emailInput = document.getElementById('locker-email');
  const emailError = document.getElementById('locker-email-error');
  // Survey fake step
  const fakeSurveyBtn = document.getElementById('fake-survey-submit');
  // Success/download step
  const realDownloadBtn = document.getElementById('real-download-btn');

  function showLockerStep(step) {
    stepEmail.style.display = step === 'email' ? '' : 'none';
    stepSurvey.style.display = step === 'survey' ? '' : 'none';
    stepSuccess.style.display = step === 'success' ? '' : 'none';
  }
  showLockerStep('email'); // Init default

  if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
      modal.style.display = 'block';
      showLockerStep('email');
      emailInput.value = '';
      emailError.style.display = 'none';
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') modal.style.display = 'none';
  });
  window.addEventListener('click', function (event) {
    if (event.target === modal) modal.style.display = 'none';
  });

  // Email submission logic
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  if (emailForm) {
    emailForm.addEventListener('submit', function (e) {
      e.preventDefault();
      emailError.textContent = '';
      emailError.style.display = 'none';
      if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = '';
        return;
      }
      // For demo, just advance to survey
      showLockerStep('survey');
    });
  }

  // Fake survey submission logic
  if (fakeSurveyBtn) {
    fakeSurveyBtn.addEventListener('click', function () {
      showLockerStep('success');
    });
  }

  if (realDownloadBtn) {
    realDownloadBtn.addEventListener('click', function (e) {
      modal.style.display = 'none';
      // You can trigger a real download here, or redirect, or show a real download modal.
      alert('Thank you! The download would start now. (Demo: Hook to real file here)');
    });
  }
});
