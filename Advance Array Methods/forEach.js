function halfValue(arr){
	var newArr = [];

	arr.forEach(function(val){
		newArr.push(val/2);
	})
	return newArr;
}

halfValue([2,4,6]);