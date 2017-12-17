

//*************CLICKER******************************
// // make obj called clicker
// let clicker = {
//     clickCount: 0,
// // click method adds 1 to clickCount and keeps the value updated
//     click() {
//      ++this.clickCount;
//     }
// };
// //*****************ITS ALL ABOUT ME*************************
// let myInformation = {
//     name: "Sierra",
//     age: 23,
//     fact: "I love cats",
//     statement(){
//         return("My name is " + this.name + " and I am " + this.age + " years old and " + this.fact)
//     },
//     older(){
//         ++this.age;
//     },
//     nameChange(){
//         this.name = "Rumpelstiltskin"
//     }
// };
// myInformation.older();
// myInformation.nameChange();
// console.log(myInformation.name);

//*****************GREETER*************************
// let greeter = {
//     hello(name){
//         return("Why hello there, " + name)
//     },
//     goodbye(name){
//         return("Benos noche, " + name)
//     },
//     whoAreYou(name){
//         return("Oh right! " + name + " how could I forget...!")
//     }
// };
// console.log(greeter.hello("Luka"));
// console.log(greeter.goodbye("Luka"));
// console.log(greeter.whoAreYou("Luka"));

//*****************COLLECTING STRINGS*************************

// let stringCollector = {
//     collection: [],
//     collect(string){
//         let str = string.split("").reverse().join("");
//         this.collection.push(str);
//     },
//     admireCollection(){
//         for(i=0; i < this.collection.length; i++){
//             console.log(this.collection[i])
//         }
//
//     }
// };
// stringCollector.collect("one string");
// stringCollector.collect("blue string");
// stringCollector.admireCollection();


//*****************ATM*************************

// let atm ={
//     totalCash: 200,
//     dispenseTwenties(num){
//         if(this.totalCash >= num * 20){
//             return this.totalCash - num * 20;
//         } else{
//             return null;
//         }
//     }
// };
// atm.dispenseTwenties(6);

//*****************HUNGRY TURTLES*************************

// let leonardo = {
//     name: "Leonardo",
//     color: "Blue",
//     weapon: "Katana",
//     pizzaEaten: false,
//     eatPizza(){
//         if(this.pizzaEaten === true){
//             console.log("Leonardo has already eaten pizza")
//             this.pizzaEaten = false;
//         }else{
//             console.log("Leonardo is eating pizza");
//             this.pizzaEaten = true;
//         }
//     }
// };
// console.log(leonardo.eatPizza());

//*****************CALCULATOR*************************

// let calculator = {
//     output: 0,
//     // change output each time you call a math function
//     multiply(num1, num2) {
//         this.output = num1 * num2;
//     },
//     divide(num1, num2) {
//         this.output = num1 / num2;
//     },
//     addition(num1, num2){
//         this.output = num1 + num2;
//     },
//     subtract(num1, num2){
//         this.output = num1 - num2;
//     }
// };
// calculator.multiply(-10,2);
// console.log(calculator.output);
// calculator.divide(-2,8);





























