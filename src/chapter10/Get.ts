namespace Network {
	export namespace HTTP {
		export function get<T>(url: string): Promise<T> {
			return new Promise<T>((res, rej) => {})
		}
	}

	export namespace TCP {
		export function listenOn(port: number) {
			console.log(`The port is listening on port ${port}`)
		}
	}
}
