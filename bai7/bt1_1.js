function convert(){
    vatly = document.getElementById("vatly").value
    hoahoc = document.getElementById("hoahoc").value
    sinhhoc = document.getElementById("sinhhoc").value
    tong = vatly+hoahoc+sinhhoc
    trungbinh = tong/3
    document.getElementById("tong").innerHTML = "tong: " + tong;}
    document.getElementById("trungbinh").innerHTML = "trungbinh: " + trungbinh.toFixed;}

