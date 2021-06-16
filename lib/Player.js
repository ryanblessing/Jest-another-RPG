const Potion = require("./Potion");

//player name empty to be able to put in user input?---default parameters MDN web DOCS
function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    /*Calling new Potion() here used mocked version during the test.
    That means it only generates 2 health potions with a value of 20
    (_mocks_)
    */
    this.inventory = [new Potion('health'), new Potion()];
}
// This function created a new player object -"Ryan",
//that has 4 properties of name, health, strength and agility

//prototype method 10.2.7- to get inventory and stats 
Player.prototype.getStats = function () {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function () {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

Player.prototype.getHealth = function () {
    return ` ${this.name} health is now ${this.health}!`;
};

Player.prototype.isAlive = function () {
    if (this.health === 0) {
        return false;
    } else {
        return true;
    }
};

Player.prototype.reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
        this.health = 0;
    }
};

//created the variable for max and min to be more easily understandable if we need to come back eventually
Player.prototype.getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
};

//need to add potion to the function  so that the game knows where to 
//push the potion too?
Player.prototype.addPotion = function (potion) {
    this.inventory.push(potion);
};

/*-Index is used to to keep track of which potion is selected
-splice() removed items from the array and returned the removed item(s)
as a new array.
-switch/case with the this. property are how we can take from a potion and put it 
towards one of our values*/
Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch(potion.name) {
        case 'agility':
        this.agility += potion.value;
        break;
        case 'health':
        this.health+= potion.value;
        break;
        case 'strength':
        this.strength += potion.value;
        break;
    }
};


module.exports = Player;