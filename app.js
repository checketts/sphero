var Cylon = require('cylon');

Cylon.robot({
    connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-RRG-RN-SPP' },
    device: {name: 'sphero', driver: 'sphero'},

    work: function(my) {
        every((1).second(), function() {
            my.sphero.roll(60, Math.floor(Math.random() * 360));
        });
    }
}).api({port: '4321'}).start();