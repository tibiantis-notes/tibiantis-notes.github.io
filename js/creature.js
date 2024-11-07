document.getElementById("id_table_sort").addEventListener("change", function() {
            const sortBy = this.value; // Get selected sort option

document.getElementById('test2').innerHTML = "add event listner was called";

            sortCreatures(creature, sortBy);
            
document.getElementById('test1').innerHTML = document.getElementById('id_table_sort').value;
            
        });


function max_damage(fn_creature) {
    
return Math.floor((5 * fn_creature.FistFighting + 50) * fn_creature.Attack * (99 + 99) / 2 / 10000);
}

function max_block(fn_creature) {
    
return Math.floor((5 * fn_creature.FistFighting + 50) * fn_creature.Defence * (99 + 99) / 2 / 10000);
}

function arm_and_block(fn_creature) {

let arm_reduction = (Math.floor(fn_creature.Armor * 0.5) + Math.floor(fn_creature.Armor * 0.5 * 90 / 99))/2;

if (fn_creature.Armor == 2 || fn_creature.Armor == 1){ arm_reduction = 0.5;}

arm_reduction += Math.floor((5 * fn_creature.FistFighting + 50) * fn_creature.Defence * (99 + 99) / 2 / 10000)/2;

return arm_reduction;
} // end of arm and block

function resistances(fn_creature){

//Fire F, Poison P, Energy E, Physical Ph, Life Drain, LD
let resist_text = "";
 if (fn_creature.NoHit == true){ // type 1
 resist_text += '<img src="/images/physical.png" alt="physical" style="width:32px;height:32px;" title="Physical Immune">';}
   
if (fn_creature.NoPoison == true){ // type 2
 resist_text += '<img src="/images/poison.png" alt="poison" style="width:32px;height:32px;" title="Poison Immune">';}

if (fn_creature.NoBurning == true){ // type 4
 resist_text += '<img src="/images/fire.png" alt="fire" style="width:32px;height:32px;" title="Fire Immune" >';}
   
if (fn_creature.NoEnergy == true){ //type 8
 resist_text += '<img src="/images/energy.png" alt="energy" style="width:32px;height:32px;" title="Energy Immune">';}
   
if (fn_creature.NoLifeDrain == true){ // type 255
 resist_text += '<img src="/images/skull.png" alt="life drain" style="width:32px;height:32px;" title="Life Drain Immune">';}

return resist_text;

} // end of resistances

function abilities(fn_creature)
{
    return 0;
    //see invis, kickboxes, no illusion, paralyze, unpushable, distancefighting 
}


function base_speed(fn_creature) {
    
return Math.floor((fn_creature.GoStrength * 2 + 80)/2)*2;
} // end of haste function

function speed_with_haste(fn_creature) {
    let haste = 0;
    switch(fn_creature){
    case ancient_scarab: haste = 0.9; break;
    case behemoth: haste = 0.5; break;
    case gazer: haste = 1.0; break;
    case giant_spider: haste = 0.7; break;
    case monk: haste = 0.6; break;
    case orc_berserker: haste = 0.55; break;
    case orc_rider: haste = 0.5; break;
    case scarab: haste = 0.5; break;
    case wild_warrior: haste = 1.0; break;
    
    default: haste = 0;
    } // end of switch
    
    return Math.floor((fn_creature.GoStrength * 2 + 80) * (1 + haste)/2)*2;
} // end of haste function

function sortCreatures(fn_creature, property) {


    switch (property){
    case "Name": fn_creature.sort((a, b) => b["name"].localeCompare(a["name"])); break;
    case "HitPoints": fn_creature.sort((a, b) => b["HitPoints"] -  a["HitPoints"]); break;
    case "Experience": fn_creature.sort((a, b) => b["Experience"] -  a["Experience"]); break;
    case "Armor": fn_creature.sort((a, b) => b["Armor"] -  a["Armor"]); break;
    case "Base_Speed": fn_creature.sort((a, b) => b["GoStrength"] -  a["GoStrength"]); break;
    case "Speed_With_Haste": fn_creature.sort((a, b) => speed_with_haste(b) -  speed_with_haste(a)); break;
    case "Max_Damage": fn_creature.sort((a, b) => max_damage(b) -  max_damage(a)); break;
    case "Blocking": fn_creature.sort((a, b) => max_block(b) -  max_block(a)); break;
    case "Block_And_Armor": fn_creature.sort((a, b) => arm_and_block(b) -  arm_and_block(a)); break;
    case "Summon_Cost": fn_creature.sort((a, b) => b["SummonCost"] -  a["SummonCost"]); break;
    case "xpdivhp": fn_creature.sort((a, b) => (b["Experience"] / b["HitPoints"]) - (a["Experience"] / a["HitPoints"])); break;
    case "Attack": fn_creature.sort((a, b) => b["Attack"] - a["Attack"]); break;
    case "Defence": fn_creature.sort((a, b) => b["Defence"] - a["Defence"]); break;
    case "Skill": fn_creature.sort((a, b) => b["FistFighting"] - a["FistFightint"]); break;
    
    } // end of switch
    updateTable(fn_creature);
    
    
    
} // end of sortCreatures

