function runProgram() {

    var arr = [300, 10, 2000 ,50]
    //arr = [2,3,6,8]
    //res = [3,4]
    //res = 10
    //res = 24
    //res = [10,50,300,2000]
    arr.forEach(function(item,index,array){
        array[index] = item*2
    })
    arr2 = arr.map(function(item){
        return item*2 //manipulate each item
    })

    arr = arr.filter(function(item,index,array){
        return (item>2) //return true or false
    })

    arr = arr.reduce(function(accumulator,item){
        return accumulator+item
    })

    console.log(arr)

    arr.sort(function(a,b){
        return a-b //returns <0,0 or >0
    })

    var arr = ["abcd","acdb","abdc","abcd"]
    //["abcd","abcd","abdc","acdb"]
    arr.sort(function(a,b){
        if (a>b){
            return -1
        }
        else {
            return 1
        }
    })

    var arr = [
        ["Aayushi",25],
        ["Monis",50],
        ["Harsh",50],
        ["Aayushi",50],
        ["Jigyasa",50]
    ]

    arr.sort(function(a,b){
        if (a[1]>b[1]){
            return -1
        }
        else if (a[1]<b[1]){
            return 1
        }
        else {
            if (a[0]<b[0]){
                return -1
            }
            else {
                return 1
            }
        }
    })


}

runProgram();
