"use strict";

let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Sour Patch Kids", price: 6.82 },
  { product: "Skittles", price: 4.79 },
];

for (let product of products) {
  if (product.price < 4);
  console.log(product.product);
}

for (let product of products) {
  if (product.product.includes("M&Ms"));
  console.log(product.product);
}

for (let product of products) {
  if (product.product == "Swedish Fish");
  console.log("Yes we carry Swedish Fish");
}
