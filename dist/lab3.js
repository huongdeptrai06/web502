"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
const average = (a, b, c) => {
    return (a + b + c) / 3;
};
average(8, 7, 9);
const isEven = (n) => {
    return n % 2 === 0;
};
isEven(4);
isEven(7);
// 3
function createUser(name, age, country = "Viet Nam") {
    return `Name: ${name}, Age: ${age}, Country: ${country}`;
}
createUser("Huong");
createUser("Huong", 20);
createUser("Huong", 20, "Japan");
// 4.
function productList(...products) {
    const defaultProducts = ["Phone", "Laptop"];
    return [...defaultProducts, ...products];
}
productList("Tablet");
productList("Tablet", "Camera");
