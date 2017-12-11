function min(arr){
	if (arr.length == undefined || arr.length == null){
		console.log("Массив пуст!");
	}

	var min = arr.filter(function(argument){
		return isBig(argument);
	})
	console.log(min);
}

function max(arr){
	var max;
	if (arr.length == undefined || arr.undefined == null){
		console.log("Массив пуст!");
	}
}

function sum(arr){
	if (arr.length === undefined || arr.lenght === null){
		console.log("Массив пуст!");
	}

	var result = arr.reduce(function(sum, current) {
		return sum + current;
	  }, 0);
	
	console.log(result)
}