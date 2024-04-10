import * as fs from 'fs'

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
}