function updateTable(fn_creature) {

let creatureInfo = "";
let creatureTable = "";
let creatureTableHeader = "";

fn_creature.forEach(current_creature => {
creatureInfo += "<hr><h3>" + current_creature.name + "</h3>" +
"Hit Points: " + current_creature.HitPoints + "<br>" + 
"Experience: " + current_creature.Experience + "<br>" +
"Attack: " + current_creature.Attack + ", Defence: " + current_creature.Defence + ", Skill: " + current_creature.FistFighting + ", Armor: " + current_creature.Armor +
"<br>Max Damage: " + max_damage(current_creature) + "<br>" +
"Speed " + ("Haste_spell" in current_creature ? "(with haste)" : "") + ": " + speed_with_haste(current_creature) + "<br>";
});

/*document.getElementById('creature_log').innerHTML = creatureInfo;*/


let header = false;

//Tick boxes for include

// Filters (check box): weak fire, immune fire, erergy, kick boxes, see invis, etc.

fn_creature.forEach(current_creature => {
//build columns and rows

creatureTable += "<tr>";

if (true){ //Name
if (header == false){
    creatureTableHeader += "<th>Name</th>";}
creatureTable += "<td>" + current_creature.name + "</td>";}

if (document.getElementById('id_col_HitPoints').checked){ //Hit Points
if (header == false){
    creatureTableHeader += "<th>HP</th>";}
creatureTable += "<td>" + current_creature.HitPoints + "</td>";}

if (document.getElementById('id_col_Experience').checked){ //Experience
if (header == false){
    creatureTableHeader += "<th>Exp</th>";}
creatureTable += "<td>" + current_creature.Experience + "</td>";}

if (document.getElementById('id_col_Summon_Cost').checked){ //Summon
if (header == false){
    creatureTableHeader += "<th>Summon</th>";}
creatureTable += "<td>" + (current_creature.NoSummon == true ? 0 : current_creature.SummonCost) + "</td>";}

if (document.getElementById('id_col_Convince_Cost').checked){ //Convince
if (header == false){
creatureTableHeader += "<th>Convince</th>";}
creatureTable += "<td>" + (current_creature.NoConvince == true ? 0 : current_creature.SummonCost) + "</td>";}

if (document.getElementById('id_col_Attack').checked){ //Attack
if (header == false){
    creatureTableHeader += "<th>Atk</th>";}
creatureTable += "<td>" + current_creature.Attack + "</td>";}

if (document.getElementById('id_col_Defence').checked){ //Defence
if (header == false){
    creatureTableHeader += "<th>Def</th>";}
creatureTable += "<td>" + current_creature.Defence + "</td>";}

if (document.getElementById('id_col_Armor').checked){ //Armor
if (header == false){
    creatureTableHeader += "<th>Armor</th>";}
creatureTable += "<td>" + current_creature.Armor + "</td>";}

if (document.getElementById('id_col_Skill').checked){ //Skill
if (header == false){
    creatureTableHeader += "<th>Skill</th>";}
creatureTable += "<td>" + current_creature.FistFighting + "</td>";}

if (document.getElementById('id_col_Max_Damage').checked){ //Max Hit
if (header == false){
    creatureTableHeader += "<th>Max<br>Hit</th>";}
creatureTable += "<td>" + max_damage(current_creature) + "</td>";}

if (document.getElementById('id_col_Max_Block').checked){ //Max Block
if (header == false){
    creatureTableHeader += "<th>Max<br>Block</th>";}
creatureTable += "<td>" + max_block(current_creature) + "</td>";}

if (document.getElementById('id_col_Arm_And_Block').checked){ //Average Block
if (header == false){
    creatureTableHeader += "<th>Arm +<br>Block</th>";}
creatureTable += "<td>" + Math.floor(arm_and_block(current_creature)) + "</td>";}

if (document.getElementById('id_col_Speed_With_Haste').checked){ //Speed with haste
if (header == false){
    creatureTableHeader += "<th>Speed<br>(Haste)</th>";}
creatureTable += "<td>" + speed_with_haste(current_creature) + "</td>";}

if (document.getElementById('id_col_Speed').checked){ //Speed
if (header == false){
    
    creatureTableHeader += "<th>Speed<br> (Base)</th>";}
creatureTable += "<td>" + base_speed(current_creature) + "</td>";}

if (document.getElementById('id_col_xpdivhp').checked){ // XP over HP
if (header == false){
    
    creatureTableHeader += "<th>XP:HP</th>";}
creatureTable += "<td>" + (current_creature.Experience/current_creature.HitPoints).toFixed(2) + "</td>";}

if (document.getElementById('id_col_Resistances').checked){ // Resist
if (header == false){
    
    creatureTableHeader += "<th>Resistances</th>";}
creatureTable += "<td>" + resistances(current_creature) + "</td>";}

if (document.getElementById('id_col_Resistances').checked){ // Healing
if (header == false){
    
    creatureTableHeader += "<th>Resistances</th>";}
creatureTable += "<td>" + resistances(current_creature) + "</td>";}


creatureTable += "</tr>";

header = true;
}); // end of for each creature

creatureTable = "<h2>Table: Creature data</h2><table><tr>" + creatureTableHeader + "</tr>" + creatureTable + "</table>";


document.getElementById('creature_table').innerHTML = creatureTable;

} // end of print table


