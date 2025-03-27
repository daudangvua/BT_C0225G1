class SwitchButton {
    status;
    lamp;
    constructor(status, lamp) {
        this.status = false;
        this.lamp = lamp;
    }
    getLamp(){
        return this.lamp;
    }

    setLamp(lamp){
        this.lamp = lamp;
    }

    // connectToLamp(electricLamp_1){
    //     return this.lamp = electricLamp_1;
    // }

    switchOff(){
        this.lamp.status = false;
        return this.status = false;
    }

    switchOn(){
        this.lamp.status = true;
        return this.status = true;
    }
}