class Mobile{
    pin;
    status;
    draft;
    inbox;
    sent;
//     mac dinh dang tat
//     thu nhap, inbox, sent rong
//     pin: 100;

    constructor() {
        this.pin=100;
        this.status=false;
        this.draft="";
        this.inbox=[];
        this.sent=[];
    }
//     co chuoi -> thu nhap
    writeDraft(message){
        if (this.status) {
            this.draft = message;
            this.suDungpin();
        }
    }

//     gui tin nhan
//     dau la dien thoai nhan newPhone
//     1. Chuyen thu nhap vao thu da nhan cua newPhone
//     2. Chuyen thu nhap vao thu da gui cua dt hien tai
//     3. Xoa thu nhap
    sendMessage(newPhone){
        if (!this.status || this.draft === "" || this.pin === 0) return;
        let message=this.draft;
        newPhone.inbox.push(message);
        this.sent.push(message);
        this.draft="";
    }
    turnOn() {
        if(this.pin > 0 && !this.status){
            this.status=true;
            this.suDungpin();
        }
    }
    turnOff() {
        this.status=false;
    }
    suDungpin(){
        if(this.pin > 0) {
            this.pin--;
            if(this.pin ==0){
                this.status=false;
            }
        }
    }
    sacPin(amount) {
        this.pin += amount;
        if (this.pin > 100) this.pin = 100;
    }
}


