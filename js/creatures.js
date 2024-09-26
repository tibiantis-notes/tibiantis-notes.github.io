//Notes
// (FistFighting, 55, 55, 55, 100, 1500, 1)  = (FistFighting, skill, skill, skill, hits_to_advance_skill, skill_advance_multiplier*1000, ?_creature_or_monster)
//https://pastebin.com/3ZE3dGej
// GoStrength is calculated as 126 + MoveSpeed (100% accurate)

function min_attack(attack) {
    return (attack.damage_base - attack.damage_var);
}

function max_attack(attack) {
    return (attack.damage_base + attack.damage_var);
}

const MANA_DRAIN = 512;
const LIFE_DRAIN = 256;
const PHYSICAL = 1;
const FIRE = 1;
const ENERGY = 1;
const POISON = 2;
const LONG_POISON = 32;

const amazon = {
    
    name: "Amazon",
    xp: 60, hp: 110,
    atk: 16, def: 11, arm: 11, skill: 24,
    gostrength: 46,
    strategy: [100,0,0,0],
    lose_target: 50,
    flee_threshold: 10,
    //Flags = {KickBoxes, Unpushable, DistanceFighting}
    
    attack: [
        { damage_base: 25,
          damage_var: 5,
          chance:10,
          type:1,
          range:7,
          projectile: 9}  // Attack 1
        ]
};

const ancient_scarab = {
    
    name: "Ancient Scarab",
    xp: 720, hp: 1000,
    atk: 50, def: 33, arm: 36, skill: 80,
    gostrength: 69,
    strategy: [70,20,0,10],
    lose_target: 10,
    flee_threshold: 0,
   /*Flags         = {KickBoxes,
                 KickCreatures,
                 SeeInvisible,
                 Unpushable,
                 NoSummon,
                 NoIllusion,
                 NoConvince,
                 NoPoison,
                 NoLifeDrain,
                 NoParalyze}*/
    
    attack: [
        { damage_base: 75,
          damage_var: 60,
          chance:9,
          type:2,
          range:7,
          projectile: 15}  // Attack 1
    ]
};

const badger = {
    name: "Badger",
    xp: 5, hp: 23,
    atk: 10, def: 3, arm: 1, skill: 17,
    gostrength: 30,
    strategy: [100,0,0,0],
    lose_target: 0,
    flee_threshold: 10,

    //no flag
};

const banshee = {
    name: "Banshee",
    xp: 900, hp: 1000,
    atk: 30, def: 65, arm: 25, skill: 45,
    gostrength: 70,
    strategy: [80,10,10,0],
    lose_target: 3,

     attack: [
        { damage_base: 200,
          damage_var: 150,
          chance:30,
          type:256,
          range:1,
          projectile: 0}  // Attack 1
    ]
};

const bear = {
    name: "Bear",
    xp: 23, hp: 80,
    atk: 17, def: 6, arm: 6, skill: 15,
    gostrength: 38,
    strategy: [100,0,0,0],
    lose_target: 0,
    flee_threshold: 15,

    //flag Unpushable
};


const behemoth = {
    name: "Behemoth",
    xp: 2500, hp: 4000,
    atk: 75, def: 65, arm: 50, skill: 110,
    gostrength: 130,
    strategy: [70,0,30,0],
    lose_target: 5,
    flee_threshold: 0,

    /*Flags         = {KickBoxes,
                 KickCreatures,
                 SeeInvisible,
                 Unpushable,
                 NoSummon,
                 NoIllusion,
                 NoConvince,
                 NoBurning,
                 NoPoison,
                 NoEnergy,
                 NoParalyze}*/

    //Victim (7, 12, 0) -> Damage (1, 155, 30) : 7
    attack: [
        { damage_base: 155,
          damage_var: 30,
          chance:7,
          type:1,
          range:7,
          projectile: 12}  // Attack 1
       // ,{ min: 150, max: 300 }   // Attack 2
    ]
};
    
