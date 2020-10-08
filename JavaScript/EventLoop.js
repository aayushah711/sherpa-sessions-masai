// function runProgram() {
//     console.log('Hi');
//     setTimeout(function cb() {
//         console.log('there');
//     }, 5000);
//     console.log('Bye');
// }
// runProgram();

// function a(x) {
//     console.log('a got initialised, 1');
//     var temp = x + 10;
//     console.log('a got executed, 2');
//     return temp;
// }

// function b(y) {
//     console.log('b got intialised, 3');
//     var temp = a(y) + 20;
//     console.log('b got executed, 4');
//     return temp;
// }

// function c() {
//     console.log('c got intialised, 5');
//     var temp = b(10);
//     console.log('c got executed, 6');
//     return temp;
// }

// console.log(c());

function a() {
    return a();
}

a();
