function total(...numbers: number[]) {
	return numbers.reduce((a, b) => a + b)
}

function* createFibonacciGenerator() {
	let a = 0
	let b = 1
	while (true) {
		yield a
		;[a, b] = [b, a + b]
	}
}

let fibonacciGenerator = createFibonacciGenerator() // IterableIterator<number>
fibonacciGenerator.next() // evaluates to {value: 0, done: false}
fibonacciGenerator.next() // evaluates to {value: 1, done: false}
fibonacciGenerator.next() // evaluates to {value: 1, done: false}
fibonacciGenerator.next() // evaluates to {value: 2, done: false}
fibonacciGenerator.next() // evaluates to {value: 3, done: false}
fibonacciGenerator.next() // evaluates to {value: 5, done: false}

let numbersInterator = {
	*[Symbol.iterator]() {
		for (let n = 1; n <= 10; n++) {
			yield n
		}
	},
}

type Greet = (name: string) => string

function greeting(greet: Greet, mgs: string) {
	greet(mgs)
}

type Filter<T> = {
	<T>(array: T[], func: (item: T) => boolean): T[]
}

// const filter: Filter<number> = ([1, 2, 3], (item) => {

// }) => {

// }
