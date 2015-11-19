var os = require('os')

var svc = {
    
    get: () => {
        return { 
            load: os.loadavg(),
            totalmem: os.totalmem(),
            freemem: os.freemem()
        }
    }
}

module.exports = svc

