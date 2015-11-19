var os = require('os')

var ram = require('./ram')
var disk = require('./disk')

var svc = {

    ram: ram,
    disk: disk
}

module.exports = svc
