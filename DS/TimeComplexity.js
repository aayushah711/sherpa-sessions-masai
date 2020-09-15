testCase = `
8
`;

// O(n**n)
function runProgram(input) {
	let count = 0;
	// let n =
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			count++;
		}
	}
}

// O(n)
function runProgram(input) {
	let count = 0;
	// let n =
	for (let i = n; i > 0; i = i / 2) {
		for (let j = 0; j < i; j++) {
			count++;
		}
	}
}

// O(n**n)
function runProgram(input) {
	let count = 0;
	// let n =
	for (let i = 0; i < n; i++) {
		for (let j = n; j > i; j--) {
			count = count + i + j;
		}
	}
}

// O(log(n))
function runProgram(input) {
	let count = 0;
	// let n =
	let i = n;
	let a = 0;
	while (Math.floor(i) > 0) {
		a += i;
		i = i / 2;
	}
}

// O(n*log(n))
function runProgram(input) {
	let count = 0;
	// let n =
	for (var i = n; i > 0; i = i / 2) {
		for (var j = 0; j < n; j++) {
			count++;
		}
	}
}

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
