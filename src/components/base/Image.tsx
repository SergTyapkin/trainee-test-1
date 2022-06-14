import * as React from 'react';

export default (props) => {
	const {
		width,
		height,
		src,
		transform,
		locator,
		uid,
	} = props;

	const imageClassName = 'div_image_' + uid;

	const newStyles = {};
	newStyles['.' + imageClassName] = {
		'background-image': `url(${src})`,
		width: locator.calcString(width, 'px'),
		height: locator.calcString(height, 'px'),
		transition: 'all 0.2s ease-in-out',
	}
	locator.insertSheet(newStyles);

	return (
		<div className={transform(imageClassName)}/>
	);
};
