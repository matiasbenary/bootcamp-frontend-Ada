const getBulbasaur = () => ({
  name: 'Bulbasaur',
  type: 'grass',
  ability: {
    primary: 'Overgrow',
    hidden: 'Chlorophyll'
  },
  stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45
  },
  moves: ['Growl', 'Tackle', 'Vine Whip', 'Razor Leaf'],
  modifiers: {
    weakness: ['fire', 'ice', 'flying', 'psychic'],
    resistances: ['water', 'grass', 'electric', 'fighter']
  }
})

const getCharmander = () => ({
  name: 'Charmander',
  type: 'fire',
  ability: {
    primary: 'Blaze',
    hidden: 'Solar Power'
  },
  stats: {
    hp: 39,
    attack: 52,
    deffense: 43,
    speed: 65
  },
  moves: ['Growl', 'Scratch', 'Flamethrower', 'Dragon Breath'],
  modifiers: {
    weakness: ['water', 'ground', 'rock'],
    resistances: ['fire', 'ice', 'grass', 'steal']
  }
})

const getSquirtle = () => ({
  name: 'Squirtle',
  type: 'water',
  ability: {
    primary: 'Torrent',
    hidden: 'Rain Dish'
  },
  stats: {
    hp: 44,
    attack: 48,
    deffense: 50,
    speed: 43
  },
  moves: ['Tackle', 'Tail Whip', 'Water Gun', 'Hydro Pump'],
  modifiers: {
    weakness: ['electric', 'grass'],
    resistances: ['water', 'fire', 'ice', 'steel']
  }
})

const getPikachu = () => ({
  name: 'Pikachu',
  type: 'electric',
  ability: {
    primary: 'Static',
    hidden: 'Lightning rod'
  },
  stats: {
    hp: 35,
    attack: 55,
    deffense: 40,
    speed: 90
  },
  moves: ['Quick Attack', 'Volt Tackle', 'Iron Tail', 'Thunderbolt'],
  modifiers: {
    weakness: ['ground'],
    resistances: ['electric', 'flying', 'water', 'steel']
  }
})
