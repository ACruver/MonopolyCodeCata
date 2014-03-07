define(function (require) {
    "use strict";

    var Player = require('player');

    function Game() {
        if ((arguments.length < 2) || (arguments.length > 8)) {
            this.validGame = false;
        }
        else {
            this.validGame = true;
        }

        this.player = [];

        for (var i = 0; i < arguments.length; i++) {
            this.player[i] = new Player(0, arguments[i]);
        }

        this.player = _.shuffle(this.player);

    }

    Game.prototype.order = function game_order() {
        var playerOrder = [];
        for (var i = 0; i < this.player.length; i++) {
            playerOrder.push(this.player[i].name);
        }
        return playerOrder;
    }

    return Game;
});