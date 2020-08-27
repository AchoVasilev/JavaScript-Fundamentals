function solve(shifts){
    let bitcoins = 0;
    let sum = 0;
    let firstDay = 0;
    let gold = 0;
    let goldExchange = 0;
    let counter = 0;
    while(counter < shifts.length){
        
        if (counter > 0 && (counter + 1) % 3 == 0) {
            gold = shifts[counter] * 0.70;
        } else {
            gold = shifts[counter];
        }

        goldExchange = gold * 67.51;

        sum += goldExchange;

        if (sum >= 11949.16) {
            while(sum >= 11949.16){
            bitcoins++;
            sum -= 11949.16;
            
            if (bitcoins === 1) {
                firstDay = counter + 1;
                }
            }
        }

        counter++;
    }

    console.log(`Bought bitcoins: ${bitcoins}`);

    if (bitcoins >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }

    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

solve([100, 200, 300])