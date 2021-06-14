// new potion function - name parameter and assign value of property to be random between 7-12
//logic for potion is health potion and its value is between 30-40


//Potion is capitalized because its the Constructor?
/*function Potion(name) {
    this.name = name;
//this is creating the 'health' potion under the constructor Potion
    if(this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}*/

//this Potion Conductor has two properties of name, and value
//refactored code for Potion function
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if(this.name ==='health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random()* 5 + 7);
    }
};

module.exports = Potion;