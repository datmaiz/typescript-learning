function doubleNumber(n: number): number {
	return n * 2
}

console.log(doubleNumber(10))

function printAnything(anything: any) {
	console.log(anything)
}

printAnything('hello mashle')

const trueValue: boolean = 1 + 2 === 3

console.log(trueValue)

let bigInt: bigint = 1234n

console.log(bigInt)

const string: String = 'I am a string'

console.log(string)

let symbol: symbol = Symbol('a')

const student = {
	firstName: 'firstname',
	lastName: 'lastname',
}

const person: { firstName: string; lastName: string } = { firstName: 'myFirstName', lastName: 'myLastName' }

class Person {
	constructor(public firstName: string, public lastName: string) {
		this.firstName = firstName
		this.lastName = lastName
	}
}

const newPerson = new Person('firstname', 'lastname')

const myObject: { job?: string; name: string } = {
	name: 'Mashle',
}

type Level = string

const minLevel: Level = 'Low'

type Cat = { name: string; purrs: boolean }
type Dog = { name: string; barks: boolean; wags: boolean }

type Animal = Cat | Dog
type OrtherAnimal = Cat & Dog

const numbers: number[] = [1, 2, 3, 4, 5]
const animals: Animal[] = []

const somethings: [number, number?][] = [[1, 2], [6]]
