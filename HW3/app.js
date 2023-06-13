//task1 - for

// const mass = [2, 3, 4, 5];
// let total = 1
// for (let i in mass) {
//     total *= mass[i];
// };

// console.log(total)

//task1 - while

// const mass = [2, 3, 4, 5];
// let total = 1
// let i = 0
// while (i < mass.length) {
//     total *= mass[i];
//     i++
// }
// console.log(total)

//task2

// for (let count = 0; count < 16; count++) {
//    if (count % 2 === 0)  {
//     alert(count + " is even");
//    }  else {
//     alert(count + " is odd");
//    }
// }

//task 3

// let box = [];

// function randArray (k) {
//     for (let i = 0; i < k; i++){
//         box.push(Math.floor(Math.random()*500))
//     };
// };

// randArray (10);
// console.log(box);

//task4

// function raiseToDegree (a,b) {
//     a = parseInt(prompt("Please enter the number"));
//     b = parseInt(prompt("Please enter the degree"));
//     console.log(a ** b);
// }

// raiseToDegree()

//task 5


// function finMin () {
//     let result = 0;
//     result = Math.min(...arguments);
//     console.log(result);
// };

// finMin(13, 5.5, -6, -7.4, 100)

//task 6

// function findUnique (arr) {
//     console.log((new Set(arr)).size === arr.length);
// }

// findUnique ([1, 3, 5, 5]);

//task 7

// function lastElem (arr, b) {
//     if (b === undefined) {
//         b = 1;
//     }
//     if (b > arr.length) {
//         b = arr.length
//     }
//     let result = arr.slice(-b);
//     console.log(result);
// }

// lastElem([5,7,1,5,6,772, 65, -4], 10);

//task 8

// function toTitleCase(str) {
//     const titleCase = str
//       .split(' ')
//       .map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       })
//       .join(' ');
  
//     return titleCase;
//   }
  
//   console.log(toTitleCase('i love js'));






