"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tạo type Product có các trường sau:
// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}
var Rate;
(function (Rate) {
    Rate["low"] = "Th\u1EA5p";
    Rate["medium"] = "Trung b\u00ECnh";
    Rate["hight"] = "Cao";
})(Rate || (Rate = {}));
// mảng sản phẩm (5 phần tử)
let listProducts = [
    { name: 'A', price: 3, sale: true, rate: Rate.low },
    { name: 'B', price: 6, sale: false, rate: Rate.medium },
    { name: 'C', price: 10, sale: true, rate: Rate.hight },
    { name: 'D', price: 5, sale: true, rate: Rate.medium },
    { name: 'E', price: 8, sale: false, rate: Rate.hight }
];
// Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
let newProducts = listProducts.map(p => {
    return {
        ...p,
        description: p.price > 5 ? 'Tốt' : 'Bình thường'
    };
});
// Viết hàm hiển thị danh sách sản phẩm: (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
newProducts.forEach(p => {
    console.log(p.name, p.price, p.sale, p.rate);
});
let total = listProducts.reduce((sum, p) => sum + p.price, 0);
console.log('Tổng giá:', total);
let saleProducts = listProducts.filter(p => p.sale && (p.rate === Rate.medium || p.rate === Rate.hight));
console.log('Sản phẩm sale & đánh giá >= Trung bình:');
saleProducts.forEach(p => {
    console.log(p.name, p.price, p.rate);
});
