// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off(). Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина, які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний. Використовує класи до es6 стандарту.

function CoffeeMake(model, devicePower) {
    this.model = model;
    this.devicePower = devicePower;
}

CoffeeMake.prototype.on = function () {
    console.log(`CoffeeMake ${this.model} is on, power value = ${this.devicePower}`);
}
CoffeeMake.prototype.off = function () {
    console.log(`CoffeeMake ${this.model} is off`);
}

// function DripCoffeeMaker
function DripCoffeeMaker(model, devicePower, sugar) {
    CoffeeMake.call(this, model, devicePower);
    this.sugar = sugar;
}

DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
DripCoffeeMaker.prototype.constructor = DripCoffeeMaker;

DripCoffeeMaker.prototype.addSugar = function () {
    console.log(`add ${this.sugar} of sugar`);
}
DripCoffeeMaker.prototype.removeSugar = function () {
    console.log('remove sugar');
}
// function HornCoffeeMaker
function HornCoffeeMaker(model, devicePower, milk) {
    CoffeeMake.call(this, model, devicePower);
    this.milk = milk;
}

HornCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
HornCoffeeMaker.prototype.constructor = HornCoffeeMaker;

HornCoffeeMaker.prototype.addMilk = function () {
    console.log(`add ${this.milk} milk`);
}
HornCoffeeMaker.prototype.removeMilk = function () {
    console.log('remove milk');
}

// function CoffeeMachine
function CoffeeMachine(model, devicePower, typeOfCoffee, capacity) {
    CoffeeMake.call(this, model, devicePower);
    this.typeOfCoffee = typeOfCoffee;
    this.capacity = capacity
}

CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

CoffeeMachine.prototype.type = function () {
    console.log(`you choose: ${this.typeOfCoffee}`);
}
CoffeeMachine.prototype.size = function () {
    console.log(`you choose capacity: ${this.capacity}`);
}


let drip = new DripCoffeeMaker('Philips', '2kW', '2spoons');
console.log(drip);
drip.on();
drip.off();
drip.addSugar();
drip.removeSugar()

let horn = new HornCoffeeMaker('Samsung', '3kW', '50g');
console.log(horn);
horn.on();
horn.off();
horn.addMilk();
horn.removeMilk()

let cofMach = new CoffeeMachine('Delonghi', '1,5kW', 'Latte', 'L');
console.log(cofMach);
cofMach.on();
cofMach.off();
cofMach.type();
cofMach.size()