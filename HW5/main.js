//task 1

// let mentor = {  
//     course: "JS fundamental",  
//     duration: 3, 
//     direction: "web-development"  
// }; 

// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
// }

// console.log(propsCount(mentor));

//task 2

// const flat = {
//     bedroom: 30,
//     bathroom: 20,
//     kitchen: 10,
//     dining: 10,
//     corridor: 5
// };

// function showProps(obj) {
//     console.log(Object.keys(obj));
//     console.log(Object.values(obj));
// }

// showProps(flat);

//task 3

// class Person {
//     constructor(name, surname) {
//             this.name = name;
//             this.surname = surname;
//         };
//         showFullName() {
//             console.log(`${this.name} ${this.surname}`);
//                     };
// }

// const person1 = new Person("John", "Doe");
// person1.showFullName();

// const dateCurrent = new Date();
// const dateCurrentMonth = dateCurrent.getMonth();

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     };
//     showFullName(midleName) {
//         super.showFullName()
//         console.log(`${this.name} ${this.surname} ${midleName}`);
//     };
//     showCourse() {
//         let currentYear = new Date().getFullYear();
//         let currentCourse = currentYear - this.year;
//         if (currentCourse === 0) { return currectCourse = 1; 
//         } else if (currentCourse === 1 && dateCurrentMonth >= 9) {
//             return currentCourse += 1
//         } else if (currentCourse < 0 || currentCourse > 6) {
//             return currentCourse = "Person is not a student";
//         } else {
//             return currentCourse
//         };
//     }
// };

// const student1 = new Student("John", "Doe", 2020);

// console.log(student1.showCourse());
// console.log(student1.showFullName("Tarasovych"));

//task 4

// const everybody = [];

// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//             this.fullName = fullName;
//             this.dayRate = dayRate;
//             this.workingDays = workingDays;
//             everybody.push(this);
//     }
//             showSalary() {
//                 console.log(this.fullName + " Salary " + (this.dayRate * this.workingDays));
//             }

//             #experience = 1.2;

//             showSalaryWithExperience() {
//                 return (this.dayRate * this.workingDays * this.#experience);
//             };

//             set setExperience(a) {
//             return this.#experience = a;
//             };

//             get getExperience() {
//                 return this.#experience
//             };        

//             sortingSalaries(workersList) {
//                 let sortedSalary = workersList.sort(function (a, b) {
//                     return a.showSalaryWithExperience() - b.showSalaryWithExperience();
//                 });
//                 // console.log(sortedSalary);
//                 for (let i = 0; i < sortedSalary.length; i++) {
//                     console.log(sortedSalary[i].fullName + " : " + sortedSalary[i].showSalaryWithExperience());
//                 }
// }
// }

// worker1 = new Worker("John Johnsonovych", 1.5, 5);

// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.getExperience);
// console.log(worker1.fullName + " Salary: " + worker1.showSalaryWithExperience());
// worker1.setExperience = 1.5;
// console.log("New experience: " + worker1.getExperience);
// console.log(worker1.fullName + " Salary: " + worker1.showSalaryWithExperience());

// worker2 = new Worker("Mary Bloody", 5, 1);

// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: " + worker2.getExperience);
// console.log(worker2.fullName + " Salary: " + worker2.showSalaryWithExperience());
// worker2.setExperience = 1.5;
// console.log("New experience: " + worker2.getExperience);
// console.log(worker2.fullName + " Salary: " + worker2.showSalaryWithExperience());

// worker3 = new Worker("Chester Malibu", 20, 20);

// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: " + worker3.getExperience);
// console.log(worker3.fullName + " Salary: " + worker3.showSalaryWithExperience());
// worker3.setExperience = 1.5;
// console.log("New experience: " + worker3.getExperience);
// console.log(worker3.fullName + " Salary: " + worker3.showSalaryWithExperience());


// worker1.sortingSalaries(everybody)

//task 5

// class GeometricFigure {
//     getArea() {};
//     toString () {
//         return Object.getPrototypeOf(this).constructor.name;
//     };
// }

// class Triangle extends GeometricFigure {
//     constructor (side1, side2, side3) {
//         super();
//         this.side1 = side1;
//         this.side2 = side2;
//         this.side3 = side3;
//     };
//     getArea() {
//         super.getArea();
//         const halfPerimeter = (this.side1 + this.side2 + this.side3) /2
//         return Math.sqrt(halfPerimeter * (halfPerimeter - this.side1) * (halfPerimeter - this.side2) * (halfPerimeter - this.side3));
//     };
// }

// const triangle1 = new Triangle(2, 4, 5);
// const triangleS = triangle1.getArea()
// console.log(triangleS);

// class Square extends GeometricFigure {
//     constructor (side) {
//         super();
//         this.side = side;
//     };
//     getArea() {
//             super.getArea();
//             return this.side * this.side;
//         };
//     }

// const square1 = new Square(5);
// const squareS = square1.getArea()
// console.log(squareS);

// class Circle extends GeometricFigure {
//     constructor (radius) {
//             super();
//             this.radius = radius;
//         };
//         getArea() {
//             super.getArea();
//             return Math.PI * this.radius * this.radius;
//         };
//     }

// const circle1 = new Circle(5);
// const circleS = circle1.getArea()
// console.log(circleS);

// function handleFigure (figures) {
// return figures.reduce(function(sum, figure) {
// if (figure instanceof GeometricFigure); {
//         console.log(`Geometric Figure: ${figure.toString()} - area: ${figure.getArea()}`);
//         return sum + figure.getArea();
//     }
//       throw Error(`Does not belong to geometric figure`)
//     }, 0);
// }
// const figures = [new Triangle(2, 4, 5), new Square(5), new Circle(5)]
// console.log(handleFigure(figures));























