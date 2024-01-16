let mangSoNguyen = [1, 5, 8, 10, 7, 3];
let soCanTim = prompt("nhap mot so nguyen");
let soCanTimSo = parseInt(soCanTim);
if (!isNaN(soCanTimSo)) {
    let soLanXuatHien = 0;

    for (let i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] === soCanTimSo) {soLanXuatHien++; }
    }
}
console.log(`Số ${soCanTimSo} xuất hiện ${soLanXuatHien} lần trong mảng.`);
