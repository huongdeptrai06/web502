"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. khởi class : Java / OOP / Angular
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInFo() {
        return `Name: ${this.name} -Age: ${this.age}`;
    }
}
// 2. khởi tạo đối tượng 
const p1 = new Person("nam", 23);
console.log(p1.showInFo());
const product1 = {
    name: "iphone 16",
    price: 200000,
    isActive: true,
    // hasDiscount; false, // error
};
const sum = (a, b) => {
    return a + b;
};
sum(1, 2);
const product2 = {
    name: "iphone 16",
    price: 200000,
};
const status = "success";
const userResponse = {
    id: 1,
    name: "huongtp",
    email: "email@gmail.com",
    token: "token",
};
