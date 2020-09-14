function solve(input){
    for(i = 0; i < input.length; i++){
        input[i] = Number(input[i]);
    }

    let sum = 0;
    for(let num of input){
        if(num % 2 === 0){
            sum += num;
        }
    }

    console.log(sum);
}

solve(['2','4','6','8','10'])