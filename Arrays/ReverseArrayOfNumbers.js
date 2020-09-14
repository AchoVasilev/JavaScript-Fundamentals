function solve(n, inputArray){
    let result = [];

    for(let i = 0; i < n; i++){
        result.push(inputArray[i]);
    }

    let output = '';
    for(let i = result.length - 1; i >= 0; i--){
        output += result[i] + ' ';
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);