"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
console.log(lodash_1.trimEnd('Hello Typescript////', '/'));
function a() { }
exports.a = a;
var SuperNote = /** @class */ (function () {
    function SuperNote(name, content, author) {
        this.name = name;
        this.content = content;
        this.author = author;
    }
    return SuperNote;
}());
exports.SuperNote = SuperNote;
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var newNote = new SuperNote('name', 'content');
