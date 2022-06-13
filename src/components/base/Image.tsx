import * as React from 'react';

let globalImagesCount = 0
export default ({src, width, height, transform, ...props}) => {
	const imageClassName = transform('div_image' + '-' + globalImagesCount);
	globalImagesCount++;

	return (
		<>
			<style>
			.{imageClassName} {`{
				background-image: url(${src});
				width: ${width}px;
				height: ${height}px;
			}`}
			</style>
			<div className={imageClassName}
				// fixme: стили ведь надо в отдельный файл выносить. Но я не понял, как прокинуть в него пропсы,
				//  так что вы видите костыль сверху с тегом style

				// style={{
				// 	backgroundImage: `url(${src})`,
				// 	width: width + 'px',
				// 	height: height + 'px',
				// }}
				{...props}
			/>
		</>
	);
};
