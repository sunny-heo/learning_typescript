/**
 * 	Type Widening
 * 	if you decalre a variable without initializing it with a specific value,
 * 	TypeScript uses the internal types null or undefined, which are converted
 * 	to 'any'. This is called 'type widening'.
 *
 * 	The value of following variable would be undefined.
 * 	The Typescript complier applies type widening ans assigns the type 'any' to
 * 	null and undefined values. Hence, the type of the productId variable is 'any'.
 **/

let productId;
productId = null;
productId = undefined;
