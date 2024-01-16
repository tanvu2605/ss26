arr.sort((a, b) => a - b);
{
let smallestPositiveMissingElement = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= smallestPositiveMissingElement) {
        smallestPositiveMissingElement = arr[i] + 1;
    }
}

return smallestPositiveMissingElement;
}

const n = parseInt(prompt("Nhập số phần tử của mảng:"));
const arr = [];
for (let i = 0; i < n; i++) {
arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
}
const result = findSmallestPositiveMissingElement(arr);
console.log(`Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng là: ${result}`);