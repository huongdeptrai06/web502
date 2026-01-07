"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1
function tinhHinhChuNhat(dai, rong) {
    const chuVi = (dai + rong) * 2;
    const dienTich = dai * rong;
    return { chuVi, dienTich };
}
// 2
function tinhTong(...numbers) {
    return numbers.reduce((tong, n) => tong + n, 0);
}
// 3
function demKyTu(chuoi, kyTu) {
    let dem = 0;
    for (const ch of chuoi) {
        if (ch === kyTu) {
            dem++;
        }
    }
    return dem;
}
// 4
function laSoNguyenTo(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
const hcn = tinhHinhChuNhat(6, 4);
console.log("Chu vi:", hcn.chuVi);
console.log("Diện tích:", hcn.dienTich);
console.log("Tổng:", tinhTong(1, 2, 3, 4, 5));
console.log("Số lần xuất hiện:", demKyTu("typescript", "t"));
console.log("7 là số nguyên tố:", laSoNguyenTo(7));
console.log("10 là số nguyên tố:", laSoNguyenTo(10));
