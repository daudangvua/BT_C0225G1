function cong() {
    let so1= parseFloat(document.getElementById("so1").value);
    let so2= parseFloat(document.getElementById("so2").value);
    let ketqua=so1+so2;
    document.getElementById("ketqua").innerHTML = "Result Division: "+ketqua;
}
function tru() {
    let so1= parseFloat(document.getElementById("so1").value);
    let so2= parseFloat(document.getElementById("so2").value);
    let ketqua=so1-so2;
    document.getElementById("ketqua").innerHTML = "Result Division: "+ketqua;
}
function nhan() {
    let so1= parseFloat(document.getElementById("so1").value);
    let so2= parseFloat(document.getElementById("so2").value);
    let ketqua=so1*so2;
    document.getElementById("ketqua").innerHTML = "Result Division: "+ketqua;
}
function chia() {
    let so1= parseFloat(document.getElementById("so1").value);
    let so2= parseFloat(document.getElementById("so2").value);
    let ketqua=so1/so2;
    document.getElementById("ketqua").innerHTML = "Result Division: "+ketqua;
}