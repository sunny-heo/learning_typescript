/**
 * 	TypeScript allows you to create custom types with the 'type' keyword,
 * 	by declaring a class or an interface, or by declaring an enum.
 *
 * 	The 'type' keyword allows you to declare a new type or a type alias for
 * 	ans existing type.
 **/

// Decalring alias types Foot and Pound
type Foot = number;
type Pound = number;

// You can create a new 'Patient' type and use the preceding aliases in its declaration
// Declaring new type that uses aliases
type Patient = {
	name: string;
	height: Foot;
	weight?: Pound; // Make weight property optional
};

// Declaring and initializing a type's preoperties
let patient: Patient = {
	name: "Joe Smith",
	height: 5,
	weight: 100,
};

/**
 *	{ [key: string]: any } means an object that can have properties of
 *	any type, but the key has to be either type string or convertable to
 *	a string
 **/

type ValidatorFn = (c: FormControl) => { [key: string]: any } | null;

/**
 * 	The constructor of the FormControl can have a parameter for the validator
 * 	function, and it can use the custom ValidatorFn type as follows:
 **/

class FormControl {
	constructor(initialValue: string, validator: ValidatorFn | null) {}
}
