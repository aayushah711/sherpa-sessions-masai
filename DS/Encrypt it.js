testCase = `
All-convoYs-9-be:Alert1.
4

`;

function runProgram(input) {
	// Write code here
	input = input.trim().split('\n');
	var sent = input[0].trim().split('');
	var spin = Number(input[1]);
	var a = 'abcdefghijklmnopqrstuvwxyz';
	var b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	var c = '0123456789';
	var output = '';
	var index = 0;
	console.log(sent);
	console.log(a);
	for (i = 0; i < sent.length; i++) {
		for (j = 0; j < a.length; j++) {
			// console.log("inside for loop")
			if (String(sent[i]) === a[j]) {
				console.log('1', sent[i], a[j]);
				index = (j + spin) % 26;
				// console.log('small letters', sent[i], a[index]);
				sent[i] = a[index];
				// console.log(a[index])
				break;
			} else if (String(sent[i]) === b[j]) {
				console.log('2', sent[i], b[j]);
				index = (j + spin) % 26;
				// console.log('Capital', sent[i], b[index]);
				sent[i] = b[index];
				break;
			}
		}
	}
	console.log(sent);
}

// function runProgram(input) {
// 	input = input.trim().split('\n');
// 	var arr = input[0].trim().split('');
// 	var key = Number(input[1]);
// 	console.log(arr, key);

// 	for (var i=0;i<arr.length;i++){
// 		var ans = checkCapitalLetter(arr[i])
// 		if (ans != false){
// 			arr[i] = ans
// 		}
// 		ans = checkSmallLetter(arr[i])
// 		if (ans){
// 			arr[i] = ans
// 		}

// 		ans = checkNumber(arr[i])
// 		if (ans){
// 			arr[i] = ans
// 		}

// 		ans = checkCharacters(arr[i])
// 		if (ans){
// 			arr[i] = ans
// 		}
// 	}

// 	function checkCapitalLetter(str){
// 		var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// 		for (var i=0;i<capitalLetters.length;i++){
// 			if (str === capitalLetters[i]){
// 				return capitalLetters[(i+key)%26]
// 			}
// 		}
// 		return false

// 	}

// 	function checkSmallLetter(str){
// 		var capitalLetters = "abcdef"
// 		for (var i=0;i<capitalLetters.length;i++){
// 			if (str === capitalLetters[i]){
// 				return capitalLetters[(i+key)%26]
// 			}
// 		}
// 		return false

// 	}

// }

if (process.env.USERNAME === 'Masai') {
	runProgram(testCase);
} else {
	process.stdin.resume();
	process.stdin.setEncoding('ascii');
	let read = '';
	process.stdin.on('data', function(input) {
		read += input;
	});
	process.stdin.on('end', function() {
		read = read.replace(/\n$/, '');
		read = read.replace(/\n$/, '');
		runProgram(read);
	});
	process.on('SIGINT', function() {
		read = read.replace(/\n$/, '');
		runProgram(read);
		process.exit(0);
	});
}
