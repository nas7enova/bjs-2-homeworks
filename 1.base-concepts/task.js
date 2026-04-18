'use strict'

function solveEquation(a, b, c) {
	const d = b ** 2 - 4 * a * c;
	let arr = [];
	if (d < 0) {
		return arr;
	} else if (d === 0) {
		arr.push(-b / (2 * a));
		return arr;
	} else {
		const sqrtD = Math.sqrt(d);
		arr.push((-b + sqrtD) / (2 * a));
		arr.push((-b - sqrtD) / (2 * a));
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let rate = percent / 100 / 12;
	let creditBody = amount - contribution;
	const payment = creditBody * (rate + (rate / (((1 + rate) ** countMonths) - 1)));
	if (creditBody <= 0) {
		return 0;
	} else {
		const totalAmount = payment * countMonths;
		return Math.round(totalAmount * 100) / 100;
	}
}
console.log(calculateTotalMortgage)