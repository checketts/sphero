var Cylon = require('cylon');
var Keypress = require('keypress');

Cylon.robot({
    connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/cu.Sphero-YPB-AMP-SPP' },
    device: { name: 'sphero', driver: 'sphero' },

    work: function(my) {
		var red = true;
		var self = this;
		my.sphero.setColor("red");
		my.sphero.stop();
		// setTimeout(function(){
		// 	my.sphero.setColor("green");
		// }, Math.random() * 1000)
		//     
		Keypress(process.stdin);
		
		process.stdin.on('keypress', function(ch, key){
			process.stdin.pause();
			if (red){
				self.go(my);
			}
			else {
				self.stop(my);
			}
			
		}); 
		
    },
	
	play: function(my){
		setTimeout(function(){},1000);
	},
	
	go: function(my){
		my.sphero.setColor("green");
		my.sphero.roll(60, 0);
	},
	
	stop: function(my){
		my.sphero.setColor("red");
		my.sphero.stop();
	}
	
}).start();