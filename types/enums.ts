/**
 *  An enum keyword that can define a limited set of constants.
 *  Numeric enums
 **/
enum Weekdays {
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6,
	Sunday = 7,
}

/**
 * The enum below is the same same the enum above
 * This enum is automatically increment values
 * By default, enums are zero-based, so if we didn't initialize the Monday
 * member with 1, its value would be 0.
    enum Weekdays {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    } 
 */

const dayOff = Weekdays.Tuesday;
console.log(dayOff); // print 2 which is the value of Tuesday from the enum
console.log(Weekdays[3]); // print Wednesday which is the key of value 3 in the enum

/**
 * Use case
 */
enum Direction {
	FtoC,
	CtoF,
}

function convertTemperature(temp: number, fromTo: Direction): number {
	switch (fromTo) {
		case Direction.FtoC:
			return ((temp - 32) * 5.0) / 9.0;
		case Direction.CtoF:
			return (temp * 9.0) / 5.0 + 32;

		default:
			throw console.error("Direction should be either FtoC or CtoF.");
	}
}

console.log(`70F is ${convertTemperature(70, Direction.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, Direction.CtoF)}F`);

/**
 * String enums - members are initialized with strin values
 */

enum Direction {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

/**
 * String enums can be replaced with union types
 * type Direction = 'Up' | 'Down' | 'Left' | 'Right';
 **/

function move(direction: Direction) {}
move("North"); // compilation error˝

/**
 * An enum with the 'const' keyword
 * const enum Direction {
 *    UP = "Up"
 *    ...
 * }
 * No javascript code for enum Direction will be generated.
 * Also, getting key from the value isn't available.
 * eg. Weekdays[3] is not possible for enum with keyword 'const'
 */
