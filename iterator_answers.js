console.log("homework iterators");

//*****************ITERATORS*************************
// // copy of array and cant alter number of elements in array
//
// const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
//
// words.forEach(function (element) { // for each value of the array
//     console.log(element.toUpperCase()) // log the value in all caps
// });

//*****************MAP*************************
// map copies original array and you can select parts and modify w/o changing original
// cant alter number of elements in array
// map needs function and return statement

const more_words = ["Joe", "Overeats", "Eggs"];
const moreWordsAlternateCopy = more_words.map(function(element){
    return element[0]; // return each value of array (which is element) and element[0] means first letter of string
});
console.log(moreWordsAlternateCopy);

//*****************reduce*************************
// // reduce copies original array and reduces array to a single value
// const arr = [8, 8, 8, 8, 8, 8, 8, 8];
// let sum = arr.reduce((a,b)=> { return a + b});
// console.log(sum);

// or below
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(arr.reduce(reducer));

// *****************CHAINING*************************
// const sheepShearers = [
//     {
//         name: "Tim",
//         age: 20,
//         sheepCount: 18
//     },
//     {
//         name: "C3PO",
//         age: 200,
//         sheepCount: 320
//     },
//     {
//         name: "Cousin It",
//         age: Infinity,
//         sheepCount: 2900
//     }
// ];
// let sum = 0; // variable(box to hold value each time for loop iterates)
// for (i = 0; i < sheepShearers.length; i++) {
//    sum += sheepShearers[i].sheepCount; // store that value in sum and add the next value of sheepCount to sum on next iteration
// }
// console.log(sum);
