function solve(str, char, expected){
    let result = str.replace('_', char);
    let output = result === expected ? 'Matched' : 'Not Matched';

    console.log(output)
}

solve('Str_ng', 'i', 'String')