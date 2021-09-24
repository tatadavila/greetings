const colors = require("colors/safe");
const commandLineArgs = require("command-line-args");

const params = [{ name: "name", alias: "n", type: String }];

//const name = "Tatiana";
// const year = new Date().getFullYear();

//console.log(`Hey ${name}, we are in ${year}`);

// const args = process.argv.slice(2);
// const [name = "Friend"] = args;

const options = commandLineArgs(params);
const name = options.name || "Friend";
const hour = new Date().getHours();

//Ask for hours range
if (hour >= 6 && hour < 12) {
  console.log(colors.yellow(`Good morning ${name}`));
} else if (hour >= 12 && hour < 16) {
  console.log(colors.green`Good afternoon ${name}`);
} else if (hour >= 16 && hour < 20) {
  console.log((colors.cyan(`Good evening ${name}`)));
} else {
  console.log(colors.blue(`Good night ${name}`));
}