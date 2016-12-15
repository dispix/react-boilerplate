'use strict'

const path = require('path')

const env = process.env.NODE_ENV || 'dev'
const config = path.join(__dirname, 'config', 'webpack.' + env + '.js')

module.exports = require(config)
