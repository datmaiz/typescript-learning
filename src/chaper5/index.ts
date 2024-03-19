{
	type Color = 'Black' | 'White'
	type ChessFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
	type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

	abstract class Piece {
		protected position: Position
		constructor(private readonly color: Color, file: ChessFile, rank: Rank) {
			this.position = new Position(file, rank)
		}

		moveTo(position: Position) {
			this.position = position
		}

		abstract canMoveTo(position: Position): boolean
	}

	class Position {
		constructor(private file: ChessFile, private rank: Rank) {}

		distanceFrom(position: Position) {
			return {
				rank: Math.abs(position.rank - this.rank),
				file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
			}
		}
	}

	class King extends Piece {
		canMoveTo(position: Position): boolean {
			let distance = this.position.distanceFrom(position)
			return distance.rank < 2 && distance.file < 2
		}
	}

	class Queen extends Piece {
		canMoveTo(position: Position): boolean {
			throw new Error('Method not implemented.')
		}
	}

	class Bishop extends Piece {
		canMoveTo(position: Position): boolean {
			throw new Error('Method not implemented.')
		}
	}

	class Knight extends Piece {
		canMoveTo(position: Position): boolean {
			throw new Error('Method not implemented.')
		}
	}

	class Rook extends Piece {
		canMoveTo(position: Position): boolean {
			throw new Error('Method not implemented.')
		}
	}

	class Pawn extends Piece {
		canMoveTo(position: Position): boolean {
			throw new Error('Method not implemented.')
		}
	}

	class Game {
		private pieces = Game.makePieces()
		private static makePieces() {
			return [
				// Kings
				new King('White', 'E', 1),
				new King('Black', 'E', 8),
				// Queens
				new Queen('White', 'D', 1),
				new Queen('Black', 'D', 8),
				// Bishops
				new Bishop('White', 'C', 1),
				new Bishop('White', 'F', 1),
				new Bishop('Black', 'C', 8),
				new Bishop('Black', 'F', 8),
			]
		}
	}

	class MySet {
		private values: number[]

		constructor() {
			this.values = []
		}

		add(value: number) {
			this.values.push(value)
			return this
		}

		has(value: number) {
			return this.values.includes(value)
		}

		delete(value: number) {
			this.values.filter(item => item !== value)
			return this
		}
	}

	type TSushi = {
		calories: number
		salty: boolean
		tasty: boolean
	}

	interface ISushi {
		calories: number
		salty: boolean
		tasty: boolean
	}

	// with type
	type TFood = {
		calories: number
		tasty: boolean
	}
	type MySTushi = TFood & {
		salty: boolean
	}
	type MyTCake = TFood & {
		sweet: boolean
	}

	// with interface
	interface Food {
		calories: number
		tasty: boolean
	}
	interface Sushi extends Food {
		salty: boolean
	}
	interface Cake extends Food {
		sweet: boolean
	}
}
{
	interface A {
		good(x: number): string
		bad(x: number): string
	}

	/*
	interface B extends A {
		good(x: string | number): string
		bad(x: string): string 
  } 
  */
	// Error TS2430: Interface 'B' incorrectly extends
	// interface 'A'. Type 'number' is not assignable
	// to type 'string'.
}

interface User {
	name: string
}
// User now has two fields, name and age
interface User {
	age: number
}
let a: User = {
	name: 'Ashley',
	age: 30,
}

interface Animals {
	eat(food: string): void
	sleep(hours: number): void
}
class Cats implements Animals {
	eat(food: string) {
		console.info('Ate some', food, '. Mmm!')
	}
	sleep(hours: number) {
		console.info('Slept for', hours, 'hours')
	}
}

class Zebra {
	trot() {
		// ...
	}
}
class Poodle {
	trot() {
		// ...
	}
}
function ambleAround(animal: Zebra) {
	animal.trot()
}
let zebra = new Zebra()
let poodle = new Poodle()
ambleAround(zebra) // OK
ambleAround(poodle) // OK tooa

let aa = 1999
function b() {}
// types
type aa = number
interface b {
	(): void
}

{
	class MyMap<K, V> {
		constructor(initialKey: K, initialValue: V) {
			// ...
		}
		get(key: K): V {
			// ...
		}
		set(key: K, value: V): void {
			// ...
		}
		merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
			// ...
			return this
		}
		static of<K, V>(k: K, v: V): MyMap<K, V> {
			// ...
		}
	}
}

class Payload {}

{
	@serializable
	class APIPayload {
		getValue(): Payload {
			// ...
			return new Payload()
		}
	}
}
let APIPayload = serializable(
	class APIPayload {
		getValue(): Payload {
			// ...
			return new Payload()
		}
	}
)

type ClassConstructor<T> = new (...args: any[]) => T
function serializable<
	T extends ClassConstructor<{
		getValue(): Payload
	}>
>(Constructor: T) {
	return class extends Constructor {
		serialize() {
			return this.getValue().toString()
		}
	}
}

class MessageQueue {
	private constructor(private messages: string[]) {}
}

// cant  use `extends` because it's not a class, but a type alias
class BadQueue extends MessageQueue {}

// cant new the class
new MessageQueue([])

type Shoe = {
	purpose: string
}
class BalletFlat implements Shoe {
	purpose = 'dancing'
}
class Boot implements Shoe {
	purpose = 'woodcutting'
}
class Sneaker implements Shoe {
	purpose = 'walking'
}

let Shoe = {
	create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
		switch (type) {
			case 'balletFlat':
				return new BalletFlat()
			case 'boot':
				return new Boot()
			case 'sneaker':
				return new Sneaker()
		}
	},
}

const shoe = Shoe.create('sneaker')

class RequestBuilder {
	private url: string | null = null
	private method: string = 'get'
	private data: any = null

	setURL(url: string): this {
		this.url = url
		return this
	}

	setMethod(methodName: 'get' | 'post' | 'put' | 'patch' | 'delete') {
		this.method = methodName
		return this
	}

	setData(data: any) {
		this.data = data
		return this
	}

	send() {
		this.data = null
		this.method = 'get'
		this.url = null
	}
}

new RequestBuilder().setURL('/users').setMethod('get').setData({ firstName: 'Anna' }).send()