const beholder = {
    name: "Beholder",
    xp: 170, hp: 260,
    atk: 12, def: 20, arm: 5, skill: 35,
    gostrength: 35,
    strategy: [100,0,0,0],
    lose_target: 50,
    flee_threshold: 0,

    /*
Flags         = {KickBoxes,
                 SeeInvisible,
                 Unpushable,
                 DistanceFighting,
                 NoSummon,
                 NoConvince,
                 NoPoison,
                 NoLifeDrain}
                
Spells        = {Victim (7, 5, 0) -> Damage (8, 30, 15) : 15,
                 Victim (7, 4, 0) -> Damage (4, 35, 10) : 16,
                 Victim (7, 11, 18) -> Damage (1, 40, 10) : 13,
                 Victim (7, 15, 0) -> Damage (2, 25, 20) : 14,
                 Victim (7, 0, 14) -> Damage (256, 40, 5) : 17,
                 Victim (7, 0, 14) -> Damage (512, 15, 10) : 20,
                 Origin (0, 13) -> Summon (33, 6) : 9}            
*/
    attack: [
        { damage_base: 40,
          damage_var: 10,
          chance:13,
          type:1,
          range:7,
          projectile: 11}  // Attack 1
          ]
};

const black_knight = {
    
    name: "Black Knight",
    xp: 1600, hp: 1800,
    atk: 60, def: 60, arm: 42, skill: 88,
    gostrength: 155,
    strategy: [80,10,10,0],
    lose_target: 3,
    flee_threshold: 0,
    
    /*Flags         = {KickBoxes,
                 KickCreatures,
                 SeeInvisible,
                 Unpushable,
                 NoSummon,
                 NoIllusion,
                 NoConvince,
                 NoBurning,
                 NoPoison,
                 NoEnergy,
                 NoParalyze}
*/
   
    attack: [
        { damage_base: 165,
          damage_var: 20,
          chance:7,
          type:1,
          range:7,
          projectile: 1}  // Attack 1
          ]
};

const black_sheep = {
    name: "Black Sheep",
    xp: 0, hp: 20,
    atk: 0, def: 2, arm: 1, skill: 0,
    gostrength: 18,
    strategy: [100,0,0,0],
    lose_target: 0,
    flee_threshold: 20,

    //no flag
};

const blue_djinn = {
    name: "Blue Djinn",
    xp: 190, hp: 330,
    atk: 30, def: 30, arm: 20, skill: 50,
    gostrength: 70,
    strategy: [100,0,0,0],
    lose_target: 50,
    flee_threshold: 0,

    /*
Flags         = {KickBoxes,
                 SeeInvisible,
                 Unpushable,
                 NoSummon,
                 NoIllusion,
                 NoConvince,
                 NoBurning,
                 NoPoison,
                 NoEnergy,
                 NoLifeDrain,
                 NoParalyze}
                
Spells        = {Victim (7, 4, 0) -> Damage (4, 60, 15) : 2,
                 Victim (7, 5, 0) -> Damage (128, 70, 20) : 3,
                 Victim (7, 11, 0) -> Damage (256, 80, 25) : 4,
                 Victim (7, 5, 11) -> Drunken (6, 0, 30) : 5,
                 Victim (7, 0, 13) -> Outfit ((74, 0-0-0-0), 20) : 6}           
*/
    attack: [
        { damage_base: 60,
          damage_var: 16,
          chance:2,
          type:4,
          range:7,
          projectile: 4}  // Attack 1
          ]
};

const bonebeast = {
    name: "Bonebeast",
    xp: 580, hp: 515,
    atk: 47, def: 45, arm: 40, skill: 75,
    gostrength: 69,
    strategy: [100,0,0,0],
    lose_target: 20,
    flee_threshold: 0,

    /*
Flags         = {KickBoxes,
                 KickCreatures,
                 SeeInvisible,
                 Unpushable,
                 NoSummon,
                 NoIllusion,
                 NoConvince,
                 NoPoison,
                 NoLifeDrain,
                 NoParalyze}
                
Spells        = {Actor (17) -> Healing (45, 15) : 9,
                 Victim (7, 15, 21) -> Damage (2, 45, 20) : 10,
                 Origin (2, 14) -> Damage (256, 40, 10) : 7,
                 Origin (2, 21) -> Damage (32, 70, 10) : 8}
*/
    attack: [
        { damage_base: 60,
          damage_var: 16,
          chance:2,
          type:4,
          range:7,
          projectile: 4}  // Attack 1
          ]
};

