Mast.define('App', function () {
	return {

		afterRender: function () {
			// console.log('rendered this::', this.$el)
			// console.log('events::', this.events);
		},

		'click p': '%test',

		// 'click': '!',

		'%test': '!.highlighted'
	};
});
