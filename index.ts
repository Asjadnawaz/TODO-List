import inquirer from "inquirer";

let todos = [];
let condition = true;


while(condition) {
let addtodos = await inquirer.prompt ([{
    message: "What do you want to add in your Todos?",
    type: "input",
    name: "todo",
},
{
    message: "Do you want to add more?",
    type: "confirm",
    name: "addmore",
}
])

todos.push(addtodos.todo);
condition = addtodos.addmore;
console.log(todos);
}