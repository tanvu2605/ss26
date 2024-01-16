let mangSoNguyen = [1, 5, 8, 10, 7, 3];
let soBatKi = prompt("nhap vao mot so bat ki");
const n = parseInt(prompt("Nhập số phần tử của mảng:"));
const arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
}
const targetSum = parseInt(prompt("Nhập số cần tìm trong mảng con:"));
const result = findSubarrayWithSum(arr, targetSum);
if (result) {
    console.log(`Mảng con có tổng bằng ${targetSum}: [${result}]`);
} else {
    console.log("Không có mảng con thỏa mãn.");
}