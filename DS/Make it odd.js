testCase = `
2
5
1 2 3 4 5
4
1 1 1 1
5
1 1 1 1 1
4
2 2 2 2
5
2 2 2 2 2
2
1 2
4
1 1 2 2
4
2 2 1 1
5
1 1 1 1 2 
`;

function runProgram(input) {
	input = input.trim().split('\n');
	let t = Number(input[0]);

	for (let i = 1; i < input.length; i = i + 2) {
		let n = Number(input[i]);
		let arr = input[i + 1].trim().split(' ').map(Number);
		makeItOdd(n, arr);
	}

	function makeItOdd(n, arr) {
		let ans = [ arr[0] ];
		let even = 0;
		let odd = 0;

		for (let i = 1; i < n; i++) {
			ans.push(arr[i] + ans[ans.length - 1]);
		}
		// console.log(ans);

		if (ans[n - 1] % 2 === 1) {
			console.log('YES');
			return;
		}

		for (let j = 0; j < n; j++) {
			if (ans[j] % 2 === 0) {
				even++;
			} else {
				odd++;
			}
		}

		if (even === 0 || odd === even || odd === 0) {
			console.log('NO');
			return;
		} else {
			console.log('YES');
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
