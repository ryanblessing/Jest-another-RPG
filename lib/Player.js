const Potion = require("./Potion");

//player name empty to be able to put in user input?---default parameters MDN web DOCS
function Player(name = '') {
    this.name = name;
    
    this.health = Math.floor(Math.random() * 10+ 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    /*Calling new Potion() here used mocked version during the test.
    That means it only generates 2 health potions with a value of 20
    (_mocks_)
    */
    this.inventory = [new Potion('health'), new Potion()];
}
 //prototype method 10.2.7- to get inventory and stats 
 Player.prototype.getStats = function () {
     return {
         potions: this.inventory.length,
         health: this.health,
         strength: this.strength,
         agility: this.agility
     };
 };

 Player.prototype.getInventory = function() {
     if(this.inventory.length) {
         return this.inventory;
     } 
     return false;
 };
 
// This function created a new player object -"Ryan",
//that has 4 properties of name, health, strength and agility

module.exports = Player;