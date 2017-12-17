console.log("homework iterators");

//*****************ITERATORS*************************
// // copy of array and cant alter number of elements in array
//
// const words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
//
// words.forEach(function (element) {
//     console.log(element.toUpperCase())
// });

//*****************MAP*************************
// map copies original array and you can select parts and modify w/o changing original
// cant alter number of elements in array

const more_words = ["Joe", "Overeats", "Eggs"];
const moreWordsAlternateCopy = more_words.map(function(element){
    // console.log(element.toUpperCase())
    return element[0];
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
// let sum = 0;
// for (i = 0; i < sheepShearers.length; i++) {
//    sum += sheepShearers[i].sheepCount;
// }
// console.log(sum);

