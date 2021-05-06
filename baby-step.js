const sum = (arr) => {
	return arr.reduce((a,b) => {return parseInt(a)+parseInt(b)});
}

const input_array = process.argv.slice(2, process.argv.length);
console.log(sum(input_array));
