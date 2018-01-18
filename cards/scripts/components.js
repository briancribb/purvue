Vue.component('dash-card', {
	template: '#dash-card-template',
	props: ['colorClass', 'listArray'],
	data: function() {
		console.log(['this', this]);
		return {
			arrList: this.listArray,
			color: this.colorClass
		}
	}
});