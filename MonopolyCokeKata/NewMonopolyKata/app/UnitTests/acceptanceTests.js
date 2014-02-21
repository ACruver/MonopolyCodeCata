/// <reference path="../../Scripts/require.js" />
/// <reference path="../../Scripts/underscore.js" />
/// <reference path="../../Scripts/jquery-2.1.0.js" />
/// <reference path="../../Scripts/Jasmine/jasmine.js" />


define(function (require) {
    "use strict";

    // Sample of how to import the classes/objects/etc
    var Player = require('player'),
        Board = require('board'),
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
        });

        describe('Player Movement', function () {

            it('Player on beginning location (numbered 0), rolls 7, ends up on location 7', function () {

            });

            it('Player on location numbered 39, rolls 6, ends up on location 5', function () {

            });
        });
    });
});