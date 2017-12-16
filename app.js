console.log("homework due mon");

//*************CLICKER******************************
// make obj called clicker
let clicker = {
    clickCount: 0,
// click method adds 1 to clickCount and keeps the value updated
    click() {
     ++this.clickCount;
    }
};
//*****************ITS ALL ABOUT ME*************************
let myInformation = {
    name: "Sierra",
    age: 23,
    fact: "I love cats",
    statement(){
        return("My name is " + this.name + " and I am " + this.age + " years old and " + this.fact)
    },
    older(){
        ++this.age;
    },
    nameChange(){
        this.name = "Rumpelstiltskin"
    }
};
myInformation.older();
myInformation.nameChange();
console.log(myInformation.name);
