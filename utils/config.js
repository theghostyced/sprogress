export default {
	defaultOpts: {
		color: '#fd005a',
		template: '<div class="scroll-progress"></div>',
		height: 4,
		scrollDistanceTarget: 60,
	},
	state: {
		scrollPosition: 0,
		set setOptions(opts) {
			this.userOpts = opts;
		},
		userOpts: {},
	},
};
