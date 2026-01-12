"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    id: 1,
    name: "Nguyễn Văn A",
    score: 9,
};
console.log("Bài 1:", student);
const user = {
    id: 1,
    email: "user@gmail.com",
};
console.log("Bài 2:", user);
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
console.log("Bài 3 - Cộng:", add(2, 3));
console.log("Bài 3 - Nhân:", multiply(2, 3));
function logStatus(status) {
    if (status === "loading")
        console.log("Đang tải...");
    else if (status === "success")
        console.log("Thành công");
    else if (status === "error")
        console.log("Có lỗi xảy ra");
}
console.log("Bài 4:");
logStatus("loading");
logStatus("success");
logStatus("error");
