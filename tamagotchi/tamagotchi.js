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
    },
    medicateTamagotchi(tamagotchi){
        // add and assin 1 to the parameter tomagotchi so can call with specified tomagotchi as argument later
        tamagotchi.health += 1;
    },
    knockOutTamagotchi(tamagotchi){
        // add and assign an increase of 1 to restedness of param tamagotchi to call with specific tamagotchi as argument later
        tamagotchi.restedness += 1;
    }
};
player.sayName();
player.feedTamagotchi();
// check if foodInTummy updated for both after calling method
console.log(tamagotchi1.foodInTummy);
console.log(tamagotchi2.foodInTummy);

// check tamagotchi1 health level before increasing
console.log(tamagotchi1.health);
// call method to increase health
player.medicateTamagotchi(tamagotchi1);
// check to see if health increased by 1
console.log(tamagotchi1.health);

// check restedness of tamagotchi1 before
console.log(tamagotchi1.restedness);
player.knockOutTamagotchi(tamagotchi1);
// check restedness of tamagotchi1 after
console.log(tamagotchi1.restedness);