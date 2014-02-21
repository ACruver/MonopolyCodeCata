/// <reference path="../scripts/require.js" />

requirejs.config({
    baseUrl: 'app', 
    paths: {
        jquery: '../Scripts/jquery-2.1.0.min',
        underscore: '../Scripts/underscore',
        jasmine: '../Scripts/jasmine/jasmine',
        'jasmine-html': '../Scripts/jasmine/jasmine-html',
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'jasmine-html': {            
            deps: ['jasmine']
        }
    }
    //, urlArgs: '_ts=' + (new Date()).getTime()
});

define(['jquery', 'underscore', 'jasmine', 'jasmine-html', 'UnitTests/acceptanceTests', 'UnitTests/unitTests'], function ($, _) {
    
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    jasmine.VERBOSE = true;

    // debugger;
    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function (spec) {
        return htmlReporter.specFilter(spec);
    };

    $(function () {
        jasmineEnv.execute();        
    });
});