// // Object methods (functions inside an object)
var name = {
    firstName: 'Aman',
    lastName: 'Vats'
};

var printDetails = function(city, state) {
    console.log(this.firstName + ' ' + this.lastName + ' lives in ' + city + ', ' + state);
};

// printDetails.call(name, 'Patna', 'Bihar');

var name2 = {
    firstName: 'Albert',
    lastName: 'Sebastian'
};

// printDetails.apply(name2, [ 'Bangalore', 'Karnataka' ]);

var printDetailsLater = printDetails.bind(name, 'Patna', 'Bihar');
console.log(printDetailsLater);
printDetailsLater();
printDetailsLater();
printDetailsLater();
printDetailsLater();
printDetailsLater();
printDetailsLater();

function a() {
    console.log('a');
    function b() {
        console.log('b');
    }
    function c() {
        console.log('c');
    }
    return { b, c };
}
a().b();
a().c();

// pagination

// var arr = [];
// var limit = 5;
// var totalItems = 14;
// var noPages = Math.ceil(14 / 5);
// var currentPage = 1;