const bug = {
    name: "Bug",
    xp: 18, hp: 29,
    atk: 9, def: 3, arm: 2, skill: 23,
    gostrength: 40,
    strategy: [100,0,0,0], lose_target: 0, flee_threshold: 0,
    //no flag
};

const cave_rat = {
    name: "Cave Rat",
    xp: 10, hp: 30,
    atk: 8, def: 4, arm: 8, skill: 18,
    gostrength: 35,
    strategy: [100,0,0,0], lose_target: 0, flee_threshold: 3,
    //no flag
};

const cobra = {
    name: "Cobra",
    xp: 30, hp: 65,
    atk: 15, def: 6, arm: 1, skill: 23,
    gostrength: 20,
    strategy: [100,0,0,0], lose_target: 0, flee_threshold: 0,
    /*Flags = {NoPoison}*/
    attack: [{ damage_base: 20,
          damage_var: 6,
          chance:4,
          type:32,
          range:5,
          projectile: 15}]
};

const crypt_shambler = {
    name: "Crypt Shambler",
    xp: 195, hp: 330,
    atk: 39, def: 25, arm: 30, skill: 60,
    gostrength: 30,
    strategy: [70,0,30,0], lose_target: 4, flee_threshold: 0,
    /*Flags   = {KickBoxes,
                 KickCreatures,
                 Unpushable,
                 NoSummon,
                 NoPoison,
                 NoLifeDrain,
                 NoParalyze}*/
    attack: [{ damage_base: 40,
          damage_var: 15,
          chance:8,
          type:256,
          range:1,
          projectile: 0}]
};

const cyclops = {
    name: "Cyclops",
    xp: 150, hp: 260,
    atk: 30, def: 24, arm: 17, skill: 50,
    gostrength: 55,
    strategy: [70,0,30,0], lose_target: 5, flee_threshold: 0,
    /*Flags   = {KickBoxes,
                 KickCreatures,
                 Unpushable}*/
};

const deer = {
    name: "Deer",
    xp: 0, hp: 25,
    atk: 2, def: 2, arm: 2, skill: 10,
    gostrength: 58,
    strategy: [100,0,0,0], lose_target: 0, flee_threshold: 25,
    //no flag
};

const demon = {
    name: "Demon",
    xp: 6000, hp: 8200,
    atk: 80, def: 65, arm: 40, skill: 120,
    gostrength: 80,
    strategy: [70,10,10,10], lose_target: 10, flee_threshold: 0,
    /*Flags   = {KickBoxes,
                 KickCreatures,
                 SeeInvisible,
                 Unpushable,
                 NoSummon,
                 NoIllusion,
                 NoConvince,
                 NoBurning,
                 NoPoison,
                 NoEnergy,
                 NoLifeDrain,
                 NoParalyze}

Spells        = {Actor (13) -> Healing (120, 30) : 7,
                 Victim (7, 0, 0) -> Damage (512, 70, 30) : 8,
                 Origin (0, 13) -> Summon (49, 1) : 12,
                 Destination (7, 4, 6, 7) -> Damage (4, 155, 45) : 3,
                 Destination (7, 4, 0, 0) -> Field (1) : 7,
                 Angle (0, 8, 12) -> Damage (8, 360, 60) : 10}
*/
    attack: [{ damage_base: 70,
          damage_var: 30,
          chance:8,
          type:512,
          range:7,
          projectile: 0}]
};

