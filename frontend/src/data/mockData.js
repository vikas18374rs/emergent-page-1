export const rewards = [
  {
    id: 'legendary-drop-pactspirit',
    title: 'Legendary Drop Pactspirit Selection Chest',
    shortDesc: 'Free reward',
    category: 'Reward',
    rarity: 'Legendary',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800',
    description: 'A mystical chest containing one of the most coveted Pactspirits in the Overrealm. This legendary drop contains powerful spirits that will aid you in your journey through the darkest dungeons.',
    stats: [
      { label: 'Drop Rate Bonus', value: '+25%' },
      { label: 'Magic Find', value: '+40%' },
      { label: 'Rarity Tier', value: 'Legendary' },
      { label: 'Duration', value: 'Permanent' },
    ],
    abilities: [
      {
        name: 'Spirit Enhancement',
        description: 'Increases the quality of all dropped items by one tier',
        cooldown: 'Passive'
      },
      {
        name: 'Fortune Strike',
        description: 'Critical hits have a 15% chance to drop additional loot',
        cooldown: 'Passive'
      },
      {
        name: 'Ethereal Sight',
        description: 'Reveals hidden treasures within 30m radius',
        cooldown: '60s'
      }
    ],
    requirements: [
      'Account Level: Any',
      'Season: 10 (Overrealm)',
      'One per account',
      'Available permanently'
    ],
    lore: 'Born from the convergence of the Overrealm and the mortal plane, these Pactspirits serve as guides and guardians to those brave enough to venture into the unknown. Ancient texts speak of their ability to sense treasures hidden across dimensions.',
  },
  {
    id: 'legendary-battle-pactspirit',
    title: 'Legendary Battle Pactspirit Selection Chest',
    shortDesc: 'Limited time',
    category: 'Reward',
    rarity: 'Legendary',
    image: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800',
    description: 'Unleash devastating combat power with this Battle Pactspirit. Forged in the fires of eternal conflict, this spirit enhances your combat prowess to legendary levels.',
    stats: [
      { label: 'Attack Power', value: '+150%' },
      { label: 'Critical Damage', value: '+80%' },
      { label: 'Attack Speed', value: '+45%' },
      { label: 'Skill Damage', value: '+60%' },
    ],
    abilities: [
      {
        name: 'Fury of the Ancients',
        description: 'Your attacks unleash waves of ancient power, dealing 200% weapon damage in an area',
        cooldown: '8s'
      },
      {
        name: 'Battle Trance',
        description: 'Each consecutive hit increases damage by 5%, stacking up to 10 times',
        cooldown: 'Passive'
      },
      {
        name: 'Warriors Resolve',
        description: 'Below 30% health, gain 50% damage reduction and 100% increased damage',
        cooldown: '120s'
      }
    ],
    requirements: [
      'Account Level: Any',
      'Complete main story objectives',
      'One per account',
      'Limited availability'
    ],
    lore: 'These battle spirits were once the champions of the Overrealm, warriors who achieved such martial perfection that their essence transcended mortality. They now lend their expertise to worthy adventurers.',
  },
  {
    id: 'activation-medium-motionless',
    title: 'Activation Medium: Motionless',
    shortDesc: 'Auto-battle unlock',
    category: 'Activation Medium',
    rarity: 'Legendary',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800',
    description: 'A revolutionary medium that allows skills to be cast automatically while standing still. Perfect for grinding and farming, this medium frees your hands while maintaining devastating effectiveness.',
    stats: [
      { label: 'Auto-cast Range', value: '25m' },
      { label: 'Damage Bonus', value: '+10%' },
      { label: 'Cast Frequency', value: 'Optimal' },
      { label: 'Supported Skills', value: 'All' },
    ],
    abilities: [
      {
        name: 'Automatic Targeting',
        description: 'Automatically selects and attacks the nearest enemy within range',
        cooldown: 'Passive'
      },
      {
        name: 'Still Power',
        description: 'Skills cast through this medium deal 10% additional damage',
        cooldown: 'Passive'
      },
      {
        name: 'Meditation Enhancement',
        description: 'Standing still for 3 seconds grants 20% increased effect',
        cooldown: 'Passive'
      }
    ],
    requirements: [
      'Complete main storyline',
      'Season 10 participation',
      'Character level 1+',
      'Permanent unlock'
    ],
    lore: 'Discovered in the deepest chambers of the Overrealm, this medium channels the power of stillness and focus. Ancient monks used similar techniques to achieve enlightenment and devastating combat prowess simultaneously.',
  },
];

