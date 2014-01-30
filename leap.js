var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'leapmotion',
    adaptor: 'leapmotion',
    port: '127.0.0.1:6437'
  },
  device: {
    name: 'leapmotion',
    driver: 'leapmotion'
  },
  work: function(my) {
    return my.leapmotion.on('hand', function(hand) {
      return Logger.info("" + hand.palmX + "," + hand.palmY + "," + hand.palmZ);
    });
  }
}).start();
