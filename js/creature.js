const amazon = {name: "Amazon",Experience: 60, SummonCost: 390, FleeThreshold: 10, Attack: 16, Defence: 11, Armor: 11, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, DistanceFighting: true, HitPoints: 110, GoStrength: 46, FistFighting: 24, }; const ancient_scarab = {name: "Ancient Scarab",Experience: 720, SummonCost: 0, FleeThreshold: 0, Attack: 50, Defence: 33, Armor: 36, Poison: 100, LoseTarget: 10, Strategy: "(70, 20, 0, 10)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 1000, GoStrength: 69, FistFighting: 80, Haste_spell: "Self haste spell, 80-90% strength for 9s, chance 13.", Paralyze_spell: "Ranged paralyze spell, 80-100% strength for 25s, chance 8. Area paralyze spell, 60-100% strength for 20s, fireball radius on self, chance 4.",}; const badger = {name: "Badger",Experience: 5, SummonCost: 200, FleeThreshold: 10, Attack: 10, Defence: 3, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 23, GoStrength: 30, FistFighting: 17, }; const banshee = {name: "Banshee",Experience: 900, SummonCost: 0, FleeThreshold: 500, Attack: 30, Defence: 65, Armor: 25, Poison: 65, LoseTarget: 3, Strategy: "(80, 10, 10, 0)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 1000, GoStrength: 70, FistFighting: 45, Paralyze_spell: "Ranged paralyze spell, 60-120% strength for 20s, chance 10.",};const bear = {name: "Bear",Experience: 23, SummonCost: 300, FleeThreshold: 15, Attack: 17, Defence: 6, Armor: 6, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", Unpushable: true, HitPoints: 80, GoStrength: 38, FistFighting: 15, }; const behemoth = {name: "Behemoth",Experience: 2500, SummonCost: 0, FleeThreshold: 0, Attack: 75, Defence: 65, Armor: 50, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoEnergy: true,NoParalyze: true, HitPoints: 4000, GoStrength: 130, FistFighting: 110, Haste_spell: "Self haste spell, 40-50% strength for 8s, chance 15.", }; const beholder = {name: "Beholder",Experience: 170, SummonCost: 0, FleeThreshold: 0, Attack: 12, Defence: 20, Armor: 5, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, HitPoints: 260, GoStrength: 35, FistFighting: 35, }; const black_knight = {name: "Black Knight",Experience: 1600, SummonCost: 0, FleeThreshold: 0, Attack: 60, Defence: 60, Armor: 42, Poison: 0, LoseTarget: 3, Strategy: "(80, 10, 10, 0)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoEnergy: true,NoParalyze: true, HitPoints: 1800, GoStrength: 155, FistFighting: 88, }; const black_sheep = {name: "Black Sheep",Experience: 0, SummonCost: 250, FleeThreshold: 20, Attack: 0, Defence: 2, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 20, GoStrength: 18, FistFighting: 0, }; const blue_djinn = {name: "Blue Djinn",Experience: 190, SummonCost: 0, FleeThreshold: 0, Attack: 30, Defence: 30, Armor: 20, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 330, GoStrength: 70, FistFighting: 50, }; const bonebeast = {name: "Bonebeast",Experience: 580, SummonCost: 0, FleeThreshold: 0, Attack: 47, Defence: 45, Armor: 40, Poison: 110, LoseTarget: 20, Strategy: "(100, 0, 0, 0)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 515, GoStrength: 69, FistFighting: 75, }; const bug = {name: "Bug",Experience: 18, SummonCost: 250, FleeThreshold: 0, Attack: 9, Defence: 3, Armor: 2, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 29, GoStrength: 40, FistFighting: 23, }; const cave_rat = {name: "Cave Rat",Experience: 10, SummonCost: 250, FleeThreshold: 3, Attack: 8, Defence: 4, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 30, GoStrength: 35, FistFighting: 18, }; const cobra = {name: "Cobra",Experience: 30, SummonCost: 275, FleeThreshold: 0, Attack: 15, Defence: 6, Armor: 1, Poison: 100, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", NoPoison: true, HitPoints: 65, GoStrength: 20, FistFighting: 23, }; const crypt_shambler = {name: "Crypt Shambler",Experience: 195, SummonCost: 580, FleeThreshold: 0, Attack: 39, Defence: 25, Armor: 30, Poison: 0, LoseTarget: 4, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true,Unpushable: true, NoSummon: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 330, GoStrength: 30, FistFighting: 60, }; const cyclops = {name: "Cyclops",Experience: 150, SummonCost: 490, FleeThreshold: 0, Attack: 30, Defence: 24, Armor: 17, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true,Unpushable: true, HitPoints: 260, GoStrength: 55, FistFighting: 50, }; const deer = {name: "Deer",Experience: 0, SummonCost: 260, FleeThreshold: 25, Attack: 2, Defence: 2, Armor: 2, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 25, GoStrength: 58, FistFighting: 10, }; const demon = {name: "Demon",Experience: 6000, SummonCost: 0, FleeThreshold: 0, Attack: 80, Defence: 65, Armor: 40, Poison: 0, LoseTarget: 10, Strategy: "(70, 10, 10, 10)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 8200, GoStrength: 80, FistFighting: 120, }; const demon_skeleton = {name: "Demon Skeleton",Experience: 240, SummonCost: 620, FleeThreshold: 0, Attack: 45, Defence: 35, Armor: 25, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true,Unpushable: true, NoBurning: true,NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 400, GoStrength: 50, FistFighting: 70, }; const dog = {name: "Dog",Experience: 0, SummonCost: 220, FleeThreshold: 8, Attack: 0, Defence: 2, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 20, GoStrength: 22, FistFighting: 0, }; const dragon = {name: "Dragon",Experience: 700, SummonCost: 0, FleeThreshold: 300, Attack: 42, Defence: 38, Armor: 25, Poison: 0, LoseTarget: 5, Strategy: "(70, 10, 10, 10)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoConvince: true, NoBurning: true,NoPoison: true, NoParalyze: true, HitPoints: 1000, GoStrength: 45, FistFighting: 55, }; const dragon_lord = {name: "Dragon Lord",Experience: 2100, SummonCost: 0, FleeThreshold: 300, Attack: 55, Defence: 48, Armor: 32, Poison: 0, LoseTarget: 5, Strategy: "(70, 10, 10, 10)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoConvince: true, NoBurning: true,NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 1900, GoStrength: 60, FistFighting: 65, }; const dwarf = {name: "Dwarf",Experience: 45, SummonCost: 320, FleeThreshold: 0, Attack: 14, Defence: 14, Armor: 8, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", NoPoison: true, HitPoints: 90, GoStrength: 45, FistFighting: 23, };

