// 1. Khai báo mảng một chiều có tên arrayInt
let arrayInt = [];
// a. Nhập 5 giá trị số nguyên cho mảng từ bàn phím
for (let i = 0; i < 5; i++) {
    arrayInt[i] = parseInt(prompt("Nhap so nguyen thu" + (i + 1)));
    
}
// b. Hiển thị giá trị các phần tử của mảng
console.log(arrayInt);
// c. In các phần tử có giá trị chẵn và tính tổng
let sumchan = 0;
for (let i = 0; i < 5; i++) {
    if(arrayInt[i] % 2 == 0) {
        sumchan += arrayInt[i];
     }
}
console.log("Tong cac so chan la",sumchan);
// d. In các phần tử có chỉ số lẻ và tính tổng
let sumle = 0;
for (let i = 0; i < 5; i++) {
    if(arrayInt[i] % 2 != 0)
    {
        console.log("Cac phan tu so le da nhap la :" + arrayInt[i]);
        sumle += arrayInt[i];
        
     }
}
console.log("Tong cac so le la",sumle);
// e. In giá trị các phần tử trong mảng là số nguyên tố
// for (let i = 0; i < arrayInt.length; i++) {
//     let flag = 0;

//     for (let j = 2; j < i; j++) {
//         if (arrayInt[i] % j == 0) {
//             flag = 1;
//             break;
        
//         }
       
//     }

// }
// console.log("So nguyen to la so " + arrayInt[i]);


// f. In các phần tử có giá trị là max hoặc min
let max = arrayInt[0];
for (let i = 0 ; i < arrayInt.length; i++){
    if(max < arrayInt[i]){
        max = arrayInt[i];
    }
}
console.log("So lon nhat la " + max);

let min = arrayInt[0];
for (let i = 0; i < arrayInt.length; i++){
    if(min > arrayInt[i]){
        min = arrayInt[i];
    }
    
}
console.log("So be nhat la " + min);

// g. Sắp xếp mảng giảm dần và in giá trị các phần tử mảng sau khi sắp xếp
// c1 ham sort
// let a = arrayInt.sort((a, b) => {
//     return b - a;})
// console.log(arrayInt);

for (let i = 0; i < arrayInt.length; i++) {
    for (let j = 0; j < arrayInt.length; j++) {
    if(arrayInt[i]>arrayInt[j]){
        let temp = arrayInt[j];
        arrayInt[j]= arrayInt[i];
        arrayInt[i] = temp;

    }
}
}
console.log(arrayInt);

// h. Nhập vào một số nguyên và thống kê có bao nhiêu phần tử có giá trị
// như vậy
let number = parseInt(prompt("Nhap so nguyen can thong ke"));
let count = 0;
for (let i = 0; i < arrayInt.length; i++) {
    if (number === arrayInt[i]) {
        count = count + 1;
    }
    
}
console.log(`Co ${count} so nguyen co gia tri bang ${number}`);