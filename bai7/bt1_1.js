function convert(){
    var vatly = parseFloat( document.getElementById("vatly").value);
    var hoahoc = parseFloat( document.getElementById("hoahoc").value);
    var sinhhoc =parseFloat( document.getElementById("sinhhoc").value);
    tong = vatly+hoahoc+sinhhoc
    trungbinh = tong/3
    document.getElementById("tong").innerHTML = "tong: " + tong;
    document.getElementById("trungbinh").innerHTML = trungbinh;
}

7