const dwarf_geomancer = {name: "Dwarf Geomancer",Experience: 245, SummonCost: 0, FleeThreshold: 150, Attack: 30, Defence: 35, Armor: 15, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoBurning: true,NoPoison: true, HitPoints: 380, GoStrength: 60, FistFighting: 50, }; const dwarf_guard = {name: "Dwarf Guard",Experience: 165, SummonCost: 650, FleeThreshold: 0, Attack: 39, Defence: 37, Armor: 15, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 20, 10)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoPoison: true, HitPoints: 245, GoStrength: 63, FistFighting: 55, }; const dwarf_soldier = {name: "Dwarf Soldier",Experience: 70, SummonCost: 360, FleeThreshold: 0, Attack: 21, Defence: 20, Armor: 9, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, NoPoison: true, HitPoints: 135, GoStrength: 48, FistFighting: 42, }; const efreet = {name: "Efreet",Experience: 300, SummonCost: 0, FleeThreshold: 0, Attack: 35, Defence: 35, Armor: 24, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 550, GoStrength: 77, FistFighting: 55, Paralyze_spell: "Ranged paralyze spell, 50-100% strength for 15s, chance 8.",}; const elder_beholder = {name: "Elder Beholder",Experience: 280, SummonCost: 0, FleeThreshold: 0, Attack: 16, Defence: 26, Armor: 13, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, HitPoints: 500, GoStrength: 45, FistFighting: 45, Paralyze_spell: "Ranged paralyze spell, 70-110% strength for 20s, chance 10.",}; const elf = {name: "Elf",Experience: 42, SummonCost: 320, FleeThreshold: 0, Attack: 12, Defence: 12, Armor: 6, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", SeeInvisible: true, HitPoints: 100, GoStrength: 55, FistFighting: 20, }; const elf_arcanist = {name: "Elf Arcanist",Experience: 175, SummonCost: 0, FleeThreshold: 0, Attack: 20, Defence: 20, Armor: 15, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoEnergy: true,HitPoints: 220, GoStrength: 70, FistFighting: 25, }; const elf_scout = {name: "Elf Scout",Experience: 75, SummonCost: 360, FleeThreshold: 0, Attack: 18, Defence: 18, Armor: 7, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, HitPoints: 160, GoStrength: 70, FistFighting: 25, };const fire_devil = {name: "Fire Devil",Experience: 110, SummonCost: 530, FleeThreshold: 0, Attack: 22, Defence: 15, Armor: 13, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, DistanceFighting: true, NoBurning: true,HitPoints: 200, GoStrength: 50, FistFighting: 30, }; const fire_elemental = {name: "Fire Elemental",Experience: 220, SummonCost: 690, FleeThreshold: 0, Attack: 38, Defence: 20, Armor: 18, Poison: 0, LoseTarget: 10, Strategy: "(80, 0, 0, 20)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoBurning: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 280, GoStrength: 55, FistFighting: 38, }; const frost_troll = {name: "Frost Troll",Experience: 23, SummonCost: 300, FleeThreshold: 10, Attack: 11, Defence: 9, Armor: 7, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 55, GoStrength: 30, FistFighting: 19, }; const gargoyle = {name: "Gargoyle",Experience: 150, SummonCost: 0, FleeThreshold: 30, Attack: 24, Defence: 30, Armor: 26, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true,Unpushable: true, NoSummon: true, NoConvince: true, NoBurning: true,NoPoison: true, NoLifeDrain: true, HitPoints: 250, GoStrength: 60, FistFighting: 45, }; const gazer = {name: "Gazer",Experience: 90, SummonCost: 0, FleeThreshold: 0, Attack: 9, Defence: 15, Armor: 4, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, HitPoints: 120, GoStrength: 30, FistFighting: 25, Haste_spell: "Self haste spell, 98-100% strength for 4s, chance 11.", }; const ghost = {name: "Ghost",Experience: 120, SummonCost: 0, FleeThreshold: 0, Attack: 28, Defence: 20, Armor: 10, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, NoSummon: true, NoConvince: true, NoPoison: true, NoHit: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 150, GoStrength: 40, FistFighting: 45, }; const ghoul = {name: "Ghoul",Experience: 85, SummonCost: 450, FleeThreshold: 0, Attack: 26, Defence: 17, Armor: 8, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 100, GoStrength: 32, FistFighting: 37, }; const giant_spider = {name: "Giant Spider",Experience: 900, SummonCost: 0, FleeThreshold: 0, Attack: 65, Defence: 40, Armor: 30, Poison: 150, LoseTarget: 10, Strategy: "(70, 20, 0, 10)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoLifeDrain: true, HitPoints: 1300, GoStrength: 80, FistFighting: 80, Haste_spell: "Self haste spell, 60-70% strength for 20s, chance 18.", }; const goblin = {name: "Goblin",Experience: 25, SummonCost: 290, FleeThreshold: 15, Attack: 10, Defence: 8, Armor: 6, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 50, GoStrength: 20, FistFighting: 15, Attack: tac, }; const green_djinn = {name: "Green Djinn",Experience: 190, SummonCost: 0, FleeThreshold: 0, Attack: 30, Defence: 30, Armor: 20, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 330, GoStrength: 70, FistFighting: 50, }; const hero = {name: "Hero",Experience: 1200, SummonCost: 0, FleeThreshold: 0, Attack: 58, Defence: 50, Armor: 35, Poison: 0, LoseTarget: 5, Strategy: "(80, 10, 10, 0)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoEnergy: true,NoParalyze: true, HitPoints: 1400, GoStrength: 100, FistFighting: 80, }; const hunter = {name: "Hunter",Experience: 150, SummonCost: 530, FleeThreshold: 10, Attack: 13, Defence: 10, Armor: 8, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, DistanceFighting: true, NoSummon: true, HitPoints: 150, GoStrength: 65, FistFighting: 18, }; const hyaena = {name: "Hyaena",Experience: 20, SummonCost: 275, FleeThreshold: 30, Attack: 11, Defence: 5, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 60, GoStrength: 58, FistFighting: 18, }; const larva = {name: "Larva",Experience: 44, SummonCost: 355, FleeThreshold: 0, Attack: 20, Defence: 11, Armor: 5, Poison: 15, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", NoPoison: true, NoParalyze: true, HitPoints: 70, GoStrength: 22, FistFighting: 30, }; const lich = {name: "Lich",Experience: 900, SummonCost: 0, FleeThreshold: 0, Attack: 40, Defence: 60, Armor: 50, Poison: 400, LoseTarget: 3, Strategy: "(80, 10, 10, 0)", KickBoxes: true, KickCreatures: true,SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 880, GoStrength: 65, FistFighting: 40, Paralyze_spell: "Ranged paralyze spell, 75-115% strength for 30s, chance 7.",}; const lion = {name: "Lion",Experience: 30, SummonCost: 320, FleeThreshold: 10, Attack: 20, Defence: 13, Armor: 6, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", Unpushable: true, HitPoints: 80, GoStrength: 55, FistFighting: 32, }; const marid = {name: "Marid",Experience: 300, SummonCost: 0, FleeThreshold: 0, Attack: 35, Defence: 35, Armor: 24, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true,NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 550, GoStrength: 77, FistFighting: 55, Paralyze_spell: "Ranged paralyze spell, 50-100% strength for 15s, chance 8.",};