const demon_skeleton = {
    name: "Demon Skeleton",
    xp: 240, hp: 400,
    atk: 45, def: 35, arm: 25, skill: 70,
    gostrength: 50,
    strategy: [70,0,30,0], lose_target: 5, flee_threshold: 0,
/*Flags       = {KickBoxes,
                 KickCreatures,
                 Unpushable,
                 NoBurning,
                 NoPoison,
                 NoLifeDrain,
                 NoParalyze}

Spells        = {Victim (1, 0, 0) -> Damage (256, 40, 10) : 10}
*/
attack: [{ damage_base: 40,
          damage_var: 10,
          chance:10,
          type:256,
          range:1,
          projectile: 0}]
};

const dog = {
    name: "Dog",
    xp: 0, hp: 20,
    atk: 0, def: 2, arm: 1, skill: 0,
    gostrength: 22,
    strategy: [100,0,0,0], lose_target: 0, flee_threshold: 8,
    //no flag
};

const dragon = {
    name: "Dragon",
    xp: 700, hp: 1000,
    atk: 42, def: 38, arm: 25, skill: 55,
    gostrength: 45,
    strategy: [70,10,10,10], lose_target: 5, flee_threshold: 0,
/*Flags         = {KickBoxes,
                 KickCreatures,
                 SeeInvisible,
                 Unpushable,
                 NoSummon,
                 NoConvince,
                 NoBurning,
                 NoPoison,
                 NoParalyze}

Spells        = {Actor (13) -> Healing (45, 11) : 8,
                 Destination (7, 4, 3, 7) -> Damage (4, 80, 25) : 7,
                 Angle (30, 8, 7) -> Damage (4, 130, 30) : 9}
*/
/*attack: [{ damage_base: 40,
          damage_var: 10,
          chance:10,
          type:256,
          range:1,
          projectile: 0}]*/
};

const dragon_lord = {
    name: "Dragon Lord",
    xp: 2100, hp: 1900,
    atk: 55, def: 48, arm: 32, skill: 65,
    gostrength: 60,
    strategy: [70,10,10,10], lose_target: 5, flee_threshold: 0,
/*Flags         = {KickBoxes,
                 KickCreatures,
                 SeeInvisible,
                 Unpushable,
                 NoSummon,
                 NoConvince,
                 NoBurning,
                 NoPoison,
                 NoLifeDrain,
                 NoParalyze}

Spells        = {Actor (13) -> Healing (75, 18) : 4,
                 Destination (7, 4, 3, 7) -> Damage (4, 150, 30) : 6,
                 Destination (7, 4, 3, 0) -> Field (1) : 7,
                 Angle (30, 8, 7) -> Damage (4, 200, 50) : 6}
*/
/*attack: [{ damage_base: 40,
          damage_var: 10,
          chance:10,
          type:256,
          range:1,
          projectile: 0}]*/
};

const dwarf = {
    name: "Dwarf",
    xp: 45, hp: 90,
    atk: 14, def: 14, arm: 8, skill: 23,
    gostrength: 45,
    strategy: [100,0,0,0], lose_target: 0, flee_threshold: 0,
/*Flags       = {NoPoison}*/
};

const dwarf_geomancer = {
    name: "Dwarf Geomancer",
    xp: 245, hp: 380,
    atk: 30, def: 35, arm: 15, skill: 50,
    gostrength: 60,
    strategy: [100,0,0,0], lose_target: 50, flee_threshold: 150,
/*Flags         = {KickBoxes,
                 KickCreatures,
                 SeeInvisible,
                 Unpushable,
                 DistanceFighting,
                 NoSummon,
                 NoConvince,
                 NoBurning,
                 NoPoison}

Spells        = {Actor (13) -> Healing (100, 25) : 2,
                 Victim (7, 12, 0) -> Damage (1, 80, 25) : 3,
                 Victim (7, 0, 0) -> Damage (512, 65, 15) : 4}
*/
attack: [{ damage_base: 80,
          damage_var: 25,
          chance:3,
          type:1,
          range:7,
          projectile: 12},
        {
          damage_base: 65,
          damage_var: 15,
          chance:4,
          type:512,
          range:7,
          projectile: 0 }]
};

