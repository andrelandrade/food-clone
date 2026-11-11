const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile('data/restaurants.json', 'utf8', (err, data) => {
        res.end(data)
    })
})

server.listen(3000)