const creature = [amazon, ancient_scarab, badger, banshee, bear, behemoth, beholder, black_knight, black_sheep, blue_djinn, bonebeast, bug, cave_rat, cobra, crypt_shambler, cyclops, deer, demon, demon_skeleton, dog, dragon, dragon_lord, dwarf, dwarf_geomancer, dwarf_guard, dwarf_soldier, efreet, elder_beholder, elf, elf_arcanist, elf_scout, fire_devil, fire_elemental, frost_troll, gargoyle, gazer, ghost, ghoul, giant_spider, goblin, green_djinn, hero, hunter, hyaena, larva, lich, lion, marid/*, minotaur, minotaur_archer, minotaur_guard, minotaur_mage, monk, mummy, necromancer, orc, orc_berserker, orc_leader, orc_rider, orc_shaman, orc_spearman, orc_warlord, orc_warrior, pig, poison_spider, polar_bear, priestess, rabbit, rat, rotworm, scarab, scorpion, sheep, skeleton, skunk, slime, snake, spider, stalker, stone_golem, swamp_troll, troll, valkyrie, vampire, warlock, war_wolf, wasp, wild_warrior, winter_wolf, witch, wolf*/];


let creatureInfo = "";

creature.forEach(current_creature => {
    creatureInfo += "<hr><h3>" + current_creature.name + "</h3>";
    
});

document.getElementById('creature_log').innerHTML += creatureInfo;


