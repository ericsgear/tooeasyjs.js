/*

tooeasyjs.js  1/28/2017 v0.1

This "library" of helper functions was designed to help out various levels of programmers do different things.
Some helper funtions do math and geometry, some are alias functions for built-in JavaScript functionality,
and some are there to simply make programming easier for super beginners.

For instance, instead of doing: if (varA < varB) you can do: if (isLessThan(varA, varB)) to make it more like English.
This won't help you in the long run, but it'll hopefully get people past the "Nooo, programming is scary/super hard!" idea.

This is not an exhaustive set of helper functions, so if you have something that is useful, email it to sales@EricsGear.com
with the subject line "tooeasyjs add" with a description of what it does and how to use it to try to get your function added.
If we decide it's useful in an everyday sort of way, we'll include it.  However, we don't give any attribution.  Everything is
just plain, with some documentation on how to use it, if necessary.  If you want us to give you something in return, like money,
a job, a T-shirt, or even credit, that's not going to happen, sorry.

We don't charge for this "library", and we know it's going to be "stolen" for various projects, so just use it.

If you feel the need or desire, please feel free to give Eric's Gear credit for this file and a link to the source, but that's
more so other people see it (and can decide to use it) than anything else.

If you *really* feel the need or desire, you can donate some money to us...

Thank you for using this library and we're glad you find it useful!

Eric Ingamells
CEO
Eric's Gear
sales@EricsGear.com

*/

var point = function(x, y, z){  //  max 3D, but could be be expanded to any dimensions
	this.X = x;
	this.Y = y;
	this.Z = z;
	this.axes = ['X','Y','Z'];  //  add to this list when you add more dimensional axes
	
	this.setPoint = function (x, y, z){
		this.X = x;
		this.Y = y;
		this.Z = z;
	}
	
	this.setX = function(x){
		this.X = x;
	}

	this.setY = function(y){
		this.Y = y;
	}

	this.setZ = function(z){
		this.Z = z;
	}

	this.getX = function(){
		return this.X;
	}

	this.getY = function(){
		return this.Y;
	}

	this.getZ = function(){
		return this.Z;
	}
	
	this.getAxes = function(){
		return this.axes;
	}
}

function findSlope(point1, point2){
	var xValue = point2.X - point1.X;
	return xValue == 0 ? null : ((point2.Y - point1.Y) / xValue);
}

function findYIntercept(point1, slope){
	return (slope == null) ? null : (point1.Y - (slope * point1.X));
}

function midpoint(point1, point2){
	var dimensions = point1.getAxes();  //  gets the available dimensional axes from the point class
	var newPoint = new point();
	for (var i = 0; i < dimensions.length; i++) {
		newPoint[dimensions[i]] = ((point2[dimensions[i]] + point1[dimensions[i]])/2) || null;
	}	
	return newPoint;
}

function distance(point1, point2){
	var dimensions = point1.getAxes();  //  gets the available dimensional axes from the point class
	var sum = 0;
	for (var i = 0; i < dimensions.length; i++) {
		sum += Math.pow((point2[dimensions[i]]-point1[dimensions[i]]) || 0, 2)
	}
	return Math.sqrt(sum);
}

function isGreaterThan(val1, val2){
	return val1 > val2;
}

function isGreaterThanOrEqualTo(val1, val2){
	return val1 >= val2;
}

function isLessThan(val1, val2){
	return val1 < val2;
}

function isLessThanOrEqualTo(val1, val2){
	return val1 <= val2;
}

function isEqualTo(val1, val2){
	return val1 == val2;
}

function isNotEqualTo(val1, val2){
	return val1 != val2;
}

function isExactlyEqualTo(val1, val2){  //  the value and datatype have to equal, so "1" is not equal to 1, but "1" equals "1" and 1 equals 1
	return val1 === val2;
}

function power(value, pow){
	return Math.pow(value, pow);
}

function squareRoot(value){
	return Math.sqrt(value);
}

function square(value){
	return Math.pow(value, 2);
}

function cube(value){
	return Math.pow(value, 3);
}

function pi(){
	return Math.PI;
}

function e(){
	return Math.E;
}

function c(){ // meters per second
	return 299792458;
}

function double(value){ 
	return value * 2;
}

function triple(value){
	return value * 3;
}

function halve(value){
	return value / 2;
}

function isNotNull(value){
	return value != null;
}

function isNull(value){
	return value == null;
}

function and (val1, val2){
	return val1 && val2;
}

function or (val1, val2){
	return val1 || val2;
}

function andNot (val1, val2){
	return val1 && !val2;
}

function orNot (val1, val2){
	return val1 || !val2;
}

function isNumber(value){
	return value === (value * 1);
}

function getElement(value){
	return document.getElementById(value);
}

function getRemainder(val1, val2){
	return val1 % val2;
}

function getModulus(val1, val2){
	return getRemainder(val1, val2);
}

function mod(val1, val2){
	return getRemainder(val1, val2);
}

function add(val1, val2){
	return val1 + val2;
}

function subtract(val1, val2){
	return val1 - val2;
}

function multiply(val1, val2){
	return val1 * val2;
}

function divide(val1, val2){
	return val1 / val2;
}

function sum(list){ // list is an array of numbers
	var total = 0;
	if (list != null){
		for (var i = 0; i < list.length; i++){
			total += list[i];
		}
	}
	return total;
}

function factorial(value){  // does factorials for values greater than or equal to 0
	var result = 1;
	if ((value != null) && (value >= 1)){
		for (var i = 2; i <= value; i++)
				result = result * i;
		return result;
	} else if (value == 0){
		return 0;
	} else {
		return NaN;
	}
}

function absoluteValue(value){
	return Math.abs(value);
}

function truncate (value, places) {  // places are the amount of decimal places to keep => truncate(3.14, 0) returns 3; truncate(3.141592654, 2) return 3.14
  var multiplier = Math.pow(10, places);
	var adjustedNum = value * multiplier;
	var truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

	return truncatedNum / multiplier;
}

function random(maxValue){
  return Math.random() * maxValue;
}

function round(value){
  return Math.round(value);
}

function ceiling(value){
	return Math.ceil(value);
}

function floor(value){
	return Math.floor(value);
}

function arcCosine(value){
  return Math.acos(value);
}

function arcSine(value){
  return Math.asin(value);
}

function arcTangent(value){
  return Math.atan(value);
}

function arcTangent2(y, x){
  return Math.atan2(y, x);
}

function cosine(value){
  return Math.cos(value);
}

function exp(value){  //  returns e^value
  return Math.exp(value);
}

function logarithm(value){
  return Math.log(value);
}

function sine(value){
  return Math.sin(value);
}

function tangent(value){
  return Math.tan(value);
}

function naturalLogarithmOf2(){
  return Math.LN2;
}

function naturalLogarithmOf10(){
  return Math.LN10;
}

function squareRootOf2(){
  return Math.SQRT2;
}	

function maxValue(list){ //  list is an array of numbers or a string
	if (list == null){
		return NaN;
	}
	var max = list[0];
	if (max == null){
		return NaN;
	}
	for (var i = 1; i< list.length; i++){
		if (max < list[i]){
			max = list[i];
		}
	}
	return maxValue;
}

function minValue(list){ //  list is an array of numbers or a string
	if (list == null){
		return NaN;
	}
	var min = list[0];
	if (min == null){
		return NaN;
	}
	for (var i = 1; i< list.length; i++){
		if (min > list[i]){
			min = list[i];
		}
	}
	return min;
}

function swap(items, firstIndex, secondIndex){
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

function partition(items, left, right) {
	var pivot = items[Math.floor((right + left) / 2)];
	var i = left;
	var j = right;
	while (i <= j) {
		while (items[i] < pivot) {
			i++;
		}
		while (items[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}
	return i;
}

function sort(list, left, right){  //  sort an array; left and right are optional
	var index;
	if (list.length > 1) {
		left = typeof left != "number" ? 0 : left;
		right = typeof right != "number" ? list.length - 1 : right;
		index = partition(list, left, right);
		if (left < index - 1) {
			sort(list, left, index - 1);
		}
		if (index < right) {
			sort(list, index, right);
		}
	}
	return list;
}

function reverseList(list){ //  list is an array of numbers, characters, or strings
	var newList = [];
	if (newList != undefined){
		while (list.length > 0) {
			newList.push(list.pop());
		}
		return newList;
	}
	return undefined;
}

function reverseSort(list){ //  list is an array of numbers, characters, or strings
	return reverseList(sort(list));
}

function toList(){  //  add as many parameters as you want to put them into a list format, ie: toList(1,3,4,5) returns [1,3,4,5]
	var list = [];
	for (var i = 0; i < arguments.length; i++){
		list.push(arguments[i]);
	}
	return list;
}

function toSortedList(){  //  add as many parameters as you want to put them into a list format which is then sorted, ie: toSortedList(1,4,3,5) returns [1,3,4,5]
	var list = [];
	for (var i = 0; i < arguments.length; i++){
		list.push(arguments[i]);
	}
	return sort(list);
}

function subList(list, start, end){ 
//  gets a list from start to end from the list, ie subList([1,4,8,5], 1,2) returns [4,8]
//  if end is smaller than start, the results are reversed, ie subList([1,4,8,5], 2,1) returns [8,4]
//  if start is null, the start of the list is assumed
//  if end is null, the end of the list is assumed

  if (list == null) {
		return undefined;
	}
	var reverseOrder = false;
	if (start > end){
		var temp = start;
		start = end;
		end = temp;
		reverseOrder = true;
	}
	if (start == null) { start = 1; }
	if (end == null) { end = list.length; }
	var list2 = [];
	for (var i = start; i <= end; i++){
		list2.push(list[i]);
	}
	
	if (reverseOrder && (list2.length != 0)){
		return reverseList(list2);
	}
	return list2;
}

