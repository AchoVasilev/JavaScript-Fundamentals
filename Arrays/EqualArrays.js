function solve(firstArr, secondArr){
    for(let i = 0; i < firstArr.length; i++){
        firstArr[i] = Number(firstArr[i]);
    }

    for(let i = 0; i < secondArr.length; i ++){
        secondArr[i] = Number(secondArr[i]);
    }

    let areEqual = true;
    let sum = 0;

    for(let i = 0; i < firstArr.length; i++){
        if (firstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }

    if (areEqual) {
        for(let num of firstArr){
            sum += num;
        }

        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(['10','20','30'], ['10','20','30'])