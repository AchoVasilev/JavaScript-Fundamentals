function solve(inputArr){
    for(let i = 0; i < inputArr.length / 2; i++){
        let oldElement = inputArr[i];
        let previousElement = inputArr.length - 1 - i;
        inputArr[i] = inputArr[previousElement];
        inputArr[previousElement] = oldElement;
    }

    console.log(inputArr.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e'])