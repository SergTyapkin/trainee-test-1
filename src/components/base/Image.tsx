import * as React from 'react';

export default ({src, width, height, /*transform,*/ ...props}) => {
	return (
		<div /*className={transform('div_image')}*/ // fixme: стили ведь надо в отдельный файл выносить в идеале. Но я не понял, как прокинуть в него пропсы
			style={{
				backgroundImage: `url(${src})`,
				width: width + 'px',
				height: height + 'px',
			}}
			{...props}
		/>
	);
};
