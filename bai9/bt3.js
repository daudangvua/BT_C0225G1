function nhaps(num) {
    document.getElementById("nhap").value += num;
}
function xoa() {
    document.getElementById('nhap').value= "";
}
function bang() {
   let tinh = document.getElementById('nhap').value;
   document.getElementById('nhap').value= eval(tinh);
}