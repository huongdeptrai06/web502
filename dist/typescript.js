"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("typescript");
let myName = "huongtp";
const age = 36;
const isMarried = true;
console.log(myName);
// 2. Type isMarried suy diễn ra kiểu dữ liệu
let count = 10;
// count = "20";error lỗi
//3. Core Types: object
let product = {
    id: 1,
    title: "ip24",
    price: 2500,
    isActive: true,
};
// 4. Core Types: array number[]
// let numbers: number[] = [1, 2, 3, 4, 5, "6"];
// let names: string[] = ["Alice", "Bod", "Charlie", 1]; như này sẽ lỗi 
//5. Special Types: any
let randomValue = 10; // Gan any cho chay code
randomValue = "Heloo";
// 7. Type: Union ( | )
let multiType;
multiType = 20;
multiType = "Twenty";
multiType = true;
// multiType = []; // error
//8. Literal Type
let status;
// status = "success"; // error lỗi
status = "active";
