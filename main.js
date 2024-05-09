/**
 Create a constructor function called CreateRoom. 
 It takes the person's name and assign it to a room variable. 
 After that, create a cleanRoom prototype function, 
 that uses this room variable and one additional variable, " soap," to console log the statement.
  Below is the class instance creation and calling the function.


const nabsRoom = new CreateRoom('Nabendu');

const shikhaRoom = new CreateRoom('Shikha');
nabsRoom.cleanRoom('Domex');

shikhaRoom.cleanRoom('Lizol');

The Output -

"Cleaning Nabendu's room with Domex"

"Cleaning Shikha's room with Lizol"
Also, convert the constructor function code to ES6 classes.
 */


//using constructor function
const createRoom = function (name) {
  this.room = `${name}'s room`;
};
createRoom.prototype.cleanRoom = function (soap) {
  console.log(`Cleaning ${this.room} with ${soap}`);
};

const sunilRoom = new createRoom("Sunil");
const chintuRoom = new createRoom("Chintu");

sunilRoom.cleanRoom("Domex");
chintuRoom.cleanRoom("Lizol");


