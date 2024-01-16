let numberlist= [ 1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
        console.log(arr[i]);
    }
    if (!arr.some(Number.isInteger)) {
        console.log("Trong mảng không tồn tại số nguyên");
    }
}