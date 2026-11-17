const http = require('http')
const readRestaurants = require('./modules/readRestaurants')

require('dotenv').config()

const restaurants = readRestaurants()

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    
    if (req.method === 'GET' && req.url === '/') {
        res.end('{ "message": "Welcome" }')
    } else if (req.method === 'GET' && req.url === '/restaurants') {
        res.end(JSON.stringify(restaurants))
    } else {
        res.writeHead(404)
        res.end('{ "status": "fail", "message": "Route not found" }')
    } 
})

server.listen(process.env.PORT)