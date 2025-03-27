class Apple {
    weight;
    constructor(weight=10) {
        this.weight=weight;
    }


}
class Human {
    name;
    gender;
    weight;
    speak;
    constructor(name, gender, weight, speak) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
        this.speak = "";
    }
    get name(){
        return this.name;
    }
    set name(newName){
        this.name = newName;
    }
    get gender(){
        return this.gender;
    }
    set gender(newGender){
        this.gender = newGender;
    }
    get weight(){
        return this.weight;
    }
}