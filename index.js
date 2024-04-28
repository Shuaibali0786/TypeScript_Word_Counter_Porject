#! /usr/bin/env node
// Importing inquirer and chalk  packages
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourflly welcome
console.log(chalk.bold.cyanBright("\n \t\t Welcome to Shuaib - World counter"));
console.log("=".repeat(60));
// Prompt the user to enter a Sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence to count the world:",
    }
]);
// Trimming the sentence and splistting it into world based on "spaces"
let Worlds = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Worlds:"));
console.log(Worlds);
console.log(chalk.bold(`\n - world count: ${chalk.bold.redBright(Worlds.length)}`));
console.log("=".repeat(60));
