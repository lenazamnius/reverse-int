module.exports = function reverse (num) {
	let str = Math.abs(num) + '';
	return Number(str.split('').reverse().join(''));
};
