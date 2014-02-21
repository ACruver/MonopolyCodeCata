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
        describe('Player Tests', function () {
            var player1 = new Player(),
                player2 = new Player();


            beforeEach(function () {
                // some logic that gets executed before each test suite runs.
                // possibly need to reset player location? Create new board? etc.
            });


        });

        describe('Board Tests', function () {
            var monopolyBoard = new Board();

        });
    });
});