const amazon = {name: "Amazon", Experience: 60, SummonCost: 390, FleeThreshold: 10, Attack: 16, Defence: 11, Armor: 11, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, DistanceFighting: true, HitPoints: 110, GoStrength: 46, FistFighting: 24, }; const ancient_scarab = {name: "Ancient Scarab", Experience: 720, SummonCost: 0, FleeThreshold: 0, Attack: 50, Defence: 33, Armor: 36, Poison: 100, LoseTarget: 10, Strategy: "(70, 20, 0, 10)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 1000, GoStrength: 69, FistFighting: 80, Haste_spell: "Self haste spell, 80-90% strength for 9s, chance 13.", Paralyze_spell: "Ranged paralyze spell, 80-100% strength for 25s, chance 8. Area paralyze spell, 60-100% strength for 20s, fireball radius on self, chance 4.",}; const badger = {name: "Badger", Experience: 5, SummonCost: 200, FleeThreshold: 10, Attack: 10, Defence: 3, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 23, GoStrength: 30, FistFighting: 17, }; const banshee = {name: "Banshee", Experience: 900, SummonCost: 0, FleeThreshold: 500, Attack: 30, Defence: 65, Armor: 25, Poison: 65, LoseTarget: 3, Strategy: "(80, 10, 10, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 1000, GoStrength: 70, FistFighting: 45, Paralyze_spell: "Ranged paralyze spell, 60-120% strength for 20s, chance 10.",}; const bear = {name: "Bear", Experience: 23, SummonCost: 300, FleeThreshold: 15, Attack: 17, Defence: 6, Armor: 6, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", Unpushable: true, HitPoints: 80, GoStrength: 38, FistFighting: 15, }; const behemoth = {name: "Behemoth", Experience: 2500, SummonCost: 0, FleeThreshold: 0, Attack: 75, Defence: 65, Armor: 50, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,NoParalyze: true, HitPoints: 4000, GoStrength: 130, FistFighting: 110, Haste_spell: "Self haste spell, 40-50% strength for 8s, chance 15.", }; const beholder = {name: "Beholder", Experience: 170, SummonCost: 0, FleeThreshold: 0, Attack: 12, Defence: 20, Armor: 5, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, HitPoints: 260, GoStrength: 35, FistFighting: 35, }; const black_knight = {name: "Black Knight", Experience: 1600, SummonCost: 0, FleeThreshold: 0, Attack: 60, Defence: 60, Armor: 42, Poison: 0, LoseTarget: 3, Strategy: "(80, 10, 10, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,NoParalyze: true, HitPoints: 1800, GoStrength: 155, FistFighting: 88, }; const black_sheep = {name: "Black Sheep", Experience: 0, SummonCost: 250, FleeThreshold: 20, Attack: 0, Defence: 2, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 20, GoStrength: 18, FistFighting: 0, }; const blue_djinn = {name: "Blue Djinn", Experience: 190, SummonCost: 0, FleeThreshold: 0, Attack: 30, Defence: 30, Armor: 20, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 330, GoStrength: 70, FistFighting: 50, }; const bonebeast = {name: "Bonebeast", Experience: 580, SummonCost: 0, FleeThreshold: 0, Attack: 47, Defence: 45, Armor: 40, Poison: 110, LoseTarget: 20, Strategy: "(100, 0, 0, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 515, GoStrength: 69, FistFighting: 75, }; const bug = {name: "Bug", Experience: 18, SummonCost: 250, FleeThreshold: 0, Attack: 9, Defence: 3, Armor: 2, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 29, GoStrength: 40, FistFighting: 23, }; const cave_rat = {name: "Cave Rat", Experience: 10, SummonCost: 250, FleeThreshold: 3, Attack: 8, Defence: 4, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 30, GoStrength: 35, FistFighting: 18, }; const cobra = {name: "Cobra", Experience: 30, SummonCost: 275, FleeThreshold: 0, Attack: 15, Defence: 6, Armor: 1, Poison: 100, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", NoPoison: true, HitPoints: 65, GoStrength: 20, FistFighting: 23, }; const crypt_shambler = {name: "Crypt Shambler", Experience: 195, SummonCost: 580, FleeThreshold: 0, Attack: 39, Defence: 25, Armor: 30, Poison: 0, LoseTarget: 4, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true, Unpushable: true, NoSummon: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 330, GoStrength: 30, FistFighting: 60, }; const cyclops = {name: "Cyclops", Experience: 150, SummonCost: 490, FleeThreshold: 0, Attack: 30, Defence: 24, Armor: 17, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true, Unpushable: true, HitPoints: 260, GoStrength: 55, FistFighting: 50, }; const deer = {name: "Deer", Experience: 0, SummonCost: 260, FleeThreshold: 25, Attack: 2, Defence: 2, Armor: 2, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 25, GoStrength: 58, FistFighting: 10, }; const demon = {name: "Demon", Experience: 6000, SummonCost: 0, FleeThreshold: 0, Attack: 80, Defence: 65, Armor: 40, Poison: 0, LoseTarget: 10, Strategy: "(70, 10, 10, 10)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 8200, GoStrength: 80, FistFighting: 120, }; const demon_skeleton = {name: "Demon Skeleton", Experience: 240, SummonCost: 620, FleeThreshold: 0, Attack: 45, Defence: 35, Armor: 25, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true, Unpushable: true, NoBurning: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 400, GoStrength: 50, FistFighting: 70, }; const dog = {name: "Dog", Experience: 0, SummonCost: 220, FleeThreshold: 8, Attack: 0, Defence: 2, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 20, GoStrength: 22, FistFighting: 0, }; const dragon = {name: "Dragon", Experience: 700, SummonCost: 0, FleeThreshold: 300, Attack: 42, Defence: 38, Armor: 25, Poison: 0, LoseTarget: 5, Strategy: "(70, 10, 10, 10)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoConvince: true, NoBurning: true, NoPoison: true, NoParalyze: true, HitPoints: 1000, GoStrength: 45, FistFighting: 55, }; const dragon_lord = {name: "Dragon Lord", Experience: 2100, SummonCost: 0, FleeThreshold: 300, Attack: 55, Defence: 48, Armor: 32, Poison: 0, LoseTarget: 5, Strategy: "(70, 10, 10, 10)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoConvince: true, NoBurning: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 1900, GoStrength: 60, FistFighting: 65, }; const dwarf = {name: "Dwarf", Experience: 45, SummonCost: 320, FleeThreshold: 0, Attack: 14, Defence: 14, Armor: 8, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", NoPoison: true, HitPoints: 90, GoStrength: 45, FistFighting: 23, }; const dwarf_geomancer = {name: "Dwarf Geomancer", Experience: 245, SummonCost: 0, FleeThreshold: 150, Attack: 30, Defence: 35, Armor: 15, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoBurning: true, NoPoison: true, HitPoints: 380, GoStrength: 60, FistFighting: 50, }; const dwarf_guard = {name: "Dwarf Guard", Experience: 165, SummonCost: 650, FleeThreshold: 0, Attack: 39, Defence: 37, Armor: 15, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 20, 10)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoPoison: true, HitPoints: 245, GoStrength: 63, FistFighting: 55, }; const dwarf_soldier = {name: "Dwarf Soldier", Experience: 70, SummonCost: 360, FleeThreshold: 0, Attack: 21, Defence: 20, Armor: 9, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, NoPoison: true, HitPoints: 135, GoStrength: 48, FistFighting: 42, }; const efreet = {name: "Efreet", Experience: 300, SummonCost: 0, FleeThreshold: 0, Attack: 35, Defence: 35, Armor: 24, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 550, GoStrength: 77, FistFighting: 55, Paralyze_spell: "Ranged paralyze spell, 50-100% strength for 15s, chance 8.",}; const elder_beholder = {name: "Elder Beholder", Experience: 280, SummonCost: 0, FleeThreshold: 0, Attack: 16, Defence: 26, Armor: 13, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, HitPoints: 500, GoStrength: 45, FistFighting: 45, Paralyze_spell: "Ranged paralyze spell, 70-110% strength for 20s, chance 10.",}; const elf = {name: "Elf", Experience: 42, SummonCost: 320, FleeThreshold: 0, Attack: 12, Defence: 12, Armor: 6, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", SeeInvisible: true, HitPoints: 100, GoStrength: 55, FistFighting: 20, }; const elf_arcanist = {name: "Elf Arcanist", Experience: 175, SummonCost: 0, FleeThreshold: 0, Attack: 20, Defence: 20, Armor: 15, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,HitPoints: 220, GoStrength: 70, FistFighting: 25, }; const elf_scout = {name: "Elf Scout", Experience: 75, SummonCost: 360, FleeThreshold: 0, Attack: 18, Defence: 18, Armor: 7, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, HitPoints: 160, GoStrength: 70, FistFighting: 25, }; const fire_devil = {name: "Fire Devil", Experience: 110, SummonCost: 530, FleeThreshold: 0, Attack: 22, Defence: 15, Armor: 13, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, DistanceFighting: true, NoBurning: true, HitPoints: 200, GoStrength: 50, FistFighting: 30, }; const fire_elemental = {name: "Fire Elemental", Experience: 220, SummonCost: 690, FleeThreshold: 0, Attack: 38, Defence: 20, Armor: 18, Poison: 0, LoseTarget: 10, Strategy: "(80, 0, 0, 20)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoBurning: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 280, GoStrength: 55, FistFighting: 38, }; const frost_troll = {name: "Frost Troll", Experience: 23, SummonCost: 300, FleeThreshold: 10, Attack: 11, Defence: 9, Armor: 7, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 55, GoStrength: 30, FistFighting: 19, }; const gargoyle = {name: "Gargoyle", Experience: 150, SummonCost: 0, FleeThreshold: 30, Attack: 24, Defence: 30, Armor: 26, Poison: 0, LoseTarget: 5, Strategy: "(70, 0, 30, 0)", KickBoxes: true, KickCreatures: true, Unpushable: true, NoSummon: true, NoConvince: true, NoBurning: true, NoPoison: true, NoLifeDrain: true, HitPoints: 250, GoStrength: 60, FistFighting: 45, }; const gazer = {name: "Gazer", Experience: 90, SummonCost: 0, FleeThreshold: 0, Attack: 9, Defence: 15, Armor: 4, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, HitPoints: 120, GoStrength: 30, FistFighting: 25, Haste_spell: "Self haste spell, 98-100% strength for 4s, chance 11.", }; const ghost = {name: "Ghost", Experience: 120, SummonCost: 0, FleeThreshold: 0, Attack: 28, Defence: 20, Armor: 10, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, NoSummon: true, NoConvince: true, NoPoison: true, NoHit: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 150, GoStrength: 40, FistFighting: 45, }; const ghoul = {name: "Ghoul", Experience: 85, SummonCost: 450, FleeThreshold: 0, Attack: 26, Defence: 17, Armor: 8, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 100, GoStrength: 32, FistFighting: 37, }; const giant_spider = {name: "Giant Spider", Experience: 900, SummonCost: 0, FleeThreshold: 0, Attack: 65, Defence: 40, Armor: 30, Poison: 150, LoseTarget: 10, Strategy: "(70, 20, 0, 10)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoLifeDrain: true, HitPoints: 1300, GoStrength: 80, FistFighting: 80, Haste_spell: "Self haste spell, 60-70% strength for 20s, chance 18.", }; const goblin = {name: "Goblin", Experience: 25, SummonCost: 290, FleeThreshold: 15, Attack: 10, Defence: 8, Armor: 6, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 50, GoStrength: 20, FistFighting: 15, }; const green_djinn = {name: "Green Djinn", Experience: 190, SummonCost: 0, FleeThreshold: 0, Attack: 30, Defence: 30, Armor: 20, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 330, GoStrength: 70, FistFighting: 50, }; const hero = {name: "Hero", Experience: 1200, SummonCost: 0, FleeThreshold: 0, Attack: 58, Defence: 50, Armor: 35, Poison: 0, LoseTarget: 5, Strategy: "(80, 10, 10, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,NoParalyze: true, HitPoints: 1400, GoStrength: 100, FistFighting: 80, }; const hunter = {name: "Hunter", Experience: 150, SummonCost: 530, FleeThreshold: 10, Attack: 13, Defence: 10, Armor: 8, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, DistanceFighting: true, NoSummon: true, HitPoints: 150, GoStrength: 65, FistFighting: 18, }; const hyaena = {name: "Hyaena", Experience: 20, SummonCost: 275, FleeThreshold: 30, Attack: 11, Defence: 5, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 60, GoStrength: 58, FistFighting: 18, }; const larva = {name: "Larva", Experience: 44, SummonCost: 355, FleeThreshold: 0, Attack: 20, Defence: 11, Armor: 5, Poison: 15, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", NoPoison: true, NoParalyze: true, HitPoints: 70, GoStrength: 22, FistFighting: 30, }; const lich = {name: "Lich", Experience: 900, SummonCost: 0, FleeThreshold: 0, Attack: 40, Defence: 60, Armor: 50, Poison: 400, LoseTarget: 3, Strategy: "(80, 10, 10, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 880, GoStrength: 65, FistFighting: 40, Paralyze_spell: "Ranged paralyze spell, 75-115% strength for 30s, chance 7.",}; const lion = {name: "Lion", Experience: 30, SummonCost: 320, FleeThreshold: 10, Attack: 20, Defence: 13, Armor: 6, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", Unpushable: true, HitPoints: 80, GoStrength: 55, FistFighting: 32, }; const marid = {name: "Marid", Experience: 300, SummonCost: 0, FleeThreshold: 0, Attack: 35, Defence: 35, Armor: 24, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,NoLifeDrain: true, NoParalyze: true, HitPoints: 550, GoStrength: 77, FistFighting: 55, Paralyze_spell: "Ranged paralyze spell, 50-100% strength for 15s, chance 8.",}; const minotaur = {name: "Minotaur", Experience: 50, SummonCost: 330, FleeThreshold: 0, Attack: 15, Defence: 11, Armor: 11, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 100, GoStrength: 44, FistFighting: 25, }; const minotaur_archer = {name: "Minotaur Archer", Experience: 65, SummonCost: 390, FleeThreshold: 10, Attack: 15, Defence: 8, Armor: 7, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", Unpushable: true, DistanceFighting: true, HitPoints: 100, GoStrength: 40, FistFighting: 20, }; const minotaur_guard = {name: "Minotaur Guard", Experience: 160, SummonCost: 550, FleeThreshold: 0, Attack: 35, Defence: 32, Armor: 15, Poison: 0, LoseTarget: 5, Strategy: "(70, 10, 20, 0)", KickBoxes: true, KickCreatures: true, Unpushable: true, HitPoints: 185, GoStrength: 55, FistFighting: 50, }; const minotaur_mage = {name: "Minotaur Mage", Experience: 150, SummonCost: 0, FleeThreshold: 0, Attack: 15, Defence: 40, Armor: 18, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoEnergy: true,HitPoints: 155, GoStrength: 45, FistFighting: 18, }; const monk = {name: "Monk", Experience: 200, SummonCost: 600, FleeThreshold: 0, Attack: 42, Defence: 52, Armor: 25, Poison: 0, LoseTarget: 5, Strategy: "(70, 20, 10, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoConvince: true, HitPoints: 240, GoStrength: 80, FistFighting: 55, Haste_spell: "Self haste spell, 50-60% strength for 2s, chance 10.", }; const mummy = {name: "Mummy", Experience: 150, SummonCost: 510, FleeThreshold: 0, Attack: 32, Defence: 23, Armor: 14, Poison: 65, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 240, GoStrength: 35, FistFighting: 50, Paralyze_spell: "Ranged paralyze spell, 40-120% strength for 10s, chance 13.",}; const necromancer = {name: "Necromancer", Experience: 580, SummonCost: 0, FleeThreshold: 0, Attack: 40, Defence: 40, Armor: 50, Poison: 90, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, HitPoints: 580, GoStrength: 54, FistFighting: 30, }; const orc = {name: "Orc", Experience: 25, SummonCost: 300, FleeThreshold: 15, Attack: 13, Defence: 8, Armor: 4, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 70, GoStrength: 35, FistFighting: 22, }; const orc_berserker = {name: "Orc Berserker", Experience: 195, SummonCost: 590, FleeThreshold: 0, Attack: 65, Defence: 12, Armor: 12, Poison: 0, LoseTarget: 10, Strategy: "(60, 40, 0, 0)", KickBoxes: true, KickCreatures: true, Unpushable: true, NoPoison: true, HitPoints: 210, GoStrength: 85, FistFighting: 50, Haste_spell: "Self haste spell, 45-55% strength for 6s, chance 12.", }; const orc_leader = {name: "Orc Leader", Experience: 270, SummonCost: 640, FleeThreshold: 0, Attack: 48, Defence: 45, Armor: 20, Poison: 0, LoseTarget: 5, Strategy: "(70, 15, 15, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoBurning: true, HitPoints: 450, GoStrength: 75, FistFighting: 52, }; const orc_rider = {name: "Orc Rider", Experience: 110, SummonCost: 490, FleeThreshold: 0, Attack: 41, Defence: 20, Armor: 9, Poison: 0, LoseTarget: 5, Strategy: "(70, 30, 0, 0)", KickBoxes: true, KickCreatures: true, Unpushable: true, NoSummon: true, NoIllusion: true, HitPoints: 180, GoStrength: 90, FistFighting: 48, Haste_spell: "Self haste spell, 40-50% strength for 6s, chance 15.", }; const orc_shaman = {name: "Orc Shaman", Experience: 110, SummonCost: 0, FleeThreshold: 15, Attack: 13, Defence: 10, Armor: 8, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoPoison: true, NoEnergy: true,HitPoints: 115, GoStrength: 30, FistFighting: 20, }; const orc_spearman = {name: "Orc Spearman", Experience: 38, SummonCost: 310, FleeThreshold: 10, Attack: 17, Defence: 12, Armor: 6, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", DistanceFighting: true, HitPoints: 105, GoStrength: 48, FistFighting: 19, }; const orc_warlord = {name: "Orc Warlord", Experience: 670, SummonCost: 0, FleeThreshold: 0, Attack: 68, Defence: 55, Armor: 28, Poison: 0, LoseTarget: 5, Strategy: "(70, 15, 15, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, HitPoints: 950, GoStrength: 77, FistFighting: 72, }; const orc_warrior = {name: "Orc Warrior", Experience: 50, SummonCost: 360, FleeThreshold: 10, Attack: 19, Defence: 14, Armor: 8, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 125, GoStrength: 55, FistFighting: 42, }; const pig = {name: "Pig", Experience: 0, SummonCost: 255, FleeThreshold: 25, Attack: 0, Defence: 2, Armor: 2, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 25, GoStrength: 17, FistFighting: 10, }; const poison_spider = {name: "Poison Spider", Experience: 22, SummonCost: 270, FleeThreshold: 6, Attack: 12, Defence: 6, Armor: 2, Poison: 30, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", NoPoison: true, HitPoints: 26, GoStrength: 40, FistFighting: 25, }; const polar_bear = {name: "Polar Bear", Experience: 28, SummonCost: 315, FleeThreshold: 5, Attack: 18, Defence: 10, Armor: 7, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", Unpushable: true, HitPoints: 85, GoStrength: 38, FistFighting: 19, }; const priestess = {name: "Priestess", Experience: 420, SummonCost: 0, FleeThreshold: 0, Attack: 20, Defence: 50, Armor: 30, Poison: 250, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,HitPoints: 390, GoStrength: 45, FistFighting: 25, }; const rabbit = {name: "Rabbit", Experience: 0, SummonCost: 220, FleeThreshold: 15, Attack: 0, Defence: 2, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 15, GoStrength: 50, FistFighting: 0, }; const rat = {name: "Rat", Experience: 5, SummonCost: 200, FleeThreshold: 5, Attack: 7, Defence: 3, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 20, GoStrength: 27, FistFighting: 15, }; const rotworm = {name: "Rotworm", Experience: 40, SummonCost: 305, FleeThreshold: 0, Attack: 18, Defence: 11, Armor: 8, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", Unpushable: true, NoSummon: true, NoIllusion: true, HitPoints: 65, GoStrength: 18, FistFighting: 26, }; const scarab = {name: "Scarab", Experience: 120, SummonCost: 395, FleeThreshold: 80, Attack: 25, Defence: 26, Armor: 21, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, KickCreatures: true, Unpushable: true, NoPoison: true, NoParalyze: true, HitPoints: 320, GoStrength: 40, FistFighting: 42, Haste_spell: "Self haste spell, 40-50% strength for 4s, chance 20.", }; const scorpion = {name: "Scorpion", Experience: 45, SummonCost: 310, FleeThreshold: 5, Attack: 21, Defence: 5, Armor: 14, Poison: 350, LoseTarget: 10, Strategy: "(60, 0, 0, 40)", NoPoison: true, HitPoints: 45, GoStrength: 35, FistFighting: 35, }; const sheep = {name: "Sheep", Experience: 0, SummonCost: 250, FleeThreshold: 20, Attack: 0, Defence: 2, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 20, GoStrength: 18, FistFighting: 0, }; const skeleton = {name: "Skeleton", Experience: 35, SummonCost: 300, FleeThreshold: 0, Attack: 14, Defence: 9, Armor: 2, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", NoPoison: true, NoLifeDrain: true, HitPoints: 50, GoStrength: 37, FistFighting: 18, }; const skunk = {name: "Skunk", Experience: 3, SummonCost: 200, FleeThreshold: 8, Attack: 4, Defence: 5, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 20, GoStrength: 28, FistFighting: 15, }; const slime = {name: "Slime", Experience: 160, SummonCost: 0, FleeThreshold: 0, Attack: 42, Defence: 10, Armor: 3, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoPoison: true, HitPoints: 150, GoStrength: 20, FistFighting: 22, }; const snake = {name: "Snake", Experience: 10, SummonCost: 205, FleeThreshold: 0, Attack: 5, Defence: 1, Armor: 0, Poison: 20, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", NoPoison: true, HitPoints: 15, GoStrength: 20, FistFighting: 11, }; const spider = {name: "Spider", Experience: 12, SummonCost: 210, FleeThreshold: 6, Attack: 7, Defence: 2, Armor: 2, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 20, GoStrength: 36, FistFighting: 19, }; const stalker = {name: "Stalker", Experience: 90, SummonCost: 0, FleeThreshold: 0, Attack: 30, Defence: 20, Armor: 14, Poison: 0, LoseTarget: 10, Strategy: "(60, 0, 0, 40)", KickBoxes: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoLifeDrain: true, HitPoints: 120, GoStrength: 90, FistFighting: 40, }; const stone_golem = {name: "Stone Golem", Experience: 160, SummonCost: 590, FleeThreshold: 0, Attack: 38, Defence: 25, Armor: 30, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, KickCreatures: true, Unpushable: true, NoBurning: true, NoPoison: true, NoParalyze: true, HitPoints: 270, GoStrength: 50, FistFighting: 52, }; const swamp_troll = {name: "Swamp Troll", Experience: 25, SummonCost: 320, FleeThreshold: 15, Attack: 12, Defence: 10, Armor: 6, Poison: 10, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 55, GoStrength: 24, FistFighting: 20, }; const troll = {name: "Troll", Experience: 20, SummonCost: 290, FleeThreshold: 15, Attack: 10, Defence: 8, Armor: 6, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 50, GoStrength: 23, FistFighting: 15, }; const valkyrie = {name: "Valkyrie", Experience: 85, SummonCost: 450, FleeThreshold: 10, Attack: 20, Defence: 14, Armor: 12, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, HitPoints: 190, GoStrength: 48, FistFighting: 35, }; const vampire = {name: "Vampire", Experience: 290, SummonCost: 0, FleeThreshold: 0, Attack: 42, Defence: 38, Armor: 27, Poison: 0, LoseTarget: 5, Strategy: "(70, 30, 0, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, NoSummon: true, NoConvince: true, NoPoison: true, NoLifeDrain: true, NoParalyze: true, HitPoints: 450, GoStrength: 70, FistFighting: 65, Paralyze_spell: "Ranged paralyze spell, 50-90% strength for 30s, chance 9.",}; const warlock = {name: "Warlock", Experience: 4000, SummonCost: 0, FleeThreshold: 1000, Attack: 40, Defence: 50, Armor: 32, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, KickCreatures: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoIllusion: true, NoConvince: true, NoBurning: true, NoPoison: true, NoEnergy: true,NoParalyze: true, HitPoints: 3200, GoStrength: 75, FistFighting: 50, Paralyze_spell: "Ranged paralyze spell, 60-100% strength for 40s, chance 9.",}; const war_wolf = {name: "War Wolf", Experience: 55, SummonCost: 420, FleeThreshold: 0, Attack: 24, Defence: 16, Armor: 8, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", KickBoxes: true, Unpushable: true, NoSummon: true, HitPoints: 140, GoStrength: 92, FistFighting: 39, }; const wasp = {name: "Wasp", Experience: 24, SummonCost: 280, FleeThreshold: 0, Attack: 12, Defence: 8, Armor: 4, Poison: 25, LoseTarget: 10, Strategy: "(60, 0, 0, 40)", NoPoison: true, HitPoints: 35, GoStrength: 120, FistFighting: 23, }; const wild_warrior = {name: "Wild Warrior", Experience: 60, SummonCost: 420, FleeThreshold: 10, Attack: 16, Defence: 18, Armor: 9, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 135, GoStrength: 55, FistFighting: 46, Haste_spell: "Self haste spell, 20-60% strength for 2s, chance 17.", }; const winter_wolf = {name: "Winter Wolf", Experience: 20, SummonCost: 260, FleeThreshold: 0, Attack: 13, Defence: 6, Armor: 2, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 30, GoStrength: 45, FistFighting: 21, }; const witch = {name: "Witch", Experience: 120, SummonCost: 0, FleeThreshold: 30, Attack: 18, Defence: 12, Armor: 8, Poison: 0, LoseTarget: 50, Strategy: "(100, 0, 0, 0)", KickBoxes: true, SeeInvisible: true, Unpushable: true, DistanceFighting: true, NoSummon: true, NoConvince: true, NoPoison: true, NoEnergy: true,HitPoints: 300, GoStrength: 62, FistFighting: 18, }; const wolf = {name: "Wolf", Experience: 18, SummonCost: 255, FleeThreshold: 8, Attack: 12, Defence: 4, Armor: 1, Poison: 0, LoseTarget: 0, Strategy: "(100, 0, 0, 0)", HitPoints: 25, GoStrength: 42, FistFighting: 19, };

banshee.heal_base = 150; banshee.heal_var = 37; banshee.heal_frequency = 4;
bonebeast.heal_base = 45; bonebeast.heal_var = 15; bonebeast.heal_frequency = 9;
demon.heal_base = 120; demon.heal_var = 30; demon.heal_frequency = 7;
dragon.heal_base = 45; dragon.heal_var = 11; dragon.heal_frequency = 8;
dragon_lord.heal_base = 75; dragon_lord.heal_var = 18; dragon_lord.heal_frequency = 4;
dwarf_geomancer.heal_base = 100; dwarf_geomancer.heal_var = 25; dwarf_geomancer.heal_frequency = 2;
efreet.heal_base = 65; efreet.heal_var = 15; efreet.heal_frequency = 7;
elf_arcanist.heal_base = 55; elf_arcanist.heal_var = 13; elf_arcanist.heal_frequency = 5;
gargoyle.heal_base = 10; gargoyle.heal_var = 5; gargoyle.heal_frequency = 10;
ghoul.heal_base = 12; ghoul.heal_var = 3; ghoul.heal_frequency = 8;
hero.heal_base = 225; hero.heal_var = 25; hero.heal_frequency = 10;
lich.heal_base = 100; lich.heal_var = 50; lich.heal_frequency = 6;
marid.heal_base = 65; marid.heal_var = 15; marid.heal_frequency = 7;
monk.heal_base = 40; monk.heal_var = 10; monk.heal_frequency = 6;
necromancer.heal_base = 55; necromancer.heal_var = 13; necromancer.heal_frequency = 4;
orc_shaman.heal_base = 35; orc_shaman.heal_var = 8; orc_shaman.heal_frequency = 4;
priestess.heal_base = 45; priestess.heal_var = 11; priestess.heal_frequency = 7;
warlock.heal_base = 80; warlock.heal_var = 20; warlock.heal_frequency = 4;



const creature = [amazon, ancient_scarab, badger, banshee, bear, behemoth, beholder, black_knight, black_sheep, blue_djinn, bonebeast, bug, cave_rat, cobra, crypt_shambler, cyclops, deer, demon, demon_skeleton, dog, dragon, dragon_lord, dwarf, dwarf_geomancer, dwarf_guard, dwarf_soldier, efreet, elder_beholder, elf, elf_arcanist, elf_scout, fire_devil, fire_elemental, frost_troll, gargoyle, gazer, ghost, ghoul, giant_spider, goblin, green_djinn, hero, hunter, hyaena, larva, lich, lion, marid, minotaur, minotaur_archer, minotaur_guard, minotaur_mage, monk, mummy, necromancer, orc, orc_berserker, orc_leader, orc_rider, orc_shaman, orc_spearman, orc_warlord, orc_warrior, pig, poison_spider, polar_bear, priestess, rabbit, rat, rotworm, scarab, scorpion, sheep, skeleton, skunk, slime, snake, spider, stalker, stone_golem, swamp_troll, troll, valkyrie, vampire, warlock, war_wolf, wasp, wild_warrior, winter_wolf, witch, wolf];

/*sortCreatures(creature, "HitPoints");*/

updateTable(creature);