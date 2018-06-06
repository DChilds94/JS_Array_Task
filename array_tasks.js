var arrayTasks = {

	concat: function (arr1, arr2) {
			return arr1.concat(arr2)
	},

	insertAt: function (arr, itemToAdd, index) {
			arr.splice(2, 0, 3)
			return arr;
	},

	square: function (arr) {

		const square = arr.map(num => num * num);
//  => is a shorthand method call for an object that doesn't have this
			return square;
	},

	sum: function (arr) {
		let sum = 0
		arr.forEach(function(number){
			sum += number;
		})
		return sum;
	},

	findDuplicates: function (arr) {
		const  newArr = [];
		for (num of arr) {
			// if there are more than one objects in the array that have the same value
			// remove from the array and
			if (num[i] > 1 ) {
			// then push that object into the newaArr
			arr.splice(num);
			newArr.push(num);
		}
		}
		return newArr;
	},
	// I have no idea

	// removeAndClone: function (arr, valueToRemove) {
	//
	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
