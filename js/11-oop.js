// Methods in JavaScript
function personinfo(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const person = {
    name: "Ali",
    age: 25,
    greet: personinfo
};
person.greet();


// This and the window keyword
// Call Apply Bind Method