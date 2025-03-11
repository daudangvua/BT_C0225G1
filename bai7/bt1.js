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
    let doF = (doC * 9 / 5) + 32
    document.getElementById("doF").innerHTML = "ket qua:" + doF;
}
function bangS() {
    let bankinh = parseInt(document.getElementById("bankinh").value);
    let dientichhinhtron = 3.14*(bankinh*bankinh);
    document.getElementById("dientichhinhtron").innerHTML = dientichhinhtron;
}
function bangC() {
    let bankinhc = parseInt(document.getElementById("bankinhc").value);
    let chuviC = 2*3.14*bankinhc;
    document.getElementById("chuviC").innerHTML = chuviC;
}
