// Inventory Management System
// Team Codedivas


// Define some products as objects
let product1 = {
  id: "1A",
  name: "Bag",
  price: 700,
  quantity: 5,
  category: "Fashion Accessories",
  lowStock: false
};

let product2 = {
  id: "1B",
  name: "Face Cream",
  price: 1500,
  quantity: 7,
  category: "Skin Care",
  lowStock: false
};

let product3 = {
  id: "1C",
  name: "Book",
  price: 500,
  quantity: 10,
  category: "Stationery",
  lowStock: false
};

// Store products in an array
let inventory = [product1, product2, product3];


// Add a new product
function addProduct(product) {
  inventory.push(product);
  console.log(product.name + " has been added to the inventory.");
}

// Remove a product by ID
function removeProduct(productId) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === productId) {
      console.log(inventory[i].name + " has been removed.");
      inventory.splice(i, 1);
      return;
    }
  }
  console.log("Product not found!");
}

// Update stock quantity
function updateStock(productId, newQuantity) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === productId) {
      inventory[i].quantity = newQuantity;
      console.log("Stock updated for " + inventory[i].name);
      return;
    }
  }
  console.log("Product not found!");
}


// Generate report of all products
function generateReport() {
  console.log("\n=== Inventory Report ===");

  let totalProducts = inventory.length;
  let totalValue = 0;

  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];

    // Check and update low stock
    product.lowStock = product.quantity < 10;

    // Add to total value
    totalValue += product.price * product.quantity;

    // Show each product
    console.log(
      product.name +
      " | Qty: " + product.quantity +
      " | Price: ₦" + product.price +
      " | Low Stock: " + product.lowStock
    );
  }

  console.log("Total Products: " + totalProducts);
  console.log("Total Inventory Value: ₦" + totalValue);
}



// Test Cases (Demo)


// Add a new product
let product4 = {
  id: "1D",
  name: "Pen",
  price: 100,
  quantity: 3,
  category: "Stationery",
  lowStock: false
};
addProduct(product4);

// Remove a product
removeProduct("1B"); // Removes Face Cream

// Update stock
updateStock("1A", 12); // Bag now has 12 in stock

// Generate report
generateReport();
