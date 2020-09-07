testCase = `
2019 tue
`;

function runProgram(input) {
	var [ year, init ] = input.trim().split(' ');

	// Months object
	var months = monthsObj(year);

	// Days array
	var days = daysArr();

	init = dayIndex(init, days);

	var output = {};

	// Calendar generation
	for (var monthIndex = 0; monthIndex < 12; monthIndex++) {
		[ init, daysObj ] = generateMonth(init, monthIndex);
		output[months[monthIndex][0]] = daysObj;
	}

	console.log(output);
	return output;

	function generateMonth(initDay, month) {
		var daysObj = {
			sun: [],
			mon: [],
			tue: [],
			wed: [],
			thu: [],
			fri: [],
			sat: []
		};

		for (var i = 1; i <= months[month][1]; i++) {
			var day = days[initDay % 7];
			daysObj[day].push(i);
			initDay++;
		}
		return [ initDay, daysObj ];
	}
}

function monthsObj(year) {
	var months = {
		0: [ 'jan', 31 ],
		1: [ 'feb', 28 ],
		2: [ 'mar', 31 ],
		3: [ 'apr', 30 ],
		4: [ 'may', 31 ],
		5: [ 'jun', 30 ],
		6: [ 'jul', 31 ],
		7: [ 'aug', 31 ],
		8: [ 'sep', 30 ],
		9: [ 'oct', 31 ],
		10: [ 'nov', 30 ],
		11: [ 'dec', 31 ]
	};

	// Checking for leap year
	if (year % 4 === 0) {
		months[1] = [ 'feb', 29 ];
	}

	return months;
}

function daysArr() {
	return [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
}

// Extracting dayIndex from given day Eg. wed will give 3
function dayIndex(day, days) {
	for (var i = 0; i < 7; i++) {
		if (days[i] === day) {
			day = i;
			break;
		}
	}
	return day;
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
