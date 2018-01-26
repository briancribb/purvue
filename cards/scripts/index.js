


new Vue({
	el: '#app',
	data() {
		return {
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
	methods: {
		increment: function () {
			//console.log(['increment()', this]);
			this.arrIP[0].quantity ++;
		},
		decrement: function () {
			//console.log(['decrement()', this]);
			this.arrIP[0].quantity --;
		},
		addComment: function () {
			const newCommentObj = {
				text: this.newComment,
				author: 'Magoo',
				authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg'
			};
			this.comments.push(newCommentObj);
			this.newComment = '';
		}
	},
	mounted() {
		document.getElementById("page-load-spinner").classList.add('d-none');
		document.getElementById("app").classList.remove('d-none');
	}
});