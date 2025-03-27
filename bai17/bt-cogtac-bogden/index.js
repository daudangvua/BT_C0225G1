let electricLamp_1 = new ElectricLamp(false);

let switchButton_1 = new SwitchButton(false, electricLamp_1); // kết nối giữa  công tắc 1 và đèn 1

console.log(switchButton_1.switchOn());
console.log(electricLamp_1.getStatus());
console.log(switchButton_1.switchOff());
console.log(electricLamp_1.getStatus());