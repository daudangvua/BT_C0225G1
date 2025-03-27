let tu = new Mobile('tu');
let khanh = new Mobile('khanh');
function updateStatus() {
    document.getElementById("startUp1").innerText = tu.status ? "Bật" : "Tắt";
    document.getElementById("startUp2").innerText = khanh.status ? "Bật" : "Tắt";
}
function turnOn(user) {
    if (user === "tu") tu.turnOn();
    else khanh.turnOn();
    updateStatus();
}

function turnOff(user) {
    if (user === "tu") tu.turnOff();
    else khanh.turnOff();
    updateStatus();
}
function tuSendKhanh() {
//     b1: lay du lieu tu Tu
    let message=document.getElementById('tu').value;
    tu.writeDraft(message);
    tu.sendMessage(khanh);
    document.getElementById("inboxKhanh").innerHTML=
        khanh.inbox.join(",");
}
function khanhSendTu() {
    let message=document.getElementById('khanh').value;
    khanh.writeDraft(message);
    khanh.sendMessage(tu);
    document.getElementById("inboxTu").innerHTML
        =tu.inbox.join(",");
}


