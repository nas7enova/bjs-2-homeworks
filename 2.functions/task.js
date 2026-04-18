'use strict'

function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	const sum = arr.reduce((a, b) => a + b, 0);
	const avg = Number((sum / arr.length).toFixed(2));

	console.log(`min: ${min}, max: ${max}, sum: ${sum}`);
	return {
		min,
		max,
		avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	const sum = arr.reduce((a, b) => a + b, 0);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let difference = (max - min);
	return difference;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) {
		return 0;
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}