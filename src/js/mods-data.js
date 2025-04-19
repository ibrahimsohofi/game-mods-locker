// Central MODS object used for all games
const MODS = {
  minecraft: [
    { id: 'shader-pack-pro', name: 'Shader Pack Pro', img: 'images/mod1.jpg', desc: 'Ultra-realistic lighting effects, water reflections, and shadow enhancements.', downloads: '5.2k', rating: '4.9' },
    { id: 'building-expansion', name: 'Building Expansion', img: 'images/mod2.jpg', desc: '500+ new building blocks and architectural elements for creative builders.', downloads: '4.7k', rating: '4.8' },
    { id: 'adventure-plus', name: 'Adventure Plus', img: 'images/mod3.jpg', desc: 'New dungeons, bosses, weapons, and quests for an enhanced adventure experience.', downloads: '6.1k', rating: '4.7' },
    { id: 'survival-enhancement', name: 'Survival Enhancement', img: 'images/mod4.jpg', desc: 'New survival mechanics, crafting recipes, and challenges for hardcore players.', downloads: '3.9k', rating: '4.6' },
    { id: 'journey-map', name: 'Journey Map', img: 'images/mod1.jpg', desc: 'Minimap and world map with waypoints.', downloads: '8.2k', rating: '4.9' },
    { id: 'just-enough-items', name: 'Just Enough Items', img: 'images/mod2.jpg', desc: 'See and search for all in-game recipes.', downloads: '7.5k', rating: '4.8' },
    { id: 'optifine', name: 'OptiFine', img: 'images/mod3.jpg', desc: 'The classic FPS booster and visuals mod.', downloads: '18.5k', rating: '5.0' },
    { id: 'biomes-o-plenty', name: 'Biomes O’ Plenty', img: 'images/mod4.jpg', desc: 'Adds 80+ new biomes and worldgen features.', downloads: '14.7k', rating: '4.8' }
  ],
  fortnite: [
    { id: 'skin-changer', name: 'Skin Changer Ultimate', img: 'images/fortnite-mod1.jpg', desc: 'Change your skins with 1 click!', downloads: '11.1k', rating: '4.7' },
    { id: 'aimbot-lite', name: 'Aimbot Lite', img: 'images/fortnite-mod2.jpg', desc: 'Improved target accuracy for fun.', downloads: '10.7k', rating: '4.4' },
    { id: 'emote-unlocker', name: 'Emote Unlocker', img: 'images/fortnite-mod3.jpg', desc: 'Unlock all rare emotes instantly.', downloads: '14.1k', rating: '4.6' },
    { id: 'battle-pass-helper', name: 'Battle Pass Helper', img: 'images/fortnite-mod4.jpg', desc: 'Accelerate your battle pass progression.', downloads: '8.9k', rating: '4.5' },
    { id: 'map-hacks', name: 'Map Hacks', img: 'images/fortnite-mod1.jpg', desc: 'See hidden loot and enemy positions (demo only).', downloads: '9.3k', rating: '4.2' },
    { id: 'freebucks-tool', name: 'Freebucks Tool', img: 'images/fortnite-mod2.jpg', desc: 'Get V-bucks rewards from daily tasks.', downloads: '8.1k', rating: '4.0' }
  ],
  roblox: [
    { id: 'infinite-jump', name: 'Infinite Jump', img: 'images/roblox/mod1.jpg', desc: 'Jump as much as you want in any game!', downloads: '10.2k', rating: '4.8' },
    { id: 'btools', name: 'Building Tools', img: 'images/roblox/mod2.jpg', desc: 'Place and remove parts for custom maps.', downloads: '7.8k', rating: '4.7' },
    { id: 'admin-commands', name: 'Admin Commands', img: 'images/roblox/mod3.jpg', desc: 'Unlock dozens of admin commands in-game.', downloads: '9.9k', rating: '4.9' },
    { id: 'fly-script', name: 'Fly Script', img: 'images/roblox/mod1.jpg', desc: 'Fly around in supported Roblox games.', downloads: '11.1k', rating: '4.6' },
    { id: 'speed-hack', name: 'Speed Hack', img: 'images/roblox/mod2.jpg', desc: 'Boost your walk/run speed.', downloads: '12.7k', rating: '4.6' }
  ],
  gta5: [
    { id: 'menyoo', name: 'Menyoo PC', img: 'images/mod1.jpg', desc: 'Legendary in-game GTA 5 mod menu.', downloads: '16.1k', rating: '4.9' },
    { id: 'ls-life', name: 'LS Life', img: 'images/mod2.jpg', desc: 'Drug dealing and roleplay expansion.', downloads: '12.7k', rating: '4.6' },
    { id: 'graphics-enhancer', name: 'Realism Graphics Enhancer', img: 'images/mod3.jpg', desc: 'Make GTA 5 look hyper-realistic!', downloads: '18.2k', rating: '4.8' },
    { id: 'police-plus', name: 'Police Plus', img: 'images/mod4.jpg', desc: 'Become the ultimate cop in Los Santos.', downloads: '10.9k', rating: '4.7' }
  ],
  amongus: [
    { id: 'all-skins', name: 'All Skins Unlock', img: 'images/mod4.jpg', desc: 'Unlock every skin instantly.', downloads: '13.3k', rating: '4.7' },
    { id: 'role-mod', name: 'Role Randomizer', img: 'images/mod2.jpg', desc: 'Adds new roles for more fun.', downloads: '8.7k', rating: '4.5' },
    { id: 'always-impostor', name: 'Always Impostor', img: 'images/mod3.jpg', desc: 'Be Impostor every game (local lobby).', downloads: '7.3k', rating: '4.2' }
  ],
  // New Games Below
  warzone: [
    { id: 'no-recoil', name: 'No Recoil Script', img: 'images/mod1.jpg', desc: 'Eliminate weapon recoil for laser accuracy.', downloads: '22.1k', rating: '4.8' },
    { id: 'texture-enhancer', name: 'HD Texture Pack', img: 'images/mod2.jpg', desc: 'Ultra high-definition textures for all environments.', downloads: '17.5k', rating: '4.6' },
    { id: 'radar-hack', name: 'Advanced Radar', img: 'images/mod3.jpg', desc: 'Enhanced radar systems showing all nearby players.', downloads: '19.8k', rating: '4.2' },
    { id: 'unlock-all', name: 'Weapon Unlock All', img: 'images/mod4.jpg', desc: 'Instantly unlock all weapon skins and attachments.', downloads: '28.3k', rating: '4.9' },
    { id: 'auto-ping', name: 'Auto Ping Tool', img: 'images/mod1.jpg', desc: 'Automatically ping enemies and loot.', downloads: '14.2k', rating: '4.5' }
  ],
  lol: [
    { id: 'skin-unlocker', name: 'Skin Unlocker Pro', img: 'images/mod2.jpg', desc: 'Use any skin in the game without purchasing.', downloads: '31.6k', rating: '4.7' },
    { id: 'map-hack', name: 'Map Awareness Pro', img: 'images/mod3.jpg', desc: 'Enhanced map visibility and prediction tools.', downloads: '25.9k', rating: '4.5' },
    { id: 'auto-smite', name: 'Auto Smite Jungler', img: 'images/mod4.jpg', desc: 'Perfect timing for Smite on objectives.', downloads: '18.8k', rating: '4.8' },
    { id: 'script-bundle', name: 'Champion Script Bundle', img: 'images/mod1.jpg', desc: 'Auto-combo scripts for 50+ champions.', downloads: '22.3k', rating: '4.6' },
    { id: 'zoom-hack', name: 'Camera Zoom Enhancer', img: 'images/mod2.jpg', desc: 'Adjust camera zoom beyond game limits.', downloads: '16.7k', rating: '4.3' }
  ],
  valorant: [
    { id: 'aimbot-lite', name: 'Aim Assistance', img: 'images/mod3.jpg', desc: 'Subtle aim improvement for competitive play.', downloads: '27.8k', rating: '4.5' },
    { id: 'skin-changer', name: 'Premium Skin Access', img: 'images/mod4.jpg', desc: 'Use any weapon skin locally.', downloads: '34.2k', rating: '4.9' },
    { id: 'wallhack', name: 'Enhanced Vision', img: 'images/mod1.jpg', desc: 'See enemy positions through certain obstacles.', downloads: '21.5k', rating: '4.3' },
    { id: 'trigger-bot', name: 'Auto-Trigger System', img: 'images/mod2.jpg', desc: 'Automatically shoots when crosshair is over enemies.', downloads: '19.2k', rating: '4.4' }
  ],
  sims4: [
    { id: 'mc-command', name: 'MC Command Center', img: 'images/mod3.jpg', desc: 'The ultimate story progression and game control mod.', downloads: '45.7k', rating: '5.0' },
    { id: 'wicked-whims', name: 'Realistic Relationships', img: 'images/mod4.jpg', desc: 'Adult content and relationship enhancements for mature players.', downloads: '38.2k', rating: '4.8' },
    { id: 'more-traits', name: 'Personality+ Pack', img: 'images/mod1.jpg', desc: 'Adds 50+ new personality traits for Sims.', downloads: '29.1k', rating: '4.7' },
    { id: 'custom-careers', name: 'Career Expansion Bundle', img: 'images/mod2.jpg', desc: 'Adds 15 new custom careers with progression.', downloads: '25.8k', rating: '4.6' },
    { id: 'realistic-birth', name: 'Realistic Pregnancy', img: 'images/mod3.jpg', desc: 'Overhauls the pregnancy and birth system.', downloads: '19.3k', rating: '4.5' },
    { id: 'basemental', name: 'Urban Lifestyle', img: 'images/mod4.jpg', desc: 'Adds recreational substances and activities for adult Sims.', downloads: '31.5k', rating: '4.7' }
  ],
  skyrim: [
    { id: 'skse', name: 'Skyrim Script Extender', img: 'images/mod1.jpg', desc: 'Essential framework for advanced Skyrim mods.', downloads: '56.3k', rating: '5.0' },
    { id: 'skyui', name: 'SkyUI Interface', img: 'images/mod2.jpg', desc: 'Complete UI overhaul for better inventory management.', downloads: '49.7k', rating: '4.9' },
    { id: 'immersive-armor', name: 'Immersive Armors', img: 'images/mod3.jpg', desc: 'Adds 100+ new lore-friendly armor sets.', downloads: '42.1k', rating: '4.8' },
    { id: 'realistic-lighting', name: 'Enhanced Lighting FX', img: 'images/mod4.jpg', desc: 'Complete lighting overhaul for realistic environments.', downloads: '38.5k', rating: '4.7' },
    { id: 'alternate-start', name: 'Alternate Start', img: 'images/mod1.jpg', desc: 'Choose different beginnings for your character.', downloads: '36.9k', rating: '4.8' },
    { id: 'unofficial-patch', name: 'Unofficial Skyrim Patch', img: 'images/mod2.jpg', desc: 'Fixes thousands of bugs not addressed by official patches.', downloads: '58.2k', rating: '5.0' }
  ]
};
