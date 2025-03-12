function convert(){
    var vatly = parseFloat( document.getElementById("vatly").value);
    var hoahoc = parseFloat( document.getElementById("hoahoc").value);
    var sinhhoc =parseFloat( document.getElementById("sinhhoc").value);
    tong = vatly+hoahoc+sinhhoc
    trungbinh = tong/3
    document.getElementById("tong").innerHTML = "tong: " + tong;
    document.getElementById("trungbinh").innerHTML = trungbinh;
}
function chuyen() {
    let doC = parseInt(document.getElementById("doC").value);
    let doF = (doC * 9 / 5) + 32;
    document.getElementById("doF").innerHTML = "ket qua:" + doF;
}
function bangS() {
    let bankinh = parseInt(document.getElementById("bankinh").value);
    const PI = 3.14159;
    let dientichhinhtron = PI*(bankinh*bankinh);
    document.getElementById("dientichhinhtron").innerHTML = dientichhinhtron;
}
function bangC() {
    let bankinhc = parseInt(document.getElementById("bankinhc").value);
    const PI = 3.14159;
    let chuviC = 2*PI*bankinhc;
    document.getElementById("chuviC").innerHTML = chuviC;
}
