{
	function ask() {
		return prompt('When is your birthday?')
	}

	function parse(birthday: string): Date | null {
		let date = new Date(birthday)
		if (!isValid(date)) {
			return null
		}
		return date
	}

	// Checks if the given date is valid
	function isValid(date: Date) {
		return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
	}
	let date = parse(ask()!)
	if (date) {
		console.info('Date is', date.toISOString())
	} else {
		console.error('Error parsing date for some reason')
	}
}

{
	function ask() {
		return prompt('When is your birthday?')
	}

	function isValid(date: Date) {
		return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
	}

	// function parse(birthday: string): Date {
	// 	let date = new Date(birthday)
	// 	if (!isValid(date)) {
	// 		throw new RangeError('Enter a date in the form YYYY/MM/DD')
	// 	}
	// 	return date
	// }

	try {
		let date = parse(ask())
		console.info('Date is', date.toISOString())
	} catch (e) {
		console.error(e)
	}

	try {
		let date = parse(ask())
		console.info('Date is', date.toISOString())
	} catch (e) {
		if (e instanceof RangeError) {
			console.error(e.message)
		} else {
			throw e
		}
	}

	class InvalidDateFormatError extends RangeError {}
	class DateIsInTheFutureError extends RangeError {}
	function parse(birthday: string): Date {
		let date = new Date(birthday)
		if (!isValid(date)) {
			throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
		}
		if (date.getTime() > Date.now()) {
			throw new DateIsInTheFutureError('Are you a timelord?')
		}
		return date
	}
	try {
		let date = parse(ask()!)
		console.info('Date is', date.toISOString())
	} catch (e) {
		if (e instanceof InvalidDateFormatError) {
			console.error(e.message)
		} else if (e instanceof DateIsInTheFutureError) {
			console.info(e.message)
		} else {
			throw e
		}
	}
}

{
	class InvalidDateFormatError extends RangeError {}
	class DateIsInTheFutureError extends RangeError {}

	function isValid(date: Date) {
		return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
	}

	function parse(birthday: string): Date {
		let date = new Date(birthday)
		if (!isValid(date)) {
			throw new RangeError('Enter a date in the form YYYY/MM/DD')
		}
		return date
	}
}

{
	function isValid(date: Date) {
		return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime())
	}

	function parse(birthday: string): Date[] {
		let date = new Date(birthday)
		if (!isValid(date)) {
			return []
		}
		return [date]
	}

	function ask() {
		let result = prompt('When is your birthday?')
		if (result === null) {
			return []
		}
		return [result]
	}
	// ...
	ask()
		.map(parse)
		.map(date => date.toISOString())
		// Error TS2339: Property 'toISOString' does not exist on type 'Date[]'.
		.forEach(date => console.info('Date is', date))

	function flatten<T>(array: T[][]): T[] {
		return Array.prototype.concat.apply([], array)
	}

	flatten(ask().map(parse))
		.map(date => date.toISOString())
		.forEach(date => console.info('Date is', date))

	ask()
		.flatMap(parse)
		.flatMap(date => new Some(date.toISOString()))
		.flatMap(date => new Some('Date is ' + date))
		.getOrElse('Error parsing date for some reason')

	interface Option<T> {
		flatMap<U>(f: (value: T) => Option<U>): Option<U>
		getOrElse(value: T): T
	}
	class Some<T> implements Option<T> {
		constructor(private value: T) {}
		flatMap<U>(f: (value: T) => Option<U>): Option<U> {
			throw new Error('Method not implemented.')
		}
		getOrElse(value: T): T {
			throw new Error('Method not implemented.')
		}
	}

	class None implements Option<never> {
		flatMap<U>(f: (value: never) => Option<U>): Option<U> {
			throw new Error('Method not implemented.')
		}
		getOrElse(value: never): never {
			throw new Error('Method not implemented.')
		}
	}
}
// end page 192
