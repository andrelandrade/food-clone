const fs = require('fs')

module.exports = () => {
  return JSON.parse(fs.readFileSync('data/restaurants.json', 'utf8'))
}
