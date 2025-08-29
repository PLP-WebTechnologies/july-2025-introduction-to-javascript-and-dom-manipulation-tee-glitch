// -------------------------
// Part 1: Variables & Conditionals
// -------------------------

// Realistic user profile
let userAge = 22;
let userMembership = "premium"; // can be 'basic', 'premium', 'vip'

// Check access level
if (userAge >= 18 && userMembership === "premium") {
    document.getElementById("status-output").textContent = "Access granted: Premium member.";
} else if (userAge >= 18) {
    document.getElementById("status-output").textContent = "Access granted: Basic member.";
} else {
    document.getElementById("status-output").textContent = "Access denied: Underage.";
}

// -------------------------
// Part 2: Custom Functions
// -------------------------

// Function to calculate total price in a shopping cart
function calculateTotal(prices) {
    return prices.reduce((total, price) => total + price, 0);
}

// Function to greet user based on membership
function greetMember(name, membership) {
    return `Welcome ${name}, your membership level is ${membership}.`;
}

// Using the functions
let prices = [25.5, 10.0, 7.25]; // realistic cart items
let totalPrice = calculateTotal(prices);
let greetingMessage = greetMember("Triza", "Premium");

document.getElementById("cart-output").textContent =
    `Cart total: $${totalPrice.toFixed(2)} | ${greetingMessage}`;

// -------------------------
// Part 3: Loops
// -------------------------

// Example 1: for loop - list daily tasks
let dailyTasks = ["Check emails", "Team meeting", "Code review", "Submit report"];
let tasksOutput = document.getElementById("tasks-output");

for (let i = 0; i < dailyTasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = `Task ${i+1}: ${dailyTasks[i]}`;
    tasksOutput.appendChild(li);
}

// Example 2: while loop - countdown notifications
let notifications = 3;
while (notifications > 0) {
    let li = document.createElement("li");
    li.textContent = `You have ${notifications} new notifications`;
    tasksOutput.appendChild(li);
    notifications--;
}

// -------------------------
// Part 4: DOM Interactions
// -------------------------

// 1. Update status text dynamically
document.getElementById("update-status-btn").addEventListener("click", function() {
    document.getElementById("status-text").textContent = "Status updated: All systems go!";
});

// 2. Add a task to the task list
document.getElementById("add-task-btn").addEventListener("click", function() {
    let newTask = document.createElement("li");
    newTask.textContent = `New task added at ${new Date().toLocaleTimeString()}`;
    document.getElementById("task-list").appendChild(newTask);
});

// 3. Highlight the status text
document.getElementById("highlight-btn").addEventListener("click", function() {
    document.getElementById("status-text").classList.toggle("highlight");
});
