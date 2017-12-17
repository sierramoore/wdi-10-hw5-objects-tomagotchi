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
        //decrease health by one and store new value with -= operator
        this.health -= 1;
        console.log(this.name + " Bleeeh :0~~ My health is now " + this.health)
    },
    yawn(){
        //decrease restedness by one and store new value with -= operator
        this.restedness -=1;
        console.log(this.name + " Yaaaawwwn. My resetness is now " + this.restedness)
    }
};
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
        //decrease health by one and store new value with -= operator
        this.health -= 1;
        console.log(this.name + " Bleeeh :0~~ My health is now " + this.health)
    },
    yawn(){
        //decrease restedness by one and store new value with -= operator
        this.restedness -=1;
        console.log(this.name + " Yaaaawwwn. My resetness is now " + this.restedness)
    }
};
tamagotchi2.cry();
tamagotchi2.puke();
tamagotchi2.yawn();

let player = {
    name: "Jihiro",
    sayName(){
        console.log("Hi my name is: " + this.name)
    },
    feedTamagotchi(){
        // add one to foodInTummy on both tamagatchis and store the value with += operator
        tamagotchi1.foodInTummy += 1;
        tamagotchi2.foodInTummy += 1;
    }
};
player.sayName();
player.feedTamagotchi();
console.log(tamagotchi1.foodInTummy);
console.log(tamagotchi2.foodInTummy);