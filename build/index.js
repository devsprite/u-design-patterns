"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection_1 = require("./CharactersCollection");
var NumbersCollection_1 = require("./NumbersCollection");
var LinkedList_1 = require("./LinkedList");
var numbers = new NumbersCollection_1.NumbersCollection([1, 10, 5, 0, -1]);
numbers.sort();
console.log(numbers.data);
var characters = new CharactersCollection_1.CharactersCollection('Hi there');
characters.sort();
console.log(characters.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(232);
linkedList.add(21);
linkedList.add(-123);
linkedList.add(123);
linkedList.sort();
linkedList.print();
