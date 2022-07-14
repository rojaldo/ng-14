"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var year = 1990;
var year$ = (0, rxjs_1.of)(year);
year$.pipe((0, operators_1.filter)(function (y) { return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0; }), (0, operators_1.count)()).subscribe(function (y) { return console.log(y); });
