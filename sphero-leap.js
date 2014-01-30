var Cylon = require('cylon');
var sphero;

Cylon.robot({
    connections: [
		{ name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-OOP-AMP-SPP' },
		{
		    name: 'leapmotion',
		    adaptor: 'leapmotion',
		    port: '127.0.0.1:6437'
		  }
	],
    
	devices: [
		{ name: 'sphero', driver: 'sphero', connection: 'sphero' },
		{
		    name: 'leapmotion',
		    driver: 'leapmotion',
			connection: 'leapmotion'
		  }
		],

    work: function(my) {
		return my.leapmotion.on('hand', function(hand) {
		     // my.sphero.setColor("purple");
		 	// x = hand.palmX > 255 ? 'ff' : Math.floor(Math.abs(hand.palmX)).toString(16);
	// 	 	y = hand.palmY > 255 ? 'ff' : Math.floor(Math.abs(hand.palmY)).toString(16);
	// 	 	z = hand.palmZ > 255 ? 'ff' : Math.floor(Math.abs(hand.palmZ)).toString(16);
	// 		
			x = Math.floor(hand.palmX).toString(16);
			y = Math.floor(hand.palmY).toString(16);
			z = Math.floor(hand.palmZ).toString(16);
			
		 	// my.sphero.setColor("#" + x+y+z);
			my.sphero.setRGB(x,y,z);
			
	        return Logger.info("" + x + "," + y + "," + z);
		 
		 });
    }
}).start();



// Cylon.robot({
//   connection: {
//     name: 'leapmotion',
//     adaptor: 'leapmotion',
//     port: '127.0.0.1:6437'
//   },
//   device: {
//     name: 'leapmotion',
//     driver: 'leapmotion'
//   },
//   work: function(my) {
//     return my.leapmotion.on('hand', function(hand) {
//       return Logger.info("" + hand.palmX + "," + hand.palmY + "," + hand.palmZ);
// 	  myfunc(hand.palmX, hand.palmY, hand.palmZ);
//     });
//   }
// }).start();

