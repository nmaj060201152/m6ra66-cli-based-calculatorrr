#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function main() {
    while (true) {
        console.log(chalk.red.bold("Choose an action"));
        let choice = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                message: "",
                choices: [
                    "Use Calculator",
                    "Exit",
                ],
            },
        ]);
        switch (choice.action) {
            case "Use Calculator":
                await calculator();
                break;
            case "Exit":
                return;
        }
    }
}
async function calculator() {
    const answer = await inquirer.prompt([
        {
            message: "Enter 1st number",
            type: "number",
            name: "firstNumber",
        },
        {
            message: "Enter 2nd number",
            type: "number",
            name: "secondNumber",
        },
        {
            message: "Select one of these operators to perform operations",
            type: "list",
            name: "operators",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    switch (answer.operators) {
        case "Addition":
            console.log(chalk.yellowBright(`${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}\n\n\n`));
            break;
        case "Subtraction":
            console.log(chalk.yellowBright(`${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}\n\n\n`));
            break;
        case "Multiplication":
            console.log(chalk.yellowBright(`${answer.firstNumber} X ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}\n\n\n`));
            break;
        case "Division":
            console.log(chalk.yellowBright(`${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}\n\n\n`));
            break;
        default:
            console.log("Please select a valid operator...\n\n\n");
    }
    // if (answer.operators === "Addition") {
    //   console.log(answer.firstNumber + answer.secondNumber);
    // } else if (answer.operators === "Subtraction") {
    //   console.log(answer.firstNumber - answer.secondNumber);
    // } else if (answer.operators === "Multiplication") {
    //   console.log(answer.firstNumber * answer.secondNumber);
    // } else if (answer.operators === "Division") {
    //   console.log(answer.firstNumber / answer.secondNumber);
    // } else {
    //   console.log("Please select a valid operator...");
    // }
}
main();
