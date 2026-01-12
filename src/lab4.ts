type Student = {
  id: number;
  name: string;
  score: number;
};

const student: Student = {
  id: 1,
  name: "Nguyễn Văn A",
  score: 9,
};

console.log("Bài 1:", student);

interface User {
  id: number;
  email: string;
  phone?: string;
}

const user: User = {
  id: 1,
  email: "user@gmail.com",
};

console.log("Bài 2:", user);

type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => a + b;
const multiply: Calculate = (a, b) => a * b;

console.log("Bài 3 - Cộng:", add(2, 3));
console.log("Bài 3 - Nhân:", multiply(2, 3));

type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
  if (status === "loading") console.log("Đang tải...");
  else if (status === "success") console.log("Thành công");
  else if (status === "error") console.log("Có lỗi xảy ra");
}

console.log("Bài 4:");
logStatus("loading");
logStatus("success");
logStatus("error");
