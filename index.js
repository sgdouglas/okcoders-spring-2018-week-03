var myArray = [1, 2, 3, 4]

var myObject = {name:"sean", color:"blue"}

var arrayObject = [
	{name:"paddy", color:"green"},
	{name:"demanda", color:"purple"}
]

arrayObject[1].secondColor = "pink"

console.log(arrayObject[1].secondColor);

function sayHi(name, secondName) {
	return "Hi, " + name + " " + secondName;
}

console.log(sayHi("Sean", "Douglas"));

function forEach(collection, func) {
	for(var i = 0; i < collection.length; i++) {
		var result = func(collection[i]);
		console.log(result);
	}
}

forEach([2112, 2404, 911, 51, 678, 1001001], function(elem) {
	return elem * elem;
})

function map(collection, func) {
	var mapped = []
	for (var i = 0; i < collection.length; i++) {
		var result = func(collection[i])
		mapped.push(result)
	}
	return mapped
}

map([2112, 2404, 911, 51, 678, 1001001], function(elem) {
	return elem * elem;
})

//console.log(result)

var _ = require('lodash');

var stringWCommas = "1, 2, 3, 7, 8"

console.log(_.split(stringWCommas, ',', 5))

var myArray = [1, 2, 4]

console.log(_.head(myArray));
console.log(_.drop(myArray, 1));

var dupArray = [1, 1, 1, 3, 3, 5, 5, 7, 8, 9]

console.log(_.uniq(dupArray));
console.log(_.sum(dupArray));