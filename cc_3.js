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
