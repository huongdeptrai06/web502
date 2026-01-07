console.log("typescript");
let myName: string = "huongtp";
const age: number = 36;
const isMarried: boolean = true;

console.log(myName);

// 2. Type isMarried suy diễn ra kiểu dữ liệu
let count = 10;
// count = "20";error lỗi

//3. Core Types: object
let product:{
    id: number;
    title: string;
    price: number;
    isActive: boolean;
} = {
    id: 1,
    title: "ip24",
    price: 2500,
    isActive: true,
};

// 4. Core Types: array number[]
// let numbers: number[] = [1, 2, 3, 4, 5, "6"];
// let names: string[] = ["Alice", "Bod", "Charlie", 1]; như này sẽ lỗi 

//5. Special Types: any
let randomValue: any = 10;// Gan any cho chay code
randomValue = "Heloo";

// 7. Type: Union ( | )
let multiType: number | string | boolean;
multiType = 20;
multiType = "Twenty";
multiType = true;
// multiType = []; // error




