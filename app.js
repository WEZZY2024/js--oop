'use strict'
// const Person = {
//     name : 'wezzy',
//     age : 25,
//     greet(){
//         console.log(`hello my name is ${this.name}`)
//     }
// };
// console.log(Person.name);
// Person.greet();



//using objects constructor javascript
// const person = new Object();
// person.name = 'wezzy';
// person.age = 15;
// console.log(person.name);

//javascript Prototypes - the Foundation of OOP

// function  Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// //adding a method to the prototype
// Person.prototype.greet = function(){
//     console.log(`Hello , my name is ${this.name}`);
// }
//
// const wezzy = new Person('wezzy',25);
// wezzy.greet();
// console.log(wezzy.__proto__ === Person.prototype);

//Constructor Function - creating Multiple objects

// function Car(brand,model,year){
//     this.model = model;
//     this.year = year;
//     this.brand = brand;
// }
// Car.prototype.getDetails = function(){
//     return `${this.model} ${this.brand} ${this.year}`;
// };
//
// const  car1 = new Car('Tesla ', 'model s' , 2025);
// console.log(car1.getDetails());

//ES6 Classes - A cleaner Approach to OOP

// class Animal {
//     constructor(name,sound) {
//         this.name = name;
//         this.sound = sound;
//     }
//     makeSound() {
//         console.log(`${this.name} makes a ${this.sound} sound.`);
//     }
// }
//
// //Inheritance - Reusing Code Across Classes
//
// class Dog extends Animal {
//     constructor(name,breed) {
//         super(name,'bark'); // call parent class constructors
//         this.breed = breed;
//     }
//     showBreed(){
//         console.log(`${this.name} is a ${this.breed} breed.`);
//     }
// }
// const MyDog = new Dog('buddy','Golden retriever');
// MyDog.makeSound();
// MyDog.showBreed();

//Getters and Setters - Controlling Property Access
//get and st allow controlled access to object properties.
//
// class User {
//     constructor(name,age) {
//         this._name = name;
//         this._age = age;
//     }
//     get name() {
//         return this._name;
//     }
//     get age() {
//         return this._age;
//     }
//     set age(newAge){
//         if (newAge < 18){
//             console.log('Age must be 18 or older');
//         }else {
//             this._age = newAge;
//         }
//     }
// }
//
// const user = new User('wezzy',25);
// console.log(user.name);
// user.age = 30; // ( updated successfully)
//
//
// console.log(user.age);



// learning
//
// const Person = {
//     firstName  : 'wezzy',
//     LastName : 'Ngulube',
//     age : 20
//
// }
//
// Person.prototype.fullName = function() {
//         return `${this.firstName}`
// }
// console.log(Person.fullName());

// const Person = new Object();
// Person.firstName = 'John';
// Person.lastName = 'Doe';
// console.log(Person.firstName + ' ' + Person.lastName);

// function Person(name,age){
//     this.name=name
//     this.age=age
// }
//
// Person.prototype.fullName = function ()  {
//     return `${this.name} ${this.age}`;
// }
//
// const  person = new Person('wezzy',10);
//
// console.log(person.fullName());


// function Car(brand,model,year){
//     this.model = model;
//     this.year = year;
//     this.brand = brand;
// }
// Car.prototype.getDetails = function(){
//     return `${this.model} ${this.brand} ${this.year}`;
// };
//
// const  car1 = new Car('Tesla ', 'model s' , 2025);
// console.log(car1.getDetails());

class Person {
    constructor(firstName, lastName,age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    greet(){
        console.log(`Hello ${this.firstName} ${this.lastName} and your age is ${this.age}`)
    }
}
class Baby extends Person {
    constructor(sing) {
        super('wezzy','ngulube',25);
        this.sing = sing;
    }
}

const person = new Person('wezzy','ngulube',58);
const baby = new Baby('song');
console.log(baby.firstName)
console.log(baby.lastName )

