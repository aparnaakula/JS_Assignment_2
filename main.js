/* Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

function displayFavoriteFood(person) {
    for(const [key, value] of Object.entries(person)){
        console.log(value)
    }
}

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

displayFavoriteFood(person3);
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;

    Person.prototype.printInfo = () => {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
    Person.prototype.incrementAge = () => {
        this.age++;
    }
}
var josias = new Person('Josias', 26)
josias.printInfo()

var kevin = new Person('Kevin', 22)
kevin.printInfo()
kevin.incrementAge()
kevin.incrementAge()
kevin.incrementAge()
kevin.printInfo()

/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function strLength(str) {
    return new Promise((resolve, reject) => {
        if(str.length > 10){
            resolve("Big word")
        } else{
            reject("Small Number");
        }
    })
}

strLength("I love Ice cream")
    .then(result => console.log(result))
    .catch(error => console.log(error));

strLength("I like Pie")
    .then(result => console.log(result))
    .catch(error => console.log(error));