// [MD01-S15-BT] LUYỆN TẬP VỚI MẢNG 
// ---------BAI1------

// let array = ["Hello","Rikkei","Academy"];
// newarray = array.join()
// console.log(array);

// ---------BAI2------
// let array = ["Academy", "Rikkei", "Chao", "Xin"];
// newarray = array.reverse();
// newarray = array.join();
// console.log(newarray);

// ---------BAI3------

// let array = ["Hello","World", "Rikkei","Academy"];
// array.splice(1,1);
// newarray = array.join();
// console.log(newarray);

// ---------BAI4------
// let array = [1,2,3,4,5];
// sum = 0
// for (let i = 0; i <= array.length; i++){
//     sum = sum + i;
// }
// console.log(sum);

// [MD01-S15-BTTH] LUYỆN TẬP VỚI MẢNG 

// ------------Bai 1 -------------
//  let n = prompt("Nhap vao day so bat ki duoc ngan cach boi dau ,");
//  let convert = n.split(",");
//  console.log("chuyen doi string sang array",convert);
//  let sumchan = 0;
//  let sumle = 0;
//  for (let i = 0; i < convert.length; i++){
//  let number = Number(convert[i]);
//  if (number %2 == 0) {
//      sumchan = sumchan + number;
//  } 
//  else {
//      sumle = sumle + number;
//  }
// }
//  console.log("Tong chan",sumchan);
//  console.log("Tong le",sumle);
// ------------Bai 2-------------


// let n = prompt("Nhap vao day so bat ki duoc ngan cach boi dau ,");
// let convert = n.split(",");
// console.log("chuyen doi string sang array",convert);

// let max = convert[0];
// for (let i = 0; i < convert.length; i++){
//     if (max < convert[i]) {
//         max = convert[i]
        
//     }
// }console.log("Day la so lon nhat",max);

// let min = convert[0];
// for (let a = 0; a < convert.length; a++){
//     if (min > convert[a]) {
//         min = convert[a]
        
//     }
// }console.log("day la so nho nhat",min);

// ------------Bai 3-------------
// C1 
// let n = prompt("Nhap vao day so bat ki duoc ngan cach boi dau ,");
// let convert = n.split(",");
// console.log("chuyen doi string sang array",convert);
// convert.sort(function(a,b) {return a-b});
// console.log(convert);

// Chua biet function la gi nhung khong biet lam cach koh co function

// C2
// let n = prompt("Nhap vao day so bat ki duoc ngan cach boi dau ,");
// let convert = n.split(",");
// console.log("chuyen doi string sang array",convert);
// for (let i = 0; i < convert.length; i++){
//     let a = 0;
//     let b = Number(convert[i]);
//     if(a>b){
//         return -1;}
//         {
//     if (a < b ){
//         return 1;
//         }    
//         return 0;
//     }
// }
// console.log(convert);

// ------------Bai 4-------------
// Chep lai code chua lam dc
// let array=[1,2,1,2,1,1,1];
// let maxCount = 0;
// let newarray= [];
// for (let i = 0; i < array.length; i++){
//     let count = 1;
//     for (let j = i + 1; j < array.length; j++){
//         if (array[j]===array[i]) {
//            count = count + 1;
//         }
//     }   

    

//   if (count > maxCount) {
//     maxCount = count;
//     newarray = [array[i]];
//  } 
//  else if (count === maxCount) {
//     newarray.push(array[i]);
//  }
// }
// console.log("Phan tu xuat hien nhieu nhat:" + newarray.join(","));

// ------------Bai 5-------------
let todoList= ["Go to school at 7am", "Read book at 12 am"];
for (let i = 0; i < todoList.length;i++) 
console.log(`${+1}. ${todoList[i]}`);

let input = prompt("Cho nguoi dung nhap C/R/U/D/E").toLowerCase();
if (input === "c"){
    // console.log("Tao Moi");
    let newtodo = prompt("Nhap noi dung viec moi can them");
    todoList.push(newtodo);
    for (let i = 0; i < todoList.length;i++) 
    console.log(`${+1}. ${todoList[i]}`);
}
if (input === "r"){
    // console.log("Inlai");
    for (let i = 0; i < todoList.length;i++) 
    console.log(`${+1}. ${todoList[i]}`);
}
if (input === "u"){
    console.log("Update");
}
if (input === "d"){
    console.log("delete");
}
if (input === "e"){
    console.log("Quit");
}