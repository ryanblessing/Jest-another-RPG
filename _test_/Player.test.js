const { expect, test } = require('@jest/globals');
const Player = require('../lib/Player');
const potion = require('../lib/_mocks_/potion');

/*Require line imports Potion constructor to the test,
establishes Potion as a usable variable so that new Potion doesn't throw a code 
and jest replaces the data with fake data for testing? */
jest.mock('../lib/Potion');

//this console log after the jest makes sure that it only imports
//the mocked data and not real data
//console.log(new potion());

test('creates a Player object', () => {
    const player = new Player('Ryan');

    expect(player.name).toBe('Ryan');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    //inventory should be a array containing a object
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

test("gets player's stats as an object", () => {
    const player = new Player('Ryan');

    //expectations for the player to have
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});



/*on player creation the inventory should have something in it, so the 
call should return a array.
simulate a empty array with the  player.inventory = [] before the expect statement
runs.*/
test("gets inventory from player or returns false", () => {
    const player = new Player('Ryan');

    expect(player.getInventory()).toEqual(expect.any(Array));
    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

