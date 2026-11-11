const fs = require('fs')

fs.readFile('data/restaurants.json', 'utf-8', (err, data) => {
    console.log('async fileRead')
    console.log(data)
})

console.log('sync fileRead')
const teste = fs.readFileSync('data/restaurants.json', 'utf-8')
console.log(teste)