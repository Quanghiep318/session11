// let todoList = ["Go to school at 7am","Read book at 12 am"];
// for (let i = 0; i < todoList.length; i++) {
//     console.log(`${i+1}. ${todoList[i]}`);
    
// }
// let state = true;
// while (state) {
//     // Cho nguoi dung nhap vao C/R/U/D/E
// let input = prompt("Cho nguoi dung nhap vao C/R/U/D/E").toLowerCase();
// // console.log(input);
// if(input ==="c"){
//     console.log("Tao moi");
//     let newTodo = prompt("Nhap noi dung cong viec moi");
//     todoList.push(newTodo);
//     for (let i = 0; i < todoList.length; i++) {
//         console.log("Sau khi them moi")
//         console.log(`${i+1}. ${todoList[i]}`);
        
//     }
// }

// else if(input ==="r"){
//     console.log("In Lai");
//     for (let i = 0; i < todoList.length; i++) {

//         console.log(`${i+1}. ${todoList[i]}`);
        
        
//     }
// }

// else if(input ==="u"){
//     console.log("Update");
//     let updateindex = prompt("Nhap vao vi tri muon up date");
//     let updatetodo = prompt("Nhap vao noi dung muon update");
//     todoList[updateindex -1] = updatetodo;
//     for (let i = 0; i < todoList.length; i++) {
//         console.log(`${i+1}. ${todoList[i]}`);
        
//     }
// }

// else if(input ==="d"){
//     console.log("Delete");
//     let deleteindex = prompt("Nhap vi tri muon xoa");
//     todoList.splice(deleteindex -1, 1);
//     for (let i = 0; i < todoList.length; i++) {
//         console.log(`${i+1}. ${todoList[i]}`);
//     }
// }

// else if (input ==="e") {
//     state = false
//     console.log("Cam on ban da dung ung");
// }
    
// }



let store =["Laptop" ,"Keyboard", "Mouse", "PC"];
let cart = [
    ["Laptop",0],
    ["Keyboard",0], 
    ["Mouse",0], 
    ["PC",10]
];

// Doc du lieu tu gio hang
// console.log("Gio hang cua ban");
// for (let i = 0; i < cart.length; i++) {
//     console.log(`${i+1}. ${cart[i][0]}--${cart[i][1]}`);
// }
// CRUDE

let state = true;
while (state) {
    let input = prompt("Nhap CRUD ").toUpperCase();

    if (input === "C"){
     let addproduct = prompt("Nhap vao san pham muon mua");
     let checkstore = -1;
     for (let i = 0; i < store.length; i++) {
         if(addproduct === store[i]){
             checkstore = i;
         }
    }
         if(checkstore == -1){
             console.log("San phan ban tim khong ton tai trong gio hang");
        }
         else {
            //  Tim vi tri cua san pham
            // Tang so luong them 1 tai vi tri tang so luong len
            cart[checkstore][1] += 1;
         }
         console.log("Gio hang cua ban sau khi mua");
         for (let i = 0; i < cart.length; i++) {  
         console.log(`${i+1}. ${cart[i][0]}--${cart[i][1]}`);
          }
     
        
    }else if (input === "R"){
        console.log("Gio hang cua ban sau khi mua");
        for (let i = 0; i < cart.length; i++) {  
        console.log(`${i+1}. ${cart[i][0]}--${cart[i][1]}`);
         }
    
    }
    else if (input === "U"){
     let updateindex = Number(prompt("Nhap vi tri muon thay doi "));
     let updatenumber = Number(prompt("Nhap so luong muon thay doi "));
     cart[updateindex -1][1] = updatenumber;
     console.log("Gio hang cua ban sau khi thay doi");
        for (let i = 0; i < cart.length; i++) {  
        console.log(`${i+1}. ${cart[i][0]}--${cart[i][1]}`);
         }
    
    }
    else if (input === "D"){
        // cho nguoi dung nhap vao vi tri muon xoa trong cart
        let deleteindex = Number(prompt("Nhap vi tri muon xoa"));
        cart[deleteindex -1][1] = 0;
        console.log("Gio hang cua ban sau khi thay doi");
        for (let i = 0; i < cart.length; i++) {  
        console.log(`${i+1}. ${cart[i][0]}--${cart[i][1]}`);
         }
    
    }
    else if (input === "E"){
             console.log("Thank you");
             state = false;
    }
    else {
     console.log("Nhap lai")
    }
    
    
    
}
