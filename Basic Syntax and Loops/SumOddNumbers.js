function solve(number){
    let sum = 0;
    let odd = 1;
    for(i = 1; i <= number; i++){
        sum += odd;
        console.log(odd)
        odd += 2;
    }

    console.log(`Sum: ${sum}`);
}

solve(5)