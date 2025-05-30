// Simple Queueing System using a hash table

// Simple hash function (replace with a more robust one if needed)
function hash(name) {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return sum % 5; // Modulo 5 for 5 customers
}

let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let customerTable = {}; // Hash table to store customers

function addCustomer() {
    let name = prompt("Enter customer name:");
    let index = hash(name);
    if (!customerTable[index]) {
        customerTable[index] = [];
    }
    customerTable[index].push(name);
    alert(`Customer ${name} added. Your number is ${customerTable[index].length}`);
    displayTable();
}

function serveCustomer() {
    let number = parseInt(prompt("Enter number to be served:"));
    let index = -1;
    for (let i = 0; i < 5; i++) {
        if (customerTable[i] && customerTable[i].length >= number) {
            index = i;
            break;
        }
        number -= (customerTable[i] ? customerTable[i].length : 0); // Adjust number for next index
    }
    if (index !== -1) {
        let servedCustomer = customerTable[index].shift();
        alert(`Serving customer: ${servedCustomer}`);
    } else {
        alert("Invalid number.");
    }
    displayTable();
}

function displayTable() {
    console.log("Customer Hash Table:");
    for (let i = 0; i < 5; i++) {
        if (customerTable[i]) {
            console.log(`Index ${i}: ${customerTable[i].join(", ")}`);
        }
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
