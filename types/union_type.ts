/**
 * 	Unions allow you to express that a value can be one of several types
 * 	You can declare a custom type based on two or more exsiting types.
 * 	For example, you can declare a variable of a type that can accpet either
 * 	a string value or a number (the vertical bar means 'union')
 *
 * 	if you need to declare a variable that can hold values of more than one type,
 * 	DO NOT USE the type 'any'; use a 'union'
 * 	Another choice is to declare two separate variables:
 * 	let paddingStr: string;
 * 	let paddingNum: number;
 **/

let padding: string | number;
