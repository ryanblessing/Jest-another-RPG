const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');
const player = require('./Player');

// added the current enemy and player here to define what game
//objects is inteded to have

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));

    this.currentEnemy = this.enemies[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })

        //deconstruct name from the prompt object
        .then(({
            name
        }) => {
            this.player = new Player(name);

            //test the object creation
            console.log(this.currentEnemy, this.player);
        });
};


module.exports = Game;