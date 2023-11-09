//import json server library in index.js
const jsonServer = require('json-server')

//create server using json server library
const mediaPlayerServer = jsonServer.create() //server name is mediaPlayerServer

//create path to db.json
const router = jsonServer.router('db.json')

//to communicate json and js
// create middlewares to convert js to json 
const middleware = jsonServer.defaults()

//connect/use middleware and router with the server mediaplayerserver
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for the server //process.env.PORT is for at the time of hosting there will be a chance to use others the same port , so avoid conflict using this to select another port
const port = 5000 || process.env.PORT

//to listen server for resolving request
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaPlayerServer started at ${port} and ready to fetch request`);
})

