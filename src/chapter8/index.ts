import * as fs from 'fs'
import { readFile } from 'fs'

{
	function readFile(
		path: string,
		options: { encoding: string; flag?: string },
		callback: (err: Error | null, data: string | null) => void
	): void
}

{
	async1((err1, res1) => {
		if (res1) {
			async2(res1, (err2, res2) => {
				if (res2) {
					async3(res2, (err3, res3) => {
						// ...
					})
				}
			})
		}
	})
}

{
	function appendAndReadPromise(path: string, data: string): Promise<string> {
		return appendPromise(path, data)
			.then(() => readPromise(path))
			.catch(error => console.error(error))
	}
	function appendAndRead(path: string, data: string, cb: (error: Error | null, result: string | null) => void) {
		appendFile(path, data, error => {
			if (error) {
				return cb(error, null)
			}
			readFile(path, (error, result) => {
				if (error) {
					return cb(error, null)
				}
				cb(null, result)
			})
		})
	}
	type Executor<T, E extends Error> = (resolve: (result: T) => void, reject: (error: E) => void) => void
	class Promise<T, E extends Error> {
		constructor(f: Executor<T, E>) {}
		then<U, F extends Error>(g: (result: T) => Promise<U, F>): Promise<U, F>
		catch<U, F extends Error>(g: (error: E) => Promise<U, F>): Promise<U, F>
	}

	function readFilePromise(path: string): Promise<string> {
		return new Promise((resolve, reject) => {
			readFile(path, (error, result) => {
				if (error) {
					reject(error)
				} else {
					resolve(result)
				}
			})
		})
	}
}

{
	// promise
	function getUser() {
		getUserID(18)
			.then(user => getLocation(user))
			.then(location => console.info('got location', location))
			.catch(error => console.error(error))
			.finally(() => console.info('done getting location'))
	}

	async function getUser() {
		try {
			let user = await getUserID(18)
			let location = await getLocation(user)
			console.info('got location', user)
		} catch (error) {
			console.error(error)
		} finally {
			console.info('done getting location')
		}
	}
}
