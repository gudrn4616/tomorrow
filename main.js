class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    
    static description() {
      return "This is a Person class.";
    }
  }

const person = new Person('Alice', 30);
person.greet(); // Hello, my name is Alice and I am 30 years old.

console.log(Person.description()); // This is a Person class.

class Employee extends Person {
    constructor(name, age, jobTitle) {
      super(name, age); // 부모 클래스의 constructor 호출
      this.jobTitle = jobTitle;
    }
  
    work() {
      console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
  }
  
  const employee = new Employee('Charlie', 28, 'Software Engineer');
  employee.greet(); // Hello, my name is Charlie and I am 28 years old.
  employee.work();  // Charlie is working as a Software Engineer.