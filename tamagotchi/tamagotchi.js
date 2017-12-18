console.log("--tamagachi--");

const setInterval = {

    // tamgochi.cry needs to be inside another function bkus tamagotchi.cry is a method
    // and serInterval expects a regular function when u give it a method it will still call it as a regular function and will loose the object info.
    // function after setInterval is like a proxy frunction will call tomagotchi cry
    //same as -----
    // hungerTimer(tamagotchi){
    //     let proxyFunction = function(){
    //         tamagotchi.cry()
    //     }
    //     window.setInterval(proxyFunction, 6000)
    // } --------
    // make tamagotchi cry every 6 sec
    hungerTimer(tamagotchi){
        window.setInterval(function(){tamagotchi.cry()}, 6000)
    },
    // make tamagotchi yawn every 10 sec
    yawnTimer(tamagotchi){
        window.setInterval(function(){tamagotchi.yawn()}, 10000)
    },
    // make tamagotchi puke every 25 sec
    sickTimer(tamagotchi){
        window.setInterval(function(){tamagotchi.puke()}, 25000)
    }
};
// setInterval.hungerTimer(tamagotchi1);
// setInterval.yawnTimer(tamagotchi1);
// setInterval.sickTimer(tamagotchi1);


let tamagotchi1 = {
    name: "Starry",
    creatureType: "Dragon",
    foodInTummy: 10,
    restedness: 10,
    health: 10,
    cry(){
        // decrease foodInTummy by one and store new value with -= operator
        this.foodInTummy -= 1;
        console.log(this.name + " Waaaaa!! My tummy is now " + this.foodInTummy + " full.")
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
    },
    start() {
        setInterval.hungerTimer(this);
        setInterval.yawnTimer(this);
        setInterval.sickTimer(this);
    }
};
tamagotchi1.start();
// tamagotchi1.cry();
// tamagotchi1.puke();
// tamagotchi1.yawn();

let tamagotchi2 = {
    name: "Rainbow",
    creatureType: "Lizard",
    foodInTummy: 15,
    restedness: 15,
    health: 15,
    cry(){
        // decrease foodInTummy by one and store new value with -= operator
        this.foodInTummy -= 1;
        console.log(this.name + " Waaaaa!! My tummy is now " + this.foodInTummy + " full.")
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
    },
    start() {
        setInterval.hungerTimer(this);
        setInterval.yawnTimer(this);
        setInterval.sickTimer(this);
    }
};
tamagotchi2.start();
// tamagotchi2.cry();
// tamagotchi2.puke();
// tamagotchi2.yawn();

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
// player.sayName();
// player.feedTamagotchi();
// // check if foodInTummy updated for both after calling method
// console.log(tamagotchi1.foodInTummy);
// console.log(tamagotchi2.foodInTummy);
//
// // check tamagotchi1 health level before increasing
// console.log(tamagotchi1.health);
// // call method to increase health
// player.medicateTamagotchi(tamagotchi1);
// // check to see if health increased by 1
// console.log(tamagotchi1.health);
//
// // check restedness of tamagotchi1 before
// console.log(tamagotchi1.restedness);
// player.knockOutTamagotchi(tamagotchi1);
// // check restedness of tamagotchi1 after
// console.log(tamagotchi1.restedness);

//globally set timer for tamagotchis to decrease their health, foodInTummy, and restfullness
// added name to console log when both tamagatchis cry to test





































