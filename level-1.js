// question 1
var myHorse = "dama";


// question 2
var person = {
	name: "Hege",
	age: 31
};


// question 3
var outOfStock = true;

if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
}


// question 4
var numbers = [7, 18, 32, 48, 63];

var numberOfNumbers = numbers.length;
console.log(numberOfNumbers);

for (var i = 0; i < numberOfNumbers; i++) {
	console.log(numbers[i]);
}


// question 5
for (var i = 15; i <= 25; i++) {
	console.log(i);
}


// question 6
for (var i = 15; i <= 25; i++) {
	if (i === 20) {
		console.log(i);
	}
}


// question 7
var horses = [
	{
		name: "Dama",
		age: 15,
		alive: true
	},
	{
		name: "Jofrid",
		age: 35,
		alive: false
	}
];
console.log(horses.length);

for (var i = 0; i < horses.length; i++) {
	console.log(horses[i].age);
	console.log(horses[i].alive);
}


// question 8
function whatIDontLike(virus) {
	console.log("I don't like " + virus);
}
whatIDontLike("Corona virus");


// question 9
function substractNumbers(number1, number2) {
	var sum = number1 - number2;
	console.log(sum);
}

substractNumbers(37, 32);


// question10
var myAnimal = [];

function addToArray(animal) {
	myAnimal.push(animal);
}
addToArray("Horse");
