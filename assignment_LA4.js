// Simple Queueing System using an array as a queue

let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let queue = [];

function addCustomer() {
    if (queue.length < customers.length) {
        let name = prompt("Enter customer name:");
        let index = queue.push(name) -1; //push returns new length, subtract 1 for index
        alert(`Customer ${name} added. Your number is ${index + 1}`);
    } else {
        alert("Queue is full!");
    }
    displayQueue();
}

function serveCustomer() {
    let number = parseInt(prompt("Enter number to be served:"));
    if (number > 0 && number <= queue.length) {
        let servedCustomer = queue.splice(number - 1, 1); //remove from queue
        alert(`Serving customer: ${servedCustomer}`);
    } else {
        alert("Invalid number.");
    }
    displayQueue();
}


function displayQueue() {
    console.log("Current Queue:");
    for (let i = 0; i < queue.length; i++) {
        console.log(`${i + 1}. ${queue[i]}`);
    }
}


let choice;
do {
    choice = prompt("Choose an action:\n1. Add Customer\n2. Serve Customer\n3. Exit");
    switch (choice) {
        case "1":
            addCustomer();
            break;
        case "2":
            serveCustomer();
            break;
        case "3":
            alert("Exiting...");
            break;
        default:
            alert("Invalid choice.");
    }
} while (choice !== "3");
