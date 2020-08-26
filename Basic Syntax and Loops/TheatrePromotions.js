function calculatePrice(day, age){
    let price = 0;
    switch (day) {
        case 'Weekday':
            if (age >= 0 && 18 >= age) {
                price = 12;
            } else if (age > 18 && 64 >= age) {
                price = 18;
            } else if (age > 64 && 122 >= age) {
                price = 12;
            } else{
                console.log('Error!');
            }
            break;
        case 'Weekend':
            if (age >= 0 && 18 >= age) {
                price = 15;
            } else if (age > 18 && 64 >= age) {
                price = 20;
            } else if (age > 64 && 122 >= age) {
                price = 15;
            } else{
                console.log('Error!');
            }
            break;
        case 'Holiday':
            if (age >= 0 && 18 >= age) {
                price = 5;
            } else if (age > 18 && 64 >= age) {
                price = 12;
            } else if (age > 64 && 122 >= age) {
                price = 10;
            } else{
                console.log('Error!');
            }
            break;
    }

    if (price > 0) {
        console.log(`${price}$`);
    }
}

calculatePrice('Holiday', -5);