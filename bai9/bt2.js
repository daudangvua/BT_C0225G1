function getDaysInMonth() {
    let month = document.getElementById("gan").value;
    switch (month) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            ngays = 31;
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            ngays = 30;
            break;
        case "2":
            ngays = "28 hoac 29";
            break;
        default:
            break;
    }
    document.getElementById("month").innerHTML = ngays;
}