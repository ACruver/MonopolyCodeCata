/// <reference path="../../Scripts/require.js" />
/// <reference path="../../Scripts/underscore.js" />
/// <reference path="../../Scripts/jquery-2.1.0.js" />
/// <reference path="../../Scripts/Jasmine/jasmine.js" />

define(function (require) {
    "use strict";

    // Sample of how to import the classes/objects/etc
    var Player = require('player'),
        Board = require('board'),
        Game = require('game'),
        _ = require('underscore');

    require('jasmine');

    describe('User Acceptance Tests', function () {
        // TODO, update this based on your implementation.
        var board = new Board(),
            player1 = new Player(),
            player2 = new Player();

        beforeEach(function () {
            // some logic that gets executed before each test suite runs.
            // possibly need to reset player location? Create new board? etc.
            player1 = new Player(0);
        });

        describe('Player Movement', function () {

            it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', function () {
                expect(player1.movement(player1.location, 7)).toEqual(7);
            });

            it('Player on location numbered 39, rolls 6, ends up on location 5', function () {
                player1.location = 39;
                expect(player1.movement(player1.location, 6)).toEqual(5);
            });
        });

        describe('Game Players', function () {

            it('Create a game with two players named Horse and Car', function () {
                var game = new Game("Horse", "Car");
                var names = [game.player[0].name, game.player[1].name];
                expect(game.player[0].name !== game.player[1].name).toBe(true);
                expect(names).toContain('Horse');
                expect(names).toContain('Car');
            });

            it('Try to create a game with < 2 or > 8 players. When attempting to play the game, it will fail.', function () {
                var invalidGame = new Game("Horse");
                expect(invalidGame.validGame).toBe(false);
                invalidGame = new Game("a", "b", "c", "d", "e", "f", "g", "h", "i");
                expect(invalidGame.validGame).toBe(false);
            });

            it('Create a game with two players named Horse and Car. Within creating 100 games, both orders [Horse, Car] and [Car, Horse] occur', function () {
                var playerOrder = [];

                for (var i = 0; i < 100; i++) {
                    var game = new Game("Horse", "Car");
                    playerOrder.push(game.order());
                }

                expect(playerOrder).toContain(["Horse", "Car"]);
                expect(playerOrder).toContain(["Car", "Horse"]);
            });
        });
    });
});