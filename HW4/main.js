//task 1

// function calcRectangleArea(width, height) {
//     width = Number(prompt("Enter the width of the rectangle: "));
//     height = Number(prompt("Enter the height of the rectangle: "));
//     if (isNaN(width) || isNaN(height)) {
//         throw new TypeError("Entered values are not numbers");
//     } else {
//     let result = width * height;
//     alert("The area of the rectangle is: " + result);
//     }
// }

// try {
//     calcRectangleArea();
// } catch (e) {
//     alert(e.message);
//     }

//task 2

// function checkAge(age) {
//     try {
//     age = prompt("Enter your age: ");
//     if (isNaN(age)) {
//         throw new TypeError("Entered value is not a number");
//     } else if (age === "") {
//         throw new Error ("You must enter a value");
//     } else if (age < 14) {
//         throw new RangeError("You are too young");
//     } else {
//         alert("You are old enough for watching the movie");
//     }
// } catch (exception) {
//     alert(exception.name + ": " + exception.message);
// }
// }

// checkAge();

//task 3

// class MonthException {
//     constructor(message) {
//         this.name = "MonthException";
//         this.message = message;
//         }
// }

// function showMonthName(month) {
//     try {
//     switch (month) {
//         case 1:
//             alert("January");
//             break;
//         case 2:
//             alert("February");
//             break;
//         case 3:
//             alert("March");
//             break;
//         case 4:
//             alert("April");
//             break;
//         case 5:
//             alert("May");
//             break;
//         case 6:
//             alert("June");
//             break;
//         case 7:
//             alert("July");
//             break;
//         case 8:
//             alert("August");
//             break;
//         case 9:
//             alert("September");
//             break;
//         case 10:
//             alert("October");
//             break;
//         case 11:
//             alert("November");
//             break;
//         case 12:
//             alert("December");
//             break;
//         default:
//             throw new MonthException("Incorrect Month Number");
//     }
// } catch (exception) { 
//     alert(exception.name + ": " + exception.message);
// }
// }

// showMonthName(76);

//task 4

// function showUser(n) {
//     this.id = n;
//     try {
//         if (this.id >= 0) {
//             let person = {id: this.id}
//             return person;
//         } else {
//             throw new Error("ID must not be negative");
//         }
//     } catch (exception) {
//         console.log(exception.name + ": " + exception.message + ": " + this.id);
//     }
// };

// showUser(-10);
// showUser(15);

// function showUsers(ids) {
//     let positiveArray = ids.map(showUser);
//     const filtered = positiveArray.filter(function(x) {
//         return x !== undefined;
//    });
//    console.log(filtered);
// }

// showUsers([-10, 15, 20, 1000, -100]);



