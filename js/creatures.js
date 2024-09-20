function doubleWeight() {
    return (this.attack_2_min + this.attack_2_max)/2*2/this.attack_2_chance;
}

function min_attack() {
    return (this.damage_base - this.damage_range);
}

const cat = { name: "Cat", weight: 5 };
const dog = { name: "Dog", weight: 10 };
const sheep = { name: "Sheep", weight: 50 };
const cow = { name: "Cow", weight: 600 };
const frog = { name: "Frog", weight: 0.5 };

const animals = [cat, dog, sheep, cow, frog];
const creature = [behemoth];

//amazon
//Victim (7, 9, 0) -> Damage (1, 25, 5) : 10
const behemoth = {
    xp: 2500, hp: 4000,
    atk: 75, def: 65, arm: 50, skill: 110,
    
    attacks: [
        { damage_base: 155,
          damage_var: 30,
          chance:7,
          type:1,
          range:7,
          projectile: 9}  // Attack 1
       // ,{ min: 150, max: 300 }   // Attack 2
    ]
};

//console.log(behemoth.attack1.min);  // Outputs: 100
//console.log(behemoth.attack2.max);  // Outputs: 300

//Victim (7, 12, 0) -> Damage (1, 155, 30) : 7

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

/*animals.forEach(animal => {
  //console.log(`${animal.name}: ${animal.weight} kg`);
  document.getElementById('creature_log').innerHTML += "The " + animal.name + " weighs " + animal.weight + "kg<br>";
}); */

document.getElementById('creature_log').innerHTML += "behemoth hp = " + behemoth.hp + "<br>";
