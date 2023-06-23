// let array= [];
// for(let i = 0; i <5;i++){
//     array.push(i);
// }
// console.log("Su Dung Phuong Thuc Push", array);

// a = 10;
// array.unshift(a);
// console.log("Su Dung Phuong Thuc Unshift", array);

// array.pop();
// console.log("Su Dung Phuong Thuc pop", array);

// array.shift();
// console.log("Su Dung Phuong Thuc shift", array);

// array.splice(1,2);
// console.log("Su dung phuong thuc Splive", array);

// [Thực hành] TÌM GIÁ TRỊ TRONG MẢNG

// let array = [1,2,3,4,5,6];
// let n = prompt("Nhap mot so bat ki");
// let check = true;
// for (let i = 0; i < array.length; i++)
//  {if(n == array[i]) {
//      check = false;
//     }
// }
// if (check == false) {
//      alert("Bingo");
// } else {
//          alert("Chuc ban may man lan sau");
// }
     

// [Thực hành] ĐẢO NGƯỢC CÁC PHẦN TỬ TRONG MẢNG
//  let n = prompt("Nhap vao day so bat ki duoc ngan cach boi dau ,");
//  let convert = n.split(",");
//  console.log("chuyen doi string sang array",convert);

//  let array = [];
//  for (i = convert.length -1; i>= 0; i--){
//      array.push(convert[i]);
//      console.log("Dao nguoc cac phan tu", array);
//  }


// [Thực hành] TÌM PHẦN TỬ LỚN NHẤT TRONG MẢNG

// let n = prompt("Nhap vao day so bat ki duoc ngan cach boi dau ,");
// let convert = n.split(",");
// console.log("chuyen doi string sang array",convert);

// let max = convert[0];
// for (let i = 0; i < convert.length; i++){
//     if (max < convert[i]) {
//         max = convert[i]
        
//     }
// }console.log(max);
