/**
 * Using generics
 * types can be parameterized - you can provide a type as a paramete
 * generics allow you to write functions that can work with a variety of types.
 * you can decalre a function that works with a generic type, and the concrete type
 * can be specified later by the caller of the function
 */

let lotteryNumbers: Array<number>;
/**
 * The above can be declared as below:
 * let lotteryNumbers: number[];
 */

class Person {
	name: string;
}

class Employee extends Person {
	department: number;
}

class Animal {
	breed: string;
}

const workers: Array<Person> = [];

workers[0] = new Person();
workers[1] = new Employee();
workers[2] = new Animal(); // compile-time error

const values3: Array<string | number> = ["Mary", 123, true]; // error
const values4: Array<string | number> = ["Joe", 123, 567]; // no errors

/**
 * Good use case for generic type
 * By using generic type, we can enforce the classes that are implement Comparator
 * to compare with only the same class
 */
interface Comparator<T> {
	compareTo(value: T): number;
}

class Rectangle implements Comparator<Rectangle> {
	compareTo(value: Rectangle): number {
		// the algorithm of comparing rectangles goes here
	}
}

class Triangle implements Comparator<Triangle> {
	compareTo(value: Triangle): number {
		// the algorithm of comparing triangles goes here
	}
}

/**
 * To use a generic type, you have to provide a concrete type.
 */

class A<T> {
	value: T;
}

class B extends A {
	// Compile error
}

/**
 * Adding the type any while using the class A would fix the error above
 */

class B extends A<any> {}

/**
 * Another way to fix the error above would be to specify a default parameter
 * while declaring the genric type.
 */
class A<T = any> {
	// declaring default parameter type
	value: T;
}

class B extends A {
	// No errors
}

/**
 * Instaed of 'any', you can specify another dummy type
 */
class A<T = {}> {}

/**
 * Generic functions
 */

function printMe<T>(content: T): T {
	console.log(content);
	return content;
}

const a = printMe("Hello");

class Person {
	constructor(public name: string) {}
}

const b = printMe(new Person("Joe"));

/**
 * Using generic types with arrow functions
 
    const printMe = <T> (content: T): T => {
        console.log(content);
    return content;
    }
    
    const a = printMe("Hello");
    
    class Person{
    constructor(public name: string) { }
    }
    
    const b = printMe(new Person("Joe"));
 */

class Pair<K, V> {
	constructor(public key: K, public value: V) {}
}

function compare<K, V>(pair1: Pair<K, V>, pair2: Pair<K, V>): boolean {
	return pair1.key === pair2.key && pair1.value === pair2.value;
}

const p1: Pair<number, string> = new Pair(1, "Apple");

const p2 = new Pair(1, "Orange");

// Comparing apples to oranges
console.log(compare<number, string>(p1, p2));

const p3 = new Pair("first", "Apple");

const p4 = new Pair("first", "Apple");

// Comparing apples to apples
console.log(compare(p3, p4));

/** Mapping String nums */

interface User {
	name: string;
	role: UserRole;
}

enum UserRole {
	Administrator = "admin",
	Manager = "manager",
}

function loadUser<T>(): T {
	return JSON.parse('{ "name": "john", "role": "admin" }');
}

const user = loadUser<User>();

switch (user.role) {
	case UserRole.Administrator:
		console.log("Show control panel");
		break;
	case UserRole.Manager:
		console.log("Hide control panel");
		break;
}

/**
 * generic type with higher-order function
 * higher-order function - a function can receive a function as an argument
 *                         or return another function
 */

// Higher-order function without generic type
const outerFunc = (someValue: number) => (multiplier: number) =>
	someValue * multiplier;

const innerFunc = outerFunc(10);

const result = innerFunc(5);

console.log(result);

// Higher-orde3r function with generic type
type numFunc<T> = (arg: T) => (c: number) => number;

const noArgFunc: numFunc<void> = () => (c: number) => c + 5;
const numArgFunc: numFunc<number> = (someValue: number) => (
	multiplier: number
) => someValue * multiplier;
const stringArgFunc: numFunc<string> = (someText: string) => (
	padding: number
) => someText.length + padding;

const createSumString: numFunc<number> = () => (x: number) => "Hello"; //error return type can't be string
