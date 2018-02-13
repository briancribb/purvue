// Make sure to call Vue.use(Vuex) first if using a module system

const store = new Vuex.Store({
	state: {
		objServer1 : {
			toggleClass: 'up',
			arrIP: [
				{ 
					number:		'123.45.678.9',
					quantity:	13
				},
				{ 
					number:		'234.56.789.0',
					quantity:	8
				},
				{ 
					number:		'345.67.890.1',
					quantity:	4
				},
				{ 
					number:		'456.78.901.2',
					quantity:	12
				},
				{ 
					number:		'567.89.012.3',
					quantity:	13
				},
				{ 
					number:		'678.90.123.4',
					quantity:	2
				},
				{ 
					number:		'789.01.234.5',
					quantity:	1
				}
			]
		},
		objServer2 : {
			toggleClass: 'up',
			arrIP: [
				{ 
					number:		'123.45.678.9',
					quantity:	13
				},
				{ 
					number:		'234.56.789.0',
					quantity:	8
				},
				{ 
					number:		'345.67.890.1',
					quantity:	4
				},
				{ 
					number:		'456.78.901.2',
					quantity:	12
				},
				{ 
					number:		'567.89.012.3',
					quantity:	13
				},
				{ 
					number:		'678.90.123.4',
					quantity:	2
				},
				{ 
					number:		'789.01.234.5',
					quantity:	1
				}
			]
		}
	},
	mutations: {
		increment: function () {
			//console.log(['increment()', this]);
			state.arrIP[0].quantity ++;
		},
		decrement: function () {
			//console.log(['decrement()', this]);
			state.arrIP[0].quantity --;
		}
	}
});