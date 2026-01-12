//1. khởi class : Java / OOP / Angular
class Person{
    name: string;
    age: number;

    constructor (name: string, age: number){
        this.name = name;
        this.age = age;
    }
    showInFo(){
        return `Name: ${this.name} -Age: ${this.age}`;
    }
}

// 2. khởi tạo đối tượng 
const p1 = new Person("nam", 23);
console.log(p1.showInFo());

// 3. Interface
 interface IProduct{
    name: string;
    price: number;
    isActive: boolean;
 }
 const product1: IProduct = {
    name: "iphone 16",
    price: 200000,
    isActive: true,
    // hasDiscount; false, // error
};

// 2.3 Interface cho Function
interface Sumfunction{
    (a: number, b: number): number;
}

const sum: Sumfunction = (a, b) => {
    return  a + b;
};
sum(1, 2);

// 3 Type Object
type TProduct = {
    name: "iphone 16",
    price: 200000,
};

const product2: TProduct = {
    name: "iphone 16",
    price: 200000,
};

/// 3.2 Type với Union
type Status = "pending" | "success" | "error";
const status: Status = "success";

type Description = string | null;

type TProduct2 = {
  name: string;
  price: number;
  description: Description;
};

type TBlog = {
  title: string;
  description: Description;
};

// 3.3 Type kết hợp Object

type User = {
  id: number;
  name: string;
  email: string;
};

type UserResponse = User & {
  token: string;
};

const userResponse: UserResponse = {
  id: 1,
  name: "huongtp",
  email: "email@gmail.com",
  token: "token",
};

// extend interface
interface IUser extends User {
  token: string;
}

