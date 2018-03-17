var fs = require('fs')
var _ = require("lodash")

fs.readFile('./bob.csv','utf8',readFileCallback)

function readFileCallback(err, data) {
	var arrayOfStrings = splitNewLine(data)
	var arrayOfArrays = mapSplitComma(arrayOfStrings)
	var columnNames = _.head(arrayOfArrays)
	var data = _.tail(arrayOfArrays)
	var arrayOfObjects = arraysToObject(columnNames, data)
	var bobsCommits = _.filter(arrayOfObjects, function(row){
		return row.name === 'bob'
	})
	var zachsCommits = _.filter(arrayOfObjects, function(row){
		return row.name === 'zach'
	})
		console.log("Zach has", zachsCommits.length, "and Bob has", bobsCommits.length)
}


function arraysToObject(columnNames, data) {
	return _.map(data, function(row) {
		return _.zipObject(columnNames, row)
	})
}


function mapSplitComma(collection) {
	return _.map(collection, function(string) {
		return splitComma(string)
	})

}

function splitNewLine(string) {
	return _.split(string, "\n")
}

function splitComma(string) {
	return _.split(string, ",")
}