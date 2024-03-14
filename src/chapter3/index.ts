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
