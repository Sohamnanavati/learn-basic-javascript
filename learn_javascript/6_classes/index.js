// ======================================================class ======================================
class product{
    constructor (customerName, item, price, company){
        this.customerName = customerName,
        this.item = item,
        this.price = price,
        this.company = company
        // console.log(`i was called`)
    }
    displayDetail(){
        // console.log(`${this.customerName} has purchased ${this.item} at a price of ${this.price} of  company 
        //     ${this.company}`)
        return `${this.customerName} has purchased ${this.item} at a price of ${this.price} of  company 
            ${this.company}`// this will make undefined go away unlike console log before it.
    }
    displayTotalTax(tax){
        this.tax = tax
        this.taxTotal = (this.price * (1 + tax));
        // console.log(`the total purchase price for this ${this.item} is ${this.taxTotal}`);
        return `the total purchase price for this ${this.item} is ${this.taxTotal}`// this will make undefined go away unlike console log before it.
    }
}
let customer1 = new product("soham", "shirt", 1000, "H&M");
console.log(customer1) // the output is {customerName: 'soham', item: 'shirt', price: 1000, company: 'H&M'}

console.log(customer1.displayTotalTax(0.05))// this would show undefined in console if you have not retured here anything form the displayTotalTax();
console.log(customer1.displayDetail())// this would show undefined in console if you have not retured here anything form the displayDetail();
//  the correction would be to return something like this "return `${this.customerName} has purchased ${this.item} at a price of ${this.price} of  company  ${this.company}`" or return `the total purchase price for this ${this.item} is ${this.taxTotal}`.
// after calling the displayTotalTax method of the class we have added the tax data to the customer1 object created before.
console.log(customer1)//now the output is 
// {customerName: 'soham', item: 'shirt', price: 1000, company: 'H&M', tax: 0.05, taxTotal: 1050}

//======================================================extends==================================================
// the extend is used to access the parent class method and constructor.
class animal{
    constructor(){
        console.log(`constructor is called`)
    }
    alive = true;

    eat(){
        return `the ${this.animal} is eating`
    };
    sleep(){
        return `the ${this.animal} is sleeping`
    };
}

class Rabbit extends animal{
    animal = "rabbit";

    hops(){
       return `the ${this.animal} is hopping`
    };
};
class Fish extends animal{
    animal = "fish";

    swims(){
        return `the ${this.animal} is swimming`
    };
};
class Hawk extends animal{
    animal = "hawk";
    fly(){
        return `the ${this.animal} is flying`
    };
};

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

console.log(rabbit);// {alive: true, animal: 'rabbit'} got the alive property from parent class.the hops method is added in prototype.
console.log(rabbit.eat());// we can access the eat and sleep method form the parent constructor. it is added in the prototype itself.
console.log(rabbit.sleep());// we can access the eat and sleep method form the parent constructor. it is added in the prototype itself.
console.log(rabbit.hops())// its own method.

console.log(fish);// {alive: true, animal: 'fish'} got the alive property from parent class.the swims method is added in prototype.
console.log(fish.eat());// we can access the eat and sleep method form the parent constructor. it is added in the prototype itself.
console.log(fish.sleep());// we can access the eat and sleep method form the parent constructor. it is added in the prototype itself.
console.log(fish.swims());// the fish is swimming
// console.log(fish.hops())// this will throw an error.

console.log(hawk);// {alive: true, animal: 'hawk'} got the alive property from parent class. the fly method is added in prototype.
console.log(hawk.eat());// we can access the eat and sleep method form the parent constructor. it is added in the prototype itself.
console.log(hawk.sleep());// we can access the eat and sleep method form the parent constructor. it is added in the prototype itself.
console.log(hawk.fly())//the hawk is flying
// console.log(hawk.swims());// this will throw an error.
// console.log(hawk.hops());// this will throw an error.

// =================================================super=======================================================
// When a child class doesn’t have its own constructor, JavaScript automatically uses the parent class’s constructor.
// after the parent constructor finishes, JS applies all the class fields you defined (animal = "rabbit").
// If you don’t write a constructor → JavaScript automatically makes one that calls super() and then sets your class fields (animal = "rabbit"). because it our this.animals work in the console.log.
// If you write your own constructor → you must call super() yourself, otherwise this doesn’t exist yet.
// JavaScript does not force you to pass all the arguments.in super key word
// Any parameters you don’t provide will just be undefined in the parent.Only the ones you pass get assigned; the rest stay undefined. Rabbit { name: "Bunny", age: 2, type: undefined, color: undefined, weight: undefined, animal: "rabbit"}




// Think of a class like a blueprint for making objects.
// A blueprint itself isn’t a real object — it just tells you what properties and methods the object will have.
// When you use new ClassName(), JavaScript creates a real object based on that blueprint. This real object is called an instance of the class.

// 1️Class Basics
// A class is a blueprint for creating objects.
// Objects created from a class are called instances.
// Syntax:
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// this = the current object instance being created.
// Every time you use new Animal(...), a new instance is created.

// 2️Child Classes (Inheritance)
// class Rabbit extends Animal {
//   animal = "rabbit"; // class field
// }
// extends = child class inherits from parent class.
// If the child class doesn’t have its own constructor, JS auto-generates one:
// constructor(...args) {
//   super(...args); // call parent constructor
//   this.animal = "rabbit"; // apply class fields
// }

// 3️super()
// super(...) = calls the parent class constructor.
// Must call super() in a child class constructor before using this.
// Why? In derived classes, this does not exist until the parent constructor runs.
// You don’t have to pass all arguments; unpassed ones become undefined.
// parent => animal
// child => rabbit => class rabbit extends animal

// const bunny = new Rabbit("Bunny", 2);
// JS creates a new empty object in memory.
// This object will eventually become the Rabbit instance.
// But in a derived class (extends Animal), this cannot be used yet in the child constructor.
// JS “locks” it until the parent constructor (super()) runs.

// JS runs the parent constructor (Animal), passing the new empty object as this.
// Parent constructor sets properties like this.name = name and this.age = age.
// Only now, the object is initialized with the parent’s properties.

//------------- 1. new Rabbit() → JS creates empty object {}
//------------- 2. Child constructor starts → JS prevents access to `this`
//------------- 3. super() runs → parent constructor initializes object
//------------- 4. Now `this` is fully usable → child can set additional fields

// 4️Class Fields
// class Rabbit extends Animal {
//   animal = "rabbit";
// }
// Class fields are applied after the parent constructor finishes.
// They are automatically added to this.



