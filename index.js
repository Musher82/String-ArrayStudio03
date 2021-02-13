let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let cabinet0 = []
cabinet0 = food.split(',').sort();
let cabinet1 = []
cabinet1 = equipment.split(',').sort();
let cabinet2 = []
cabinet2 = pets.split(',').sort();
let cabinet3 = []
cabinet3 = sleepAids.split(',').sort();

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

cargoHold = [cabinet0, cabinet1, cabinet2, cabinet3];
console.log(cargoHold);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.

const input = require ('readline-sync');

let cabinetChoice = input.question("Which cabinet would you like to open? 0, 1, 2, or 3? \t")

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (cabinetChoice == 0) {
  console.log(`Cabinet 0 is food, which includes: ${cargoHold[0]}`);
} else if (cabinetChoice == 1) {
  console.log(`Cabinet 1 is equipment, which includes: ${cargoHold[1]}`);
} else if (cabinetChoice == 2) {
  console.log(`Cabinet 2 is pets, which includes: ${cargoHold[2]}`);
} else if (cabinetChoice == 3) {
  console.log(`Cabinet 3 is Sleep Aids, which includes: ${cargoHold[3]}`);
} else { 
  console.log("\nThat cabinet does not exist.");
}

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let cabinetChoice2 = [] 
cabinetChoice2 = input.question("\nWe will check if a cabinet conatins an item. Choose a cabinet 0-3:\t");
let item = []
item = input.question(`Ok, you chose cabinet ${cabinetChoice2}, now pick an item:\t`);

if (cargoHold[cabinetChoice2].includes(item) == true) {
  console.log(`Cabinet ${cabinetChoice2} DOES contain ${item}`);
} else { 
  console.log(`Cabinet ${cabinetChoice2} does NOT contain ${item}`);
  }

