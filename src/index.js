
// Exercise 2.1
function getResult1(number1, number2, operator) {
	return eval(number1 + operator + number2);
}


// Exercise 2.2 
function getResult2(number1, number2, operator) {
	let result;
	switch (operator) {
		case '+':
			result = number1 + number2;
			break;
		case '-':
			result = number1 - number2;
			break;
		case '*':
			result = number1 * number2;
			break;
		case '/':
			result = number1 / number2;
			break;	
		case '%':
			result = number1 % number2;
			break;	 
		case '**':
			result = number1 ** number2;
			break;
		default: 
			result = 'Sorry, calculator is not a best!'
	}
	return result;
}

console.log('getResult1 is ', getResult1(3, 2, '**'));
console.log('getResult1 is ', getResult1(4, 5, "-"));
console.log('getResult2 is ', getResult2(33, 2, '**'));

module.exports = {getResult1, getResult2}