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

const LIFE_DRAIN = 256;
const PHYSICAL = 1;
const FIRE = 1;
const ENERGY = 1;
const POISON = 2;

const amazon = {
    
    name: "Amazon",
    xp: 60, hp: 110,
    atk: 16, def: 11, arm: 11, skill: 24,
    gostrength: 46,
    strategy: [100,0,0,0],
    lose_target: 50,
    flee_threshold: 10,
    //Flags = {KickBoxes, Unpushable, DistanceFighting}
    
    //Victim (7, 9, 0) -> Damage (1, 25, 5) : 10
    attack: [
        { damage_base: 25,
          damage_var: 5,
          chance:10,
          type:1,
          range:7,
          projectile: 9}  // Attack 1
       // ,{ min: 150, max: 300 }   // Attack 2
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
    
    //Victim (7, 9, 0) -> Damage (1, 25, 5) : 10
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

    //Victim (7, 12, 0) -> Damage (1, 155, 30) : 7
    attack: [
        { damage_base: 200,
          damage_var: 150,
          chance:30,
          type:256,
          range:1,
          projectile: 0}  // Attack 1
       // ,{ min: 150, max: 300 }   // Attack 2
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
       // ,{ min: 150, max: 300 }   // Attack 2
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
       // ,{ min: 150, max: 300 }   // Attack 2
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

const deer = {
    name: "Deer",
    xp: 0, hp: 25,
    atk: 2, def: 2, arm: 2, skill: 10,
    gostrength: 58,
    strategy: [100,0,0,0],
    lose_target: 0,
    flee_threshold: 25,

    //no flag
};

const dog = {
    name: "Dog",
    xp: 0, hp: 20,
    atk: 0, def: 2, arm: 1, skill: 0,
    gostrength: 22,
    strategy: [100,0,0,0],
    lose_target: 0,
    flee_threshold: 8,

    //no flag
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

const creature = [amazon, ancient_scarab, badger, banshee, bear, behemoth, beholder, black_knight, black_sheep, deer, dog, pig, rabbit, sheep];

creature.forEach(current_creature => {
    let creatureInfo = "<hr><h3>" + current_creature.name + "</h3>";
    creatureInfo += "HP: " + current_creature.hp + ", XP: " + current_creature.xp + "<br>";
    creatureInfo += "Armor: " + current_creature.arm + ", Atk: " + current_creature.atk + ", Def: " + current_creature.def + ", Skill: " + current_creature.skill  + "<br>";
    creatureInfo += "Speed: " + current_creature.gostrength + "<br>";
    if (current_creature.attack && current_creature.attack.length > 0) {
        creatureInfo += "Dist Attack: " + min_attack(current_creature.attack[0]) + "-" + max_attack(current_creature.attack[0]) + "<br>";
    }
    
    document.getElementById('creature_log').innerHTML += creatureInfo;
});
