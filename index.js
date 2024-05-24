import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Enter first nunmber", type: "number", name: "FirstNumber" },
    { message: "Enter Second nunmber", type: "number", name: "SecondNumber" },
    {
        message: "Select one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Multipliation", "Division", "Sabtraction"],
    }
]);
// coditions
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("invalid input");
}
