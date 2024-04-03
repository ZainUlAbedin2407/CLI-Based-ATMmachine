#! /usr/bin/env node 
import inquirer from "inquirer";

let myBalance = 10000;

let maxAttempts = 3;

let attempts = 0;

let myPin = 2407;

while (attempts < maxAttempts){
    let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "enter your pin",
  type: "number",
});

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin code!!!");

  let operationAns = await inquirer.prompt({
    name: "operation",
    message: "Please select option",
    type: "list",
    choices: ["withdraw", "checkbalance", "FastCash"],
  });

  console.log(`${operationAns}`);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt({
      name: "amount",
      message: "enter your amount",
      type: "number",
    });

    if (amountAns.amount <= myBalance) {
        myBalance -= amountAns.amount;
      console.log(`Your remaining Balance is ${myBalance}`);
      
    } else {
        console.log("Insufficient Balance!");
    }
  } else if (operationAns.operation === "checkbalance") {
    console.log(`Your Balance is : ${myBalance}`);
  } else if (operationAns.operation === "FastCash"){
    let cashAmount = await inquirer.prompt ({
        name: "cash",
        type:  "rawlist",
        message: "Please! Select Your Withdrawal Amount",
        choices: ["1000", "2000", "5000", "10000"]
    });
    myBalance -= cashAmount.cash;
    console.log(`Your remainig balance is: ${myBalance}`);
}
    break;
  }
else {
  console.log("Incorrect PIN code. Please try again.");
  attempts++;
    }
}

if (attempts === maxAttempts) {
    console.log("Maximum attempts reached. Your card is blocked.");
}