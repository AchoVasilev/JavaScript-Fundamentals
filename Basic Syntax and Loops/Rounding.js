function solve(inputNumber, precision){
    let a = inputNumber;
    let b = precision;

    if (b > 15) {
        b = 15;
    }

    a = a.toFixed(b);
    console.log(parseFloat(a));
}

solve(10.5, 3)