// nhúng javascript
// đầu ra
// console.log("Hello anh em!");
// alert("Hello anh em!");
// document.write('Xin chào!'); hiện ra màn hình
// document.getElementById("demo").innerText = "<h3>Hello anh em anh em</h3>";
// document.getElementById("demo2").innerHTML = "<h3>Hello anh em anh em</h3>";
// nhập dữ liệu

// name = prompt("nhap")
// document.getElementById("name").innerText = name;
// lấy từ ô input
//function getName()

// let name = prompt("Nhập tên của bạn:");
// console.log("Tên bạn là:", name);

//let isConfirmed = confirm("Bạn có chắc chắn muốn tiếp tục?");
//console.log("Xác nhận:", isConfirmed);

//document.getElementById("myForm").addEventListener("submit", function(event) {
    //event.preventDefault(); // Ngăn form tải lại trang
    //let data = document.getElementById("userInput").value;
    //document.getElementById("result").innerText = "Dữ liệu nhập: " + data;});

//let name = prompt("Nhập tên của bạn:");
//localStorage.setItem("username", name);
//alert("Tên đã lưu: " + localStorage.getItem("username"));

function getValue() {
    let myInput = document.getElementById("myName");
    let myName = myInput.value;
    alert("Tên của bạn là " + myName); // hiển thị tên của người dùng
}