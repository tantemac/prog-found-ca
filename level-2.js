// question 1
for (var i = 15; i <= 25; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}


// question 2

function logSentence() {
	console.log("I am a function");
}

var innerFunction = logSentence;

function outerFunction(x) {
	x();
}
outerFunction(innerFunction);
