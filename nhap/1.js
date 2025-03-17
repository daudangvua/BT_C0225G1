
// let ten = prompt("nhap ten cua ban");
// if (ten !="") {
//     alert("xin chao: " +ten);
// }
//
// let chan = prompt("nhap so");
// if (chan %2==0) {
//     alert("so chan");
// }
// else {
//     alert("so le");
// }
//
// let ss = prompt("nhap so");
// if (ss >= 5) {
//     alert("lon hon 5");
// }
// else if (ss = 5) {
//     alert("la so 5");
// }
// else {
//     alert("nho hon 5");
// }
let ketqua =""
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        ketqua += "FizzBuzz";
    } else if (i % 3 === 0) {
        ketqua += "Fizz";
    } else if (i % 5 === 0) {
        ketqua += "Buzz";
    } else {
        ketqua += i;
    }
    ketqua += "<br/>"
}
document.getElementById("ketqua").innerHTML = ketqua