var disk = require('diskusage')

var svc = {

    get: (callback) => {

        disk.check('/', function(err, info) {

            //if (err) return;

            callback(info);
        });

    }
}

module.exports = svc
