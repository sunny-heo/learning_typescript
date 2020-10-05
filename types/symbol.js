/**
 * Starting with ECMAScript 2015, symbol is a primitive data type
 * that is alwyas unique and immutable.
 *
 * When you create a new symbol (note the absence of the new keyword),
 * you can optionally provide its description, such as orderID.
 *
 * Symbols are typically used to create unique keys for object properties
 *
 **/
// sym1 !== sym2
var sym1 = Symbol("orderID");
var sym2 = Symbol("orderID");
// Symbols as object properties
var ord = Symbol("orderID");
var myOrder = {
    ord: "123",
};
console.log(myOrder["ord"]);
