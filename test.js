// antes de nada, npm install diskusage

var disk = require('./node_modules/diskusage/index')

var svc = {

    get: (callback) => {

        disk.check('/', function(err, info) {

            //if (err) return;

            callback(info);
        });

    }
}

var cbk = (data) => { console.log(data) }

setInterval(() => { svc.get(cbk) }, 100) 
