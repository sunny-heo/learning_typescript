/**
 *	The never type is assigned to a function that never returns.
 *  One that either keeps running forever or that just throws an error.
 *  The arrow function in the enxt listing never returns, and the type
 * 	checker will infer (guess) its return type as never
 **/
const logger = () => {
	while (true) {
		console.log("The server is up and running");
	}
};
