/*
	Tasks for call stacks
*/

/************** isrightangle triangle ***********/
function multiply(a, b){
    return a * b
}

function square(num){
    return multiply(num, num)
}
function isRightangleTriangle(a,b,c){
    return square(a) + square(b) === square(c)
}

console.log(isRightangleTriangle(3,4,5))

// ==============================================

/************** Repeat phrase ***********/
const repeat = (str, times) => {
	let result = '';
	for (let i = 0; i < times; i++) {
		result += str;
	}
	return result;
};

const scream = (str) => {
	return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
	let text = scream(phrase);
	let rant = repeat(text, 8);
	return rant;
};

const makeRant = (phrase, el) => {
	const h1 = document.createElement('h1');
	h1.innerText = getRantText(phrase);
	el.appendChild(h1);
};
console.log('HELLO!');

makeRant('I hate mayonnaise', document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);

