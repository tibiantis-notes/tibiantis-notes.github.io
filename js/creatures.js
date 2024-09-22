//Notes
// (FistFighting, 55, 55, 55, 100, 1500, 1)  = (FistFighting, skill, skill, skill, hits_to_advance_skill, skill_advance_multiplier*1000, ?_creature_or_monster)
//https://pastebin.com/3ZE3dGej
// GoStrength is calculated as 126 + MoveSpeed (100% accurate)

/*function doubleWeight() {
    return (this.hp + this.hp)/2*2/this.hp;
}
*/
function min_attack(attack) {
    return (attack.damage_base - attack.damage_var);
}

function max_attack(attack) {
    return (attack.damage_base + attack.damage_var);
}

const cat = { name: "Cat", weight: 5 };
const dog = { name: "Dog", weight: 10 };
const sheep = { name: "Sheep", weight: 50 };
const cow = { name: "Cow", weight: 600 };
const frog = { name: "Frog", weight: 0.5 };
const LIFE_DRAIN = 256;
const PHYSICAL = 1;
const FIRE = 1;
const ENERGY = 1;
const POISON = 2;

const animals = [cat, dog, sheep, cow, frog];

//amazon

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


//console.log(behemoth.attack1.min);  // Outputs: 100
//console.log(behemoth.attack2.max);  // Outputs: 300



/*
Beholder
//Victim (7, 11, 18) -> Damage (1, 40, 10) : 13
Black Knight
//Victim (7, 1, 0) -> Damage (1, 165, 20) : 7
Dwarf Geomancer
//Victim (7, 12, 0) -> Damage (1, 80, 25) : 3
Dwarf Soldier
//Victim (7, 2, 0) -> Damage (1, 30, 10) : 8
Elder  Beholder
//Victim (7, 11, 18) -> Damage (1, 80, 10) : 12
Elf
//Victim (7, 3, 0) -> Damage (1, 25, 10) : 20
Elf Anarchist
//Victim (7, 3, 0) -> Damage (1, 30, 15) : 11
//Victim (7, 11, 0) -> Damage (1, 70, 10) : 9
Elf scout
//Victim (7, 3, 0) -> Damage (1, 45, 15) : 4
Goblin
//Victim (7, 10, 0) -> Damage (1, 20, 5) : 12
Hero
//Victim (7, 3, 0) -> Damage (1, 100, 25) : 4
Hunter
//Victim (7, 3, 0) -> Damage (1, 75, 25) : 2
Minotaur archer
//Victim (7, 2, 0) -> Damage (1, 65, 20) : 3
Orc Leader
//Victim (7, 9, 0) -> Damage (1, 60, 10) : 6
Orc Spearman
//Victim (7, 1, 0) -> Damage (1, 28, 12) : 15
Orc Warlord
//Victim (7, 8, 0) -> Damage (1, 110, 10) : 4
Priestess
//Victim (7, 11, 0) -> Damage (1, 75, 20) : 4
Valkyrie
//Victim (7, 1, 0) -> Damage (1, 35, 7) : 7
*/
//end of creatures definitions
const creature = [amazon, behemoth];

creature.forEach(current_creature => {
    let creatureInfo = "<hr><h3>" + current_creature.name + "</h3>";
    creatureInfo += "HP: " + current_creature.hp + ", XP: " + current_creature.xp + "<br>";
    creatureInfo += "Armor: " + current_creature.arm + ", Atk: " + current_creature.atk + ", Def: " + current_creature.def + ", Skill: " + current_creature.skill  + "<br>";
    creatureInfo += "Speed: " + current_creature.gostrength + "<br>";
    //creatureInfo += "Dist Attack: " + min_attack(current_creature.attack[0]) + "-" + max_attack(current_creature.attack[0]) + "<br>";
    
    document.getElementById('creature_log').innerHTML += creatureInfo;
});
