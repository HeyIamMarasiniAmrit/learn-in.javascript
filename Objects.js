//Real Life Objects, Properties, and Methods
//javaScript Objects
//You have already learned that JavaScript variables are containers for data values.
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object

//example1
let car = "Fiat";
console.log(car)

//example2

const Bike = {
    type:"Fiat", model:"500", color:"white"
};
console.log(Bike)


// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.log(person.firstName + " is " + person.age + " years old.");


  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
// example 4
const Manager = {
    name: "Karina",
    age: 27,
    job: "Software Engineer",
  };
  const Intern = {
    name: "Tyrone",
    age: 21,
    job: "Software Engineer Intern",
  };
  
  function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  // add sayHi function to both objects
  Manager.sayHi = sayHi;
  Intern.sayHi = sayHi;
  
  Manager.sayHi(); // Hello, my name is Karina
  Intern.sayHi(); // Hello, my name is Tyrone
  
