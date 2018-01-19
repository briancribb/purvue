


new Vue({
	el: '#app',
	data() {
		return {
		}
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
	},
	mounted() {
		document.getElementById("page-load-spinner").classList.add('d-none');
		document.getElementById("app").classList.remove('d-none');
	}
});