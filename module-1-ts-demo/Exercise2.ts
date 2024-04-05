interface iPerson {
    name: string;
    age: number;
    email: string;
}

class Person implements iPerson {

    // Properties
    name: string;
    age: number;
    email: string;

    // Constructor
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Method
    sayHello(): void {
        console.log(`Hi, ${this.name}!!`);
    }
}

// Usage example
const person1 = new Person("Tester1", 10, "tester1@test.com");
const person2 = new Person("Tester2", 20, "tester2@test.com");
const person3 = new Person("Tester3", 30, "tester3@test.com");
const person4 = new Person("Tester4", 40, "tester4@test.com");
const person5 = new Person("Tester5", 50, "tester5@test.com");

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();