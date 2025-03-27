class Apple {
    weight;
    constructor(weight) {
        this.weight=weight;
    }
    isEmpty() {
        return this.weight <= 0;
    }

}
class Human {
    name;
    gender;
    weight;
    constructor(name, gender, weight, speak) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    call(mess){
        console.log(`${this.name}: ${mess}`);
    }
    eat(apple){
        if (!apple.isEmpty()) {
            apple.weight -= 1;
            this.weight += 1;
            console.log(`🍏 ${this.name} ăn táo!`);
            console.log(`👉 Cân nặng ${this.name}: ${this.weight}kg | 🍏 Táo còn lại: ${apple.weight}`);
        } else console.log(`hết táo rồi`);
    }
}
let apple = new Apple(10);
let Adam = new Human('Adam', 'male', 50 );
let Eva = new Human('Eva', 'female', 50 );
console.log(`🍏 Trọng lượng táo ban đầu: ${apple.weight}`);
console.log(`🏋️‍♂️ Cân nặng Adam: ${Adam.weight}kg | 🏋️‍♀️ Cân nặng Eva: ${Eva.weight}kg`);
console.log("===== BẮT ĐẦU ĂN TÁO =====");
while (!apple.isEmpty()) {
    Adam.eat(apple);
    if (!apple.isEmpty()) {
        Eva.eat(apple);
    }
}

console.log("===== HẾT TÁO =====");
console.log(`🏋️‍♂️ Cân nặng cuối cùng của Adam: ${Adam.weight}kg`);
console.log(`🏋️‍♀️ Cân nặng cuối cùng của Eva: ${Eva.weight}kg`);