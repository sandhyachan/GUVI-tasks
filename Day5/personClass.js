// Write a “person” class to hold all the details

class Person{
    constructor(firstName, lastName, age, gender, occupation){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.occupation = occupation
        
    }

}

var person1 = new Person('Prince', 'William', 26, 'Male', 'Business Man')
console.log(person1)