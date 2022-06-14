export default locator => {
	return {
		'.mimic .title': {
			'font-weight': 'bold',
			'cursor': 'pointer',
		},

		'.mimic .content': {},

		'.mimic .contacts': {},

		'.mimic .contacts__item': {
			'display': 'inline',
		},

		'.mimic .warning': {
			'font-size': locator.calcString(10, 'px'),
		},

		'.mimic .picture': {
			'overflow': 'hidden',
		},
	};
};
