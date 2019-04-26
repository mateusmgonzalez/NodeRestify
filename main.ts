import {Server} from './server/server'
import { usersRouters } from './users/users.router';


const server = new Server()

server.bootstrap([usersRouters]).then(server => {
    console.log('Server is listening on:', server.application.address())
}).catch(error => {
    console.log('Server failed to start')
    console.log(error)
    process.exit(1)
})