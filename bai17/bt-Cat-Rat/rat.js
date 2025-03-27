class Rat {
    name;weight;speed;status;

    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }
    squeak(mess){
        console.log(`Rat ${name} squeaking ${mess}`);
    }
}