const dwarf_guard = {
    name: "Dwarf Guard",
    xp: 165, hp: 245,
    atk: 39, def: 37, arm: 15, skill: 55,
    gostrength: 63,
    strategy: [70,0,20,10], lose_target: 5, flee_threshold: 0,
/*Flags         = {KickBoxes,
                 KickCreatures,
                 SeeInvisible,
                 Unpushable,
                 NoPoison}*/
};

const dwarf_soldier = {
    name: "Dwarf Soldier",
    xp: 135, hp: 70,
    atk: 21, def: 20, arm: 9, skill: 42,
    gostrength: 48,
    strategy: [100,0,0,0], lose_target: 0, flee_threshold: 0,
/*Flags         = {KickBoxes,
                 Unpushable,
                 NoPoison}
*/
attack: [{ damage_base: 30,
          damage_var: 10,
          chance:8,
          type:1,
          range:7,
          projectile: 2}]
};

const green_djinn = {
    name: "Green Djinn",
    xp: 190, hp: 330,
    atk: 30, def: 30, arm: 20, skill: 50,
    gostrength: 70,
    strategy: [100,0,0,0],
    lose_target: 50,
    flee_threshold: 0,

    /*
Flags         = {KickBoxes,
                 SeeInvisible,
                 Unpushable,
                 NoSummon,
                 NoIllusion,
                 NoConvince,
                 NoBurning,
                 NoPoison,
                 NoEnergy,
                 NoLifeDrain,
                 NoParalyze}
                
Spells        = {Victim (7, 4, 0) -> Damage (4, 60, 15) : 2,
                 Victim (7, 5, 0) -> Damage (128, 70, 20) : 3,
                 Victim (7, 11, 0) -> Damage (256, 80, 25) : 4,
                 Victim (7, 5, 11) -> Drunken (6, 0, 30) : 5,
                 Victim (7, 0, 13) -> Outfit ((74, 0-0-0-0), 20) : 6}           
*/
    attack: [
        { damage_base: 60,
          damage_var: 16,
          chance:2,
          type:4,
          range:7,
          projectile: 4}  // Attack 1
           ]
};

const pig = {
    name: "Pig",
    xp: 0, hp: 25,
    atk: 0, def: 2, arm: 2, skill: 10,
    gostrength: 17,
    strategy: [100,0,0,0],
    lose_target: 0,
    flee_threshold: 25,

    //no flag
};

const rabbit = {
    name: "Rabbit",
    xp: 0, hp: 15,
    atk: 0, def: 2, arm: 1, skill: 0,
    gostrength: 50,
    strategy: [100,0,0,0],
    lose_target: 0,
    flee_threshold: 15,

    //no flag
};

const sheep = {
    name: "Sheep",
    xp: 0, hp: 20,
    atk: 0, def: 2, arm: 1, skill: 0,
    gostrength: 18,
    strategy: [100,0,0,0],
    lose_target: 0,
    flee_threshold: 20,

    //no flag
};

//end of creatures definitions

const creature = [amazon, ancient_scarab, badger, banshee, bear, behemoth, beholder, black_knight, black_sheep, blue_djinn, bonebeast, bug, cave_rat, cobra, crypt_shambler, cyclops, deer, demon, demon_skeleton, dog, dragon, dragon_lord, dwarf, dwarf_geomancer, dwarf_guard, dwarf_soldier, green_djinn, pig, rabbit, sheep];

creature.forEach(current_creature => {
    let creatureInfo = "<hr><h3>" + current_creature.name + "</h3>";
    creatureInfo += "HP: " + current_creature.hp + ", XP: " + current_creature.xp + "<br>";
    creatureInfo += "Armor: " + current_creature.arm + ", Atk: " + current_creature.atk + ", Def: " + current_creature.def + ", Skill: " + current_creature.skill  + "<br>";
    creatureInfo += "Speed: " + current_creature.gostrength + "<br>";
    if (current_creature.attack && current_creature.attack.length > 0 && current_creature.attack.type == 1) {
        creatureInfo += "Dist Attack: " + min_attack(current_creature.attack[0]) + "-" + max_attack(current_creature.attack[0]) + "<br>";
    }
    
    document.getElementById('creature_log').innerHTML += creatureInfo;
});
