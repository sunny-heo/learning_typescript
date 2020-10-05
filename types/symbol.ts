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
const sym1 = Symbol("orderID");
const sym2 = Symbol("orderID");

// Symbols as object properties
const ord = Symbol("orderID");
const myOrder = {
	ord: "123",
};

console.log(myOrder["ord"]);
