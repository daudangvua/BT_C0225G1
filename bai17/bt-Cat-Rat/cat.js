class Cat{
    name;weight;speed;

    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
    }

    call(mess){
        console.log(`Cat ${name} squeaking ${mess}`);
    }

    catch(rat){
        if (this.speed >rat.speed){
            this.call("tao da bat dc may");
            rat.squeak("bi bat");
        }
        else {
            rat.squeak("leu leu do chay cham");
        }
    }

    eat(rat){
        if (rat.status){
            this.call("An chuot " + rat.name);
            rat.status = false;
            this.weight += rat.weight;
        }
    }
}