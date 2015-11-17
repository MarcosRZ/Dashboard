var os = require('os')

var x = {

    get: () => {
        
        return {
            load: os.loadavg(),
            totalmem: os.totalmem(),
            freemem: os.freemem()
        }

    }
}

module.exports = x
