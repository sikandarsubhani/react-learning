//objects
//objects are a collection of key value pairs
//objects are used to store multiple values in a single variable
//objects are created using curly braces  

let student = {
    name: ' John',
    age: 25
};


//accessing object properties
console.log(student.name);
console.log(student.age);
//accessing object properties using bracket notation
console.log(student['name']);
console.log(student['age']);
//changing object properties
student.name = 'Jane';
console.log(student.name);
//adding new properties to object
student.country = 'USA';
console.log(student.country);
//deleting properties from object
delete student.country;
console.log(student.country);

student.hobbies = ['reading', 'swimming'];

//ietaing over object properties
for (let key in student) {
    console.log(key, student[key]);
}
//object.keys
console.log(Object.keys(student));

//object.values 
console.log(Object.values(student));


//create a fuction of simple flashcard 
//input 
// Question: "what is 2+2"
// Answer: 4
//output would be like this {question:"what is 2+2",answer:4}

function flashCard(question, answer) {
    let card = {
        Question: question,
        Answer: answer
    };
    return card;
}
let card = flashCard('what is 2+2', 4);
console.log(card);


let person = {
    name: 'sikandar',
    age: 23
}

person.greet();