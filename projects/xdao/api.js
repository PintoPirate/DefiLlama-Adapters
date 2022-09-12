const { getExports } = require('../helper/heroku-api')
const indexExports = require('../xdao')
const chainKeys = Object.keys(indexExports).filter(chain => typeof indexExports[chain] === 'object' && indexExports[chain].tvl)

module.exports = {
  timetravel: false,
  ...getExports("xdao", chainKeys),
}
