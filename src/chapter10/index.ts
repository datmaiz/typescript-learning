import { a } from './a'
import defaultFunction from './a'
import * as everythingInA from './a'

import fs from 'fs'
fs.readFile('some/file.txt', 'base64', () => {})

everythingInA.a()

defaultFunction()

a()

Network.HTTP.get('google.com')
Network.TCP.listenOn(3060)

export * from './a'

// end of page 249
