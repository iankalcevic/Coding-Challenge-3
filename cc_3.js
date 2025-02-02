//Task 1 - Product price management scenario
let prices = [5,10,20,30,40]: // Declare an array of prices
prices.push(50); // Add a new price to array
prices.shift(); // Remove the first price from array
console.log("Updated price list:". prices); // Log updated price list

// Task 2 - Modifying customer orders
let orders = [10,20,30,40,50] // Declare an array of orders
orders[2] +=5; // Increase the third order by five
let totalOrders = orders.reduce((total, orders) => total + orders, 0); // Calculate the total of orders
console.log("Updated orders:", orders) // Updated array
console.log("Total order count:", totalOrders); // Total order count

// Employee performance tracking
let employee = {
    name: "Marshall",
    role: "Artist",
    performanceScore: 9.5,
    isActive: true
}; 
employee.performanceScore = 9.0; // Update performance score property
employee.promotionEligible = true; // Add new propety for promotion
console.log("Updated employees: ", employee) // Log updated employees

// Task 4 - Customer feedback records
let feedback = [
    {customerName: "George", feedbackText: "Amazing job!", rating: 5/5}
    {customerName: "Abe", feedbackText: "Great communication!" rating: 4.5/5 }
    {customerName: "Thomas", feedbackText: "Solid work!", rating: 3.5/5}
];
feedback.push({customerName: "Benjamin", feedbackText: "Disappointing proress.", rating: 1/5}) // Add new feedback object
console.log("Updated feedback:", feedback); // Log entire feedback
