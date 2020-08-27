function solve(firstNum, secondNum, thirdNum){
    let sum = firstNum + secondNum + thirdNum;
    let result = sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`;

    console.log(result);
}

solve(100, 200, 303)