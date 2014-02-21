// TODO: This should be updated based on how you want to implement. 
// This sets up a simple "Player" class with no methods or properties.
// You can change this to implement however you want but beware you will
// need to update the sample tests as well. You may determine that a Board
// class is not even needed.

define(function () {
    "use strict";

    function Player(location) {
        this.location = location;
    }
    Player.prototype.Movement = function Player_Movement(location, movementNumber) {
        var finalLocation = (location + movementNumber) % 40;
        return finalLocation;
    }

    Player.prototype.Dice = function Player_Dice() {
        return _.sample([1, 2, 3, 4, 5, 6]);
    }

    Player.prototype.Roll = function Player_Roll() {
        var rollCount = this.Dice() + this.Dice();
        return rollCount;
    }
    return Player;
});