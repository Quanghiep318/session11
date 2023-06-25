// 3. Tạo mảng có tên là styles có giá trị các phần tử là “Jazz”, “Blues”
let style = ["Jass", "Blue"];
console.log(style);
// a. Thêm phần tử “Rock-n-Roll” vào cuối mảng
style.splice(2,0,"Rock-n-Roll");
console.log(style);

// b. Thay thế phần tử nằm chính giữa mảng bằng “Classics” nếu mảng có
// tổng số phần tử là lẻ
if(style.length % 2 != 0){
    indexmiddle = ((style.length)-1)/2;
    style.splice(indexmiddle,1,"Classics");
    
}
console.log(style);

// c. Xóa phần tử đầu tiên của mảng và hiển thị mảng
style.splice(0,1);
console.log(style);
// d. Thêm phần tử “Rap” và “Reggae” vào đầu mảng và hiển thị
style.unshift("Rap", "Reggae");
console.log(style);