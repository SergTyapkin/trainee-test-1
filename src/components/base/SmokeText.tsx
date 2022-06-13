import * as React from "react";

const toReplace = [
	['a', 'а'],
	['e', 'е'],
	['o', 'о'],
	['p', 'р'],
	['c', 'с'],
	['y', 'у'],
]

function randInt(max) {
	return Math.floor(Math.random() * max);
}

const splitChance = 0.25;

export default ({children}) => {
	const result = Array.from(children);
	const oneSplitPos = randInt(result.length-1); // Позиция на которую точно вставится невидимый символ-разделитель. Причем не после последнего символа

	result.forEach((sym, idx) => {
		// Заменяем символы на похожие из другого языка. Чтобы добавить новые символы, достаточно просто дописать их в массив toReplace
		const variants = toReplace.find(variantsList => variantsList.findIndex(el => el === sym) !== -1);
		if (variants)
			result[idx] = variants[randInt(variants.length)];

		// Возможно, вставляем невидимый символ нулевой ширины U+FEFF после символа, в зависимости от шанса
		// Так же ТОЧНО вставляем один символ в случайную позицию, чтобы тесты на это нормально работали
		if (Math.random() <= splitChance || idx === oneSplitPos) {
			result[idx] += '\uFEFF';
		}
	});

	return <>{result.join('')}</>;
};


// --------- Второй вариант ---------
// 100%-ый вариант, но более косой и сложный.
// Идея в том, чтобы создать svg-картинку с текстом, закодировать её в base64, чтобы нельзя было теги распарсить регулярками,
// А потом поставить эту svg в background-image в div

// Минуса два.
// - Кодировать в base64 относительно долго
// - В svg текст не переносится, а значит надо руками переносить его по кол-ву символов. Но тогда надо подписываться на изменение
// ширины блока и перепереносить текст, когда она изменяется

// const symbolsInString = 32; // Это тоже надо динамически определять относительно ширины блока. Именно из-за этого я решил оставить первый метод
// const stringHeight = 12; // px
// export default ({children}) => {
// 	const stringsCount = Math.ceil(children.length / symbolsInString);
// 	let svg = `<svg xmlns="http://www.w3.org/2000/svg" height="${stringHeight * stringsCount + 2}"></svg><text font-size="${stringHeight}">`;
//
// 	for (let i = 0; i < stringsCount; i++) {
// 		svg += `<tspan x="0" y="${stringHeight + i * stringHeight}">${children.slice(i * symbolsInString, (i+1) * symbolsInString)}</tspan>`
// 	}
//
// 	svg += '</text></svg>';
//
// 	return <span dangerouslySetInnerHTML={{__html: svg}}></span>;
// };
//
