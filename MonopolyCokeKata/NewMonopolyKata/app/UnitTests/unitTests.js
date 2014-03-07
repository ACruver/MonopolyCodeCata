/// <reference path="../monopoly.js" />
/// <reference path="../../Scripts/Jasmine/jasmine.js" />
/// <reference path="../../Scripts/underscore.js" />

define(function(require) {
    "use strict";

    var Player = require('player'),
        Board = require('board'),
        Game = require('game'),
        _ = require('underscore');

    require('jasmine');

    describe('Unit Tests', function () {

        beforeEach(function () {
                // some logic that gets executed before each test suite runs.
                // possibly need to reset player location? Create new board? etc.
        });

        describe('Player Tests', function () {
            var player1 = new Player(),
                player2 = new Player();

            it('Expect Location to be 4, ', function () {
                expect(player1.movement(1, 3)).toEqual(4);
            });

            it('Expect Dice to return a number between 1 and 6, ', function () {
                expect(player1.dice()).toBeLessThan(7);
                expect(player1.dice()).toBeGreaterThan(0);
            });

            it('Expect Roll to return a number between 2 and 12, ', function () {
                expect(player1.roll()).toBeLessThan(13);
                expect(player1.roll()).toBeGreaterThan(1);
            });
        });

        describe('Board Tests', function () {
            var monopolyBoard = new Board();

        });

        describe('Game Tests', function () {
            var game = new Game("Horse", "Car");

            it('Expect the new created game to have players'), function () {
                expect(game.player).toBeDefined;
            }

            it('Expect the new created game to have 2 players'), function () {
                expect(game.player.length).toBe(2);
            }

            it('Expect the new created game to have players with names'), function () {
                expect(game.player[0].name).toBeDefined;
            }

            it('Expect the new created game to be a valid game'), function () {
                expect(game.validGame).toBe(true);
            }

            it('Expect the new created game to randomize the player orders'), function () {
                expect(game.order).toContain(["Horse", "Car"] || ["Car", "Horse"]);
            }

        });
    });
});
