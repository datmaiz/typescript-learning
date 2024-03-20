{
	function deleteUser(user: { id?: number; name: string }) {
		delete user.id
	}

	type LegacyUser = {
		id?: number | string
		name: string
	}

	let legacyUser: LegacyUser = {
		id: '793331',
		name: 'Xin Yang',
	}

	deleteUser(legacyUser)
}

{
	class Animal {}
	class Bird extends Animal {
		chirp() {}
	}
	class Crow extends Bird {
		caw() {}
	}

	function clone(f: (b: Bird) => Bird): void {
		// ...
	}

	function birdToBird(b: Bird): Bird {
		// ...
		return new Bird()
	}

	clone(birdToBird)

	function birdToCrow(d: Bird): Crow {
		// ...
		return new Crow()
	}
	clone(birdToCrow) // OK
	function birdToAnimal(d: Bird): Animal {
		// ...
		return new Animal()
	}
	clone(birdToAnimal)
}

{
	type Options = {
		baseURL: string
		cacheSize?: number
		tier?: 'prod' | 'dev'
	}

	class API {
		constructor(private options: Options) {}
	}

	new API({
		baseURL: 'https://api.mysite.com',
		tier: 'prod', // Error TS2345: Argument of type '{tierr: string}'
	}) // is not assignable to parameter of type 'Options'.

	new API({
		baseURL: 'https://api.mysite.com',
		badTier: 'prod',
	} as Options)
}

{
	type ResponseKeys = keyof APIResponse // 'user'
	type UserKeys = keyof APIResponse['user'] // 'userId' | 'friendList'
	type FriendListKeys = keyof APIResponse['user']['friendList'] // 'count' | 'friends'
}

{
	type Weekday = 'Mon' | 'Tue'
	type Day = Weekday | 'Sat' | 'Sun'
	let nextDay: Record<Weekday, Day> = {
		Mon: 'Tue',
	}

	let nextDay: { [K in Weekday]: Day } = {
		Mon: 'Tue',
	}
}

{
	function isString(a: unknown): a is string {
		return typeof a === 'string'
	}

	isString('a') // evaluates to true
	isString([7]) // evaluates to false

	function parseInput(input: string | number) {
		let formattedInput: string
		if (isString(input)) {
			formattedInput = input.toUpperCase()
		}
	}
}

{
	type ElementType<T> = T extends unknown[] ? T[number] : T
	type A = ElementType<number[]> // number

	type ElementType2<T> = T extends (infer U)[] ? U : T
	type B = ElementType2<number[]> // number
}

{
	type A = number | string
	type B = string
	type C = Exclude<A, B> // number
}

{
	type A = { a?: number | null }
	type B = NonNullable<A['a']> // number
}

{
	type F = (a: number) => string
	type R = ReturnType<F> // string
}

{
	type A = { new (): B }
	type B = { b: number }
	type I = InstanceType<A> // {b: number}
}

{
	type Dialog = {
		id?: string
	}
	function closeDialog(dialog: Dialog) {
		if (!dialog.id) {
			return
		}
		setTimeout(() => removeFromDOM(dialog, document.getElementById(dialog.id!)!))
	}
	function removeFromDOM(dialog: Dialog, element: Element) {
		element.parentNode!.removeChild(element)
		delete dialog.id
	}
}
