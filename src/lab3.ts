// 1
const average = (a: number, b: number, c: number): number => {
  return (a + b + c) / 3;
};

average(8, 7, 9);


// 2
type CheckEvenOdd = (n: number) => boolean;

const isEven: CheckEvenOdd = (n: number): boolean => {
  return n % 2 === 0;
};

isEven(4);
isEven(7); 


// 3
function createUser(
  name: string,
  age?: number,
  country: string = "Viet Nam"
): string {
  return `Name: ${name}, Age: ${age}, Country: ${country}`;
}

createUser("Huong");
createUser("Huong", 20);
createUser("Huong", 20, "Japan");


// 4.
function productList(...products: string[]): string[] {
  const defaultProducts = ["Phone", "Laptop"];
  return [...defaultProducts, ...products];
}

productList("Tablet");
productList("Tablet", "Camera");
