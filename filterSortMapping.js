function filterSortMapping(arr, convert, filter, sort, map){

	let newArr = '';
	let result;

	if(convert === false){

		newArr += arr
			.filter(filter)
			.sort(sort)
			.map(map);

		result = newArr;

	} else {

		newArr += arr
			.filter(filter)
			.sort(sort)
			.map(map);

		let cr = String(newArr).replace(/,/g,'<br />');

		result = cr;

	}

	return result;

}
