const student = {
  fullName: "nepal majhi",
  marks: 98.65,
  printMarks: () => {
    console.log(this.marks);
  },
};

// class
class ToyotaCar {
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }

  setBrand(brand) {
    this.brandName = brand;
  }
}

let newCar = new ToyotaCar();
newCar.setBrand("fortuner");

// Inheritance in JS
class Parent {
  hello() {
    console.log(this.hello);
  }
}

class child extends Parent {}
let obj = new child();

// Qs. You are creating a website for your college. create a class User with 2 properties, name & email. it also has a method called viewData() that allows user to view webiste data.
let DATA = "view webiste data";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data =", DATA);
  }
}

let newStudent0 = new User("Nepal", "mail@mail.com");
let newStudent1 = new User("Ram", "ram@mail.com");
let newStudent2 = new User("Shyam", "shyam@mail.com");

let teacher0 = new User("hari", "hari@mail.com");

// Qs. Create a new class called Admin which inherits from user. add a new method called editData to admin that allows it to edit website data.

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "edited website data";
  }
}

let admin = new User("admin", "admin@mail.com");
