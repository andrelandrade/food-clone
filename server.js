const http = require('http')
const fs = require('fs')

const restaurants = JSON.parse(fs.readFileSync('data/restaurants.json', 'utf8'))

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

server.listen(3000)