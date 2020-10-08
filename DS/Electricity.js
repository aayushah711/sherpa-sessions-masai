function runProgram(input) {
    // Write code here
    input = input.split('\n');
    var mat = [];
    var ab = input[0].split(' ');
    var a = ab[0],
        b = ab[1];
    for (i = 1; i < input.length; i++) {
        mat.push(input[i].split(' '));
    }
    console.log(mat, a, b);
    // var tran=[]
    for (j = 0; j < a; j++) {
        for (k = 0; k <= j; k++) {
            var temp = mat[j][k];
            mat[j][k] = mat[k][j];
            mat[k][j] = temp;
        }
        // tran.push(temp)
        // temp=[]
    }
    console.log(mat);
}
runProgram(
    `2 3
30 17 34
84 56 64`
);
