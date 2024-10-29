const amazon = {name: "Amazon",Experience: 60, SummonCost: 390, FleeThreshold: 10, Attack: 16, Defence: 11, Armor: 11, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, DistanceFighting: true, HitPoints: 110, GoStrength: 46, FistFighting: 24, }; const ancient_scarab = {name: "Ancient Scarab",Experience: 720, SummonCost: 0, FleeThreshold: 0, Attack: 50, Defence: 33, Armor: 36, Poison: 100, LoseTarget: 10, Strategy: "(70, 20, 0, 10)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 1000, GoStrength: 69, FistFighting: 80, Haste_spell: "Self haste spell, 80-90% strength for 9s, chance 13.", Paralyze_spell: "Ranged paralyze spell, 80-100% strength for 25s, chance 8. Area paralyze spell, 60-100% strength for 20s, fireball radius on self, chance 4.",}; const badger = {name: "Badger",Experience: 5, SummonCost: 200, FleeThreshold: 10, Attack: 10, Defence: 3, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 23, GoStrength: 30, FistFighting: 17, }; const banshee = {name: "Banshee",Experience: 900, SummonCost: 0, FleeThreshold: 500, Attack: 30, Defence: 65, Armor: 25, Poison: 65, LoseTarget: 3, Strategy: "(80, 10, 10, 0)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 1000, GoStrength: 70, FistFighting: 45, Paralyze_spell: "Ranged paralyze spell, 60-120% strength for 20s, chance 10.",};

const creature = [amazon, ancient_scarab, badger, banshee/*, bear, behemoth, beholder, black_knight, black_sheep, blue_djinn, bonebeast, bug, cave_rat, cobra, crypt_shambler, cyclops, deer, demon, demon_skeleton, dog, dragon, dragon_lord, dwarf, dwarf_geomancer, dwarf_guard, dwarf_soldier, efreet, elder_beholder, elf, elf_arcanist, elf_scout, fire_devil, fire_elemental, frost_troll, gargoyle, gazer, ghost, ghoul, giant_spider, goblin, green_djinn, hero, hunter, hyaena, larva, lich, lion, marid, minotaur, minotaur_archer, minotaur_guard, minotaur_mage, monk, mummy, necromancer, orc, orc_berserker, orc_leader, orc_rider, orc_shaman, orc_spearman, orc_warlord, orc_warrior, pig, poison_spider, polar_bear, priestess, rabbit, rat, rotworm, scarab, scorpion, sheep, skeleton, skunk, slime, snake, spider, stalker, stone_golem, swamp_troll, troll, valkyrie, vampire, warlock, war_wolf, wasp, wild_warrior, winter_wolf, witch, wolf*/];


let creatureInfo = "";

creature.forEach(current_creature => {
    creatureInfo += "<hr><h3>" + current_creature.name + "</h3>";
    
});

document.getElementById('creature_log').innerHTML += creatureInfo;


