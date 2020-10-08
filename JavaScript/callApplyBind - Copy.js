// // Object methods (functions inside an object)
// var name = {
//     firstName: 'Aman',
//     lastName: 'Vats',
//     printDetails: function() {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// };
// name.printDetails();

// var name2 = {
//     firstName: 'Albert',
//     lastName: 'Sebastian',
//     printDetails: function() {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// };

// name2.printDetails();

///////////////////////////////////////////////////////////////////

// // function borrowing
// var name = {
//     firstName: 'Aman',
//     lastName: 'Vats',
//     printDetails: function() {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// };
// name.printDetails();

// var name2 = {
//     firstName: 'Albert',
//     lastName: 'Sebastian'
// };

// name.printDetails.call(name2);

///////////////////////////////////////////////////////////////////

// // call method with 1 variable
// var name = {
//     firstName: 'Aman',
//     lastName: 'Vats'
// };

// var printDetails = function(city) {
//     console.log(this.firstName + ' ' + this.lastName + ' lives in ' + city);
// };

// printDetails.call(name, 'Patna');

// var name2 = {
//     firstName: 'Albert',
//     lastName: 'Sebastian'
// };

// printDetails.call(name2, 'Bangalore');

///////////////////////////////////////////////////////////////////

// // call & apply methods with more than 1 variables
// var name = {
//     firstName: 'Aman',
//     lastName: 'Vats'
// };

// var printDetails = function(city, state) {
//     console.log(this.firstName + ' ' + this.lastName + ' lives in ' + city + ', ' + state);
// };

// printDetails.call(name, 'Patna', 'Bihar');

// var name2 = {
//     firstName: 'Albert',
//     lastName: 'Sebastian'
// };

// printDetails.apply(name2, [ 'Bangalore', 'Karnataka' ]);

///////////////////////////////////////////////////////////////////

// // bind method with more than 1 variables
// var name = {
//     firstName: 'Aman',
//     lastName: 'Vats'
// };

// var printDetails = function(city, state) {
//     console.log(this.firstName + ' ' + this.lastName + ' lives in ' + city + ', ' + state);
// };

// // printDetails.call(name, 'Patna', 'Bihar');

// var name2 = {
//     firstName: 'Albert',
//     lastName: 'Sebastian'
// };

// // printDetails.apply(name2, [ 'Bangalore', 'Karnataka' ]);

// var callLater = printDetails.bind(name, 'Patna', 'Bihar');
// callLater();
// callLater();
// callLater();
// callLater();
// callLater();

///////////////////////////////////////////////////////////////////
// In a method, this refers to the owner object.

// Alone, this refers to the global object.
// this.hi = 'hi';
// console.log(this);

// In a function, this refers to the global object.
// var a = function() {
//     this.name1 = a;
//     // console.log(this);
//     var b = function() {
//         this.name2 = b;
//         console.log(this);
//     };
//     b();
// };

// a();

// In a function, in strict mode, this is undefined.
// 'use strict';
// var a = function() {
//     console.log(this);
// };
// a();

// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.
