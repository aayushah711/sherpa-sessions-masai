testCase = `3 3 6
3 2 1
2 2 2
1 5 1
`;

function runProgram(input) {
	input = input.trim().split('\n').map((item) => item.trim().split(' ').map(Number));
	let [ n, m, p ] = input[0];
	input.shift();
	let count = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			checkHorizontal(i, j);
			checkVertical(i, j);
			checkDiagonalUp(i, j);
			checkDiagonalDown(i, j);
		}
	}

	console.log(count);

	function checkHorizontal(row, col) {
		if (col < n - 2) {
			if (input[row][col] + input[row][col + 1] + input[row][col + 2] === p) {
				count++;
			}
		}
	}

	function checkDiagonalUp(row, col) {
		if (row > 1 && col < m - 2) {
			if (input[row][col] + input[row - 1][col + 1] + input[row - 2][col + 2] === p) {
				count++;
			}
		}
	}

	function checkDiagonalDown(row, col) {
		if (row < n - 2 && col < m - 2) {
			if (input[row][col] + input[row + 1][col + 1] + input[row + 2][col + 2] === p) {
				count++;
			}
		}
	}

	function checkVertical(row, col) {
		if (row < n - 2) {
			if (input[row][col] + input[row + 1][col] + input[row + 2][col] === p) {
				count++;
			}
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
