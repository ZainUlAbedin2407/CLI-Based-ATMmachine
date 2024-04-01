import inquirer from "inquirer";

let myBalance = 10000;

let myPin = 2407;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct Pin code!!!");


let operationAns = await inquirer.prompt([
    {
        name : "operation" ,
        message : "Please select option",
        type : "list",
        choices : ["withdraw" , "checkbalance"]
    }
]);

console.log(`${operationAns}`);

if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name : "amount",
            message : "enter your amount",
            type : "number"
        }
    ]);
    myBalance -= amountAns.amount;

    console.log(`Your remaining Balance is : ${myBalance}`);
} else if (operationAns.operation === "checkbalance") {
    console.log(`Your Balance is : ${myBalance}`)
}
}
else {
    console.log("INCORRECT PIN CODE");
} 