Vue.component('dash-card', {
	template: '#dash-card-template',
	props: ['colorClass', 'server'],
	data: function() {
		console.log(['this', this]);
		return {
			toggleClass: this.server.toggleClass,
			arrList: this.server.arrIP,
			color: this.colorClass
		}
	},
	methods: {
		increment: function () {
			//console.log(['increment()', this]);
			this.server.arrIP[0].quantity ++;
		},
		decrement: function () {
			//console.log(['decrement()', this]);
			this.server.arrIP[0].quantity --;
		},
		testEmit: function () {
			console.log(['testEmit()', this, arguments]);
			//this.server.arrIP[0].quantity --;
			this.$emit('test', this.server, 'down')
		},
		toggle: function () {
			//this.toggleClass = (this.toggleClass === 'up')  ? 'down' : 'up' ;
			this.server.toggleClass = 'down';
			console.log(['toggle()', this.server.toggleClass, this]);
		}
	},
});