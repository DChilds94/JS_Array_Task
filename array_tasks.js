var arrayTasks = {

	concat: function (arr1, arr2) {
			return arr1.concat(arr2)
	},

	insertAt: function (arr, itemToAdd, index) {
			// arr.splice(2, 0, 3) <= this is wrong
			arr.splice(index, 0, itemToAdd);
			return arr;
	},

	square: function (arr) {
		const square = arr.map(num => num * num);
			return square;
	},

	sum: function (arr) {
		let sum = 0
		arr.forEach(function(number){
			sum += number;
		})
		return sum;
// WORKING WITH RECDUCE
	// 	const sum = arr.reduce(function(total, number) {
	// 	return number+ total;
	// }, 0)
	// return sum;
	},
	//
	// findDuplicates: function (arr) {
	// 	const  newArr = [];
	// 	for (num of arr) {
	// 		// if there are more than one objects in the array that have the same value
	// 		// remove from the array and
	// 		if (num[i] > 1 ) {
	// 		// then push that object into the newaArr
	// 		arr.splice(num);
	// 		newArr.push(num);
	// 	}
	// 	}
	// 	return newArr;
	// },
	// I have no idea

	// findDuplicates: function (arr) {
	// 	let duplicate = [];
	// 	arr.forEach(function(number, index){
	// 		if (arr.indexOf(number, index +1) > -1) {
	// 			if (duplicate.indexOf(number) === -1) {
	// 				duplicate.push(number);
	// 			}
	// 		}
	// 	});
	// 	return duplicate

	findDuplicates: function (arr) {
		return arr.filter(function(number, index){
			let restOfArrayIncludesItem = arr.slice(index + 1).includes(number);
			let isFirstInstanceOfItem = arr.indexOf(number) === index;
			return restOfArrayIncludesItem && isFirstInstanceOfItem;
		})
	},



	removeAndClone: function (arr, valueToRemove) {
			return arr.filter(function(number){
				return number !== valueToRemove
			})
	},

	findIndexesOf: function (arr, itemToFind) {
		const results = [];
		arr.forEach(function(number, index) {
		if (number === itemToFind) {
			results.push(index);
		}
	});
		return results;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let total = 0;
		arr.forEach(function(number){
			if (number % 2 === 0) {
				total += number ** 2
			}
		});
		return total;
	},

}

module.exports = arrayTasks
