//using ES6 classes with constructor
class createRoom{
    constructor(name){
        this.room = `${name}'s room`;
    }

    cleanRoom(soap){
        console.log(`Cleaning ${this.room} with ${soap}`)
    }
}

const sunilRoom = new createRoom('Sunilg');
console.log(sunilRoom)
const akhilRoom = new createRoom('Akhilk');
sunilRoom.cleanRoom('Rin')
akhilRoom.cleanRoom('Dettol');