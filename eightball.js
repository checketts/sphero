var Cylon = require('cylon');

Cylon.robot({
    connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-PRO-RN-SPP' },
    device: {name: 'sphero', driver: 'sphero'},

    work: function(my) {
        every((2).second(), function() {
            my.sphero.roll(60, 90);
        });
    }
}).start();