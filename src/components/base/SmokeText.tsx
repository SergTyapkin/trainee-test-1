import * as React from "react";
import {randomInt} from "crypto";

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
	const SplitPos100proc = randInt(result.length-1); // Позиция на которую точно вставится невидимый символ-разделитель. Причем не после последнего символа

	result.forEach((sym, idx) => {
		// Заменяем символы на похожие из другого языка. Чтобы добавить новые символы, достаточно просто дописать их в массив toReplace
		const variants = toReplace.find(variantsList => variantsList.findIndex(el => el === sym) !== -1);
		if (variants)
			result[idx] = variants[randInt(variants.length)];

		// Возможно, вставляем невидимый символ нулевой ширины U+FEFF после символа, в зависимости от шанса
		// Так же ТОЧНО вставляем один символ в случайную позицию, чтобы тесты на это нормально работали
		if (Math.random() <= splitChance || idx === SplitPos100proc) {
			result[idx] += '\uFEFF';
		}
	});

	return <>{result.join('')}</>;
};
