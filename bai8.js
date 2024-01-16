
let mangSoNguyen = [1, 2, 3, 2, 4, 5, 6, 3, 7, 8, 2, 5];
let demSoLanXuatHien = {};
for (let i = 0; i < mangSoNguyen.length; i++) {
    let phanTu = mangSoNguyen[i];
    demSoLanXuatHien[phanTu] = (demSoLanXuatHien[phanTu] || 0) + 1;
}
console.log("Các phần tử xuất hiện từ hai lần trở lên:");

for (let phanTu in demSoLanXuatHien) {
    if (demSoLanXuatHien[phanTu] >= 2) {
        console.log(`${phanTu}: ${demSoLanXuatHien[phanTu]} lần`);
    }
}



