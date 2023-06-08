//task 1

// let x = 1;
// let y = 2;
// let res1 = "" + x + y

// console.log(res1);
// console.log(typeof res1);

// let res2 = Boolean(x) + "" + y;

// console.log(res2)
// console.log(typeof res2);

// let res3 = Boolean(x)

// console.log(res3);
// console.log(typeof res3)

// let res4 = Math.sqrt(-x);

// console.log(res4);
// console.log(typeof res4);

//task 2

// const a = Number(prompt ("Please enter your number"));

//a

// if (a % 2 == 0) {
//       console.log("even number")
//   } else {
//     console.log("odd number")
//   };

  //b

// if (a % 7 == 0) {
//     console.log("good number");
// } else {
//     console.log("bad number")
// };

//task3

// const arr = []
// arr[0] = 2
// arr[1] = "Ira"
// arr[2] = true
// arr[3] = null

// console.log(arr.length)

// arr[4] = prompt ("Please enter something")
// alert(arr[4])

// arr.shift()

// alert(arr)

//task4

// let cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities.join('*'));
// console.log(typeof cities)

//task5

// const isAdult = Number(prompt ("Please enter your age"));

// if (isAdult >= 18) {
//     alert("You have reached the age");
// } else {
//     alert("You are too young")
// }

//task6

// const a = Number(prompt ("Please enter the length of the first side of triangle"));
// const b = Number(prompt ("Please enter the length of the second side of triangle"));
// const c = Number(prompt ("Please enter the length of the third side of triangle"));

//a

// const halfPerimeter = (a + b + c)/2 
// const s = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c))
 

// if (a + b < c) {
//     console.log("Incorrect Data");
// } else if (b + c < a) {
//     console.log("Incorrect Data");
// } else if (a + c < b) {
//     console.log("Incorrect Data");
// } else {
//     console.log(s.toFixed(3))
// }


//b

// if (c ** 2 == (a ** 2) + (b ** 2)) {
//     console.log("This is right triangle");
// } else if (a ** 2 == (b ** 2) + (c ** 2)); {
//     console.log("This is right triangle");
// } else if (b ** 2 == (a ** 2) + (c ** 2)) {
//     console.log("This is right triangle");
// } else {
//     console.log("This triangle is not right")
// }

//task 7

const d = new Date();
let hour = d.getHours();
console.log(hour)

if (hour >= 23 || hour <= 5) {
    console.log("Good night");
} else if (hour > 5 && hour < 11) {
    console.log("Good morning");
} else if (hour >= 11 && hour < 17) {
    console.log("Good day");
} else if (hour >= 17 && hour < 23) {
    console.log("Good evening");
} else {
    console.log("Invalid time")
}