export const features = [
  {
    id: 'ethereal-prisms',
    title: 'Ethereal Prisms unlock ultimate talent customization',
    shortDesc: 'Talent System',
    category: 'Game System',
    rarity: 'Epic',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800',
    description: 'Ethereal Prisms represent the pinnacle of character customization. These mystical artifacts allow you to reforge your talent tree, creating unique builds never before possible.',
    stats: [
      { label: 'Talent Points', value: 'Unlimited Respec' },
      { label: 'Build Slots', value: '5 Loadouts' },
      { label: 'Prism Types', value: '12 Variants' },
      { label: 'Combo Potential', value: 'Infinite' },
    ],
    abilities: [
      {
        name: 'Talent Reforge',
        description: 'Reset and redistribute all talent points at any time',
        cooldown: 'Instant'
      },
      {
        name: 'Prism Resonance',
        description: 'Matching prism colors unlock additional synergy bonuses',
        cooldown: 'Passive'
      },
      {
        name: 'Build Storage',
        description: 'Save up to 5 complete talent builds for instant switching',
        cooldown: 'Unlimited'
      }
    ],
    requirements: [
      'Season 10 access',
      'Character level 20+',
      'Complete tutorial quest',
      'Prisms obtained through gameplay'
    ],
    lore: 'The Ethereal Prisms are fragments of the World Core, each containing infinite potential. The Creative Genius himself discovered their properties, unlocking the ability to reshape one\'s very essence.',
  },
  {
    id: 'community-kismet',
    title: 'New Kismet Unfolds with Community Creativity',
    shortDesc: 'Community Features',
    category: 'Social System',
    rarity: 'Epic',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
    description: 'Share your creative builds, strategies, and discoveries with the global community. The Kismet system rewards innovation and collaboration.',
    stats: [
      { label: 'Shared Builds', value: '50,000+' },
      { label: 'Active Players', value: '2M+' },
      { label: 'Daily Uploads', value: '10,000+' },
      { label: 'Rating System', value: '5-Star' },
    ],
    abilities: [
      {
        name: 'Build Sharing',
        description: 'Upload and share your complete character builds with one click',
        cooldown: 'Unlimited'
      },
      {
        name: 'Community Voting',
        description: 'Rate and comment on builds, earning rewards for contributions',
        cooldown: 'Daily'
      },
      {
        name: 'Creator Rewards',
        description: 'Popular builds earn exclusive cosmetic rewards and recognition',
        cooldown: 'Weekly'
      }
    ],
    requirements: [
      'Account registration',
      'Character level 10+',
      'Community guidelines acceptance',
      'Discord/Social integration optional'
    ],
    lore: 'The threads of fate interweave through the Overrealm, connecting all adventurers in a tapestry of shared knowledge and power. What one discovers, all may learn.',
  },
  {
    id: 'combo-skill-system',
    title: 'Brand-new Combo Skill System',
    shortDesc: 'Combat Innovation',
    category: 'Combat System',
    rarity: 'Legendary',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    description: 'Break the limits of traditional combat with revolutionary combo skills. Chain abilities together for devastating effects and create your own fighting style.',
    stats: [
      { label: 'Base Combos', value: '50+' },
      { label: 'Custom Combos', value: 'Unlimited' },
      { label: 'Max Chain', value: '8 Skills' },
      { label: 'Bonus Damage', value: 'Up to 500%' },
    ],
    abilities: [
      {
        name: 'Skill Chaining',
        description: 'Link up to 8 skills together for explosive combo finishers',
        cooldown: 'Variable'
      },
      {
        name: 'Combo Mastery',
        description: 'Successful combos increase damage and reduce cooldowns',
        cooldown: 'Passive'
      },
      {
        name: 'Signature Combo',
        description: 'Create and name your own ultimate combo for massive bonuses',
        cooldown: '180s'
      }
    ],
    requirements: [
      'Season 10 participation',
      'Character level 30+',
      'At least 4 skills unlocked',
      'Complete combo tutorial'
    ],
    lore: 'The Creative Genius\'s greatest innovation. By understanding the flow of energy between skills, he unlocked the secret to exponential power growth through perfect timing and execution.',
  },
];

export const getAllItems = () => {
  return [...rewards, ...features];
};

export const getItemById = (id) => {
  const allItems = getAllItems();
  return allItems.find(item => item.id === id);
};