// đánh giá
enum Rate {
  low = 'Thấp',
  medium = 'Trung bình',
  hight = 'Cao'
}

//danh sách
type Product = {
  name: string;
  price: number;
  sale: boolean;
  rate: Rate;
};

// mảng sản phẩm (5 phần tử)
let listProducts: Product[] = [
  { name: 'A', price: 3, sale: true, rate: Rate.low },
  { name: 'B', price: 6, sale: false, rate: Rate.medium },
  { name: 'C', price: 10, sale: true, rate: Rate.hight },
  { name: 'D', price: 5, sale: true, rate: Rate.medium },
  { name: 'E', price: 8, sale: false, rate: Rate.hight }
];

// 1.
let newProducts = listProducts.map(p => {
  return {
    ...p,
    description: p.price > 5 ? 'Tốt' : 'Bình thường'
  };
});

// 2.
newProducts.forEach(p => {
  console.log(p.name, p.price, p.sale, p.rate);
});

// 3. 
let total = listProducts.reduce((sum, p) => sum + p.price, 0);
console.log('Tổng giá:', total);

// 4.
let saleProducts = listProducts.filter(
  p => p.sale && (p.rate === Rate.medium || p.rate === Rate.hight)
);

console.log('Sản phẩm sale & đánh giá >= Trung bình:');
saleProducts.forEach(p => {
  console.log(p.name, p.price, p.rate);
});
