
let mang = [10, 5, 8, 2, 7, 3];
let giaTriCanTim = prompt("Nhập giá trị cần tìm kiếm:");

let giaTriCanTimSo = parseInt(giaTriCanTim);
if (!isNaN(giaTriCanTimSo)) {
    let viTri = mang.indexOf(giaTriCanTimSo);
    if (viTri !== -1) {
        console.log(`Vị trí của phần tử ${giaTriCanTimSo} trong mảng là ${viTri}`);
    } else {
        console.log("Phần tử không tồn tại trong mảng");
    }
} else {
    console.log("Vui lòng nhập một giá trị số");
}
