function getFinalPrice(price: number, discount: number) {
	return price - price / discount;
}

/**
 * Currect function invocation
 */
console.log(getFinalPrice(100, 10));

/**
 * Wrong function invocation, but the error will be shown during runtime only
 */
// console.log(getFinalPrice(100, "10%"));
