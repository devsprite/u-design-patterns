"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numbers = new NumbersCollection_1.NumbersCollection([1, 10, 5, 0, -1]);
var sortNumbers = new Sorter_1.Sorter(numbers);
sortNumbers.sort();
console.log(numbers.data);
