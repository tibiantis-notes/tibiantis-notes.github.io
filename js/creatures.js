const cat = { name: "Cat", weight: 5 };
const dog = { name: "Dog", weight: 10 };
const sheep = { name: "Sheep", weight: 50 };
const cow = { name: "Cow", weight: 600 };
const frog = { name: "Frog", weight: 0.5 };

const animals = [cat, dog, sheep, cow, frog];

animals.forEach(animal => {
  //console.log(`${animal.name}: ${animal.weight} kg`);
  document.getElementById('creature_log').innerHTML += "The + + animal.name + " weighs " + animal.weight + "kg<br>";
});