import Deur from "./deur.js";
import readline from "readline";

const frontDoor = new Deur("Voordeur"); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "What do you want to do? "
});

// Welcome message
console.log("Welcome! You can interact with the door using:");
console.log(" - key left        (to unlock the door)");
console.log(" - key right       (to lock the door)");
console.log(" - open door       (to open the door)");
console.log(" - walk through door (to go through the door)");
console.log(" - quit            (to exit the program)\n");

rl.prompt();

rl.on("line", (input) => {
  const command = input.toLowerCase();
  let output;

  if (command === "quit") {
    rl.close();
    return;
  }

  if (command.startsWith("key left")) {
    output = frontDoor.sleutelGebruiken("links");
  } else if (command.startsWith("key right")) {
    output = frontDoor.sleutelGebruiken("rechts");
  } else if (command === "open door") {
    output = frontDoor.deurOpenen();
  } else if (command === "walk through door") {
    output = frontDoor.doorDeurLopen();
  } else {
    // funny fallback
    output = "You flail at the door like a confused penguin!";
  }

  console.log(output);
  rl.prompt();
});

rl.on("close", () => {
  console.log("\nProgram closed. Bye bye!");
  process.exit(0);
});
