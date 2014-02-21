/// <reference path="../monopoly.js" />
/// <reference path="../../Scripts/Jasmine/jasmine.js" />
/// <reference path="../../Scripts/underscore.js" />


define(function(require) {
    "use strict";

    var Player = require('player'),
        Board = require('board'),
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
                expect(player1.Movement(1, 3)).toEqual(4);
            });

            it('Expect Dice to return a number between 1 and 6, ', function () {
                expect(player1.Dice()).toBeLessThan(7);
                expect(player1.Dice()).toBeGreaterThan(0);
            });

            it('Expect Roll to return a number between 2 and 12, ', function () {
                expect(player1.Roll()).toBeLessThan(13);
                expect(player1.Roll()).toBeGreaterThan(1);
            });
        });

        describe('Board Tests', function () {
            var monopolyBoard = new Board();

        });
    });
});
