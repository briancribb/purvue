new Vue({
	el: '#app',
	data: {
		newComment: '',
		comments: [
			{ 
				text: 'Looks great Julianne!',
				author: 'Robin Rendle',
				authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg'
			},
			{ 
				text: 'I love the Sea',
				author: 'Miriam Suzanne',
				authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg'
			},
			{ 
				text: 'Where are you?',
				author: 'Geoff Graham',
				authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg'
			}
		],
		IP: [
			{ 
				IP: '123.45.678.9',
				quantity: '13'
			},
			{ 
				IP: '234.56.789.0',
				quantity: '8'
			},
			{ 
				IP: '345.67.890.1',
				quantity: '4'
			},
			{ 
				IP: '456.78.901.2',
				quantity: '12'
			},
			{ 
				IP: '567.89.012.3',
				quantity: '13'
			},
			{ 
				IP: '678.90.123.4',
				quantity: '2'
			},
			{ 
				IP: '789.01.234.5',
				quantity: '1'
			}
		]
	},
	methods: {
		addComment: function () {
			const newCommentObj = {
				text: this.newComment,
				author: 'Magoo',
				authorImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg'
			};
			this.comments.push(newCommentObj);
			this.newComment = '';
		}
	}
});