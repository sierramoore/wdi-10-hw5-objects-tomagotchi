console.log("--tamagachi--");

let tamagotchi1 = {
    name: "Starry",
    creatureType: "Dragon",
    foodInTummy: 10,
    restedness: 10,
    health: 10,
    cry(){
        // decrease foodInTummy by one and store new value with -= operator
        this.foodInTummy -= 1;
        console.log("Waaaaa!! My tummy is now " + this.foodInTummy + " full.")
    },
    puke(){
        console.log(this.name + " Bleeeh :0~~")
    },
    yawn(){
        console.log(this.name + " Yaaaawwwn")
    }
}
tamagotchi1.cry();
tamagotchi1.puke();
tamagotchi1.yawn();

let tamagotchi2 = {
    name: "Rainbow",
    creatureType: "Lizard",
    foodInTummy: 15,
    restedness: 15,
    health: 15,
    cry(){
        // decrease foodInTummy by one and store new value with -= operator
        this.foodInTummy -= 1;
        console.log("Waaaaa!! My tummy is now " + this.foodInTummy + " full.")
    },
    puke(){
        console.log(this.name + " Bleeeh :0~~")
    },
    yawn(){
        console.log(this.name + " Yaaaawwwn")
    }
}
tamagotchi2.cry();
tamagotchi2.puke();
tamagotchi2.yawn();