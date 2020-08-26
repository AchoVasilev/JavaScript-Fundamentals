function solve(groupOfPeople, typeOfGroup, dayOfWeek){
    let price = 0;
    let totalPrice = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (typeOfGroup === "Students") {
                price += 8.45;
            } else if (typeOfGroup === "Business") {
                price += 10.90;
            } else if (typeOfGroup === "Regular") {
                price += 15;
            }
            break;
    
        case "Saturday":
            if (typeOfGroup === "Students") {
                price += 9.80;
            } else if (typeOfGroup === "Business") {
                price += 15.60;
            } else if (typeOfGroup === "Regular") {
                price += 20;
            }
            break;

        case "Sunday":
            if (typeOfGroup === "Students") {
                price += 10.46;
            } else if (typeOfGroup === "Business") {
                price += 16;
            } else if (typeOfGroup === "Regular") {
                price += 22.50;
            }
            break;
    }

    let neededMoney = groupOfPeople * price;

    if (groupOfPeople >= 30 && typeOfGroup === "Students") {
        totalPrice = neededMoney - (neededMoney * 0.15);
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else if (groupOfPeople >= 100 && typeOfGroup === "Business") {
        totalPrice = neededMoney - (10 * price);
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else if (groupOfPeople >= 10 && groupOfPeople <= 20 && typeOfGroup === "Regular") {
        totalPrice = neededMoney - (neededMoney * 0.05);
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else{
        console.log(`Total price: ${neededMoney.toFixed(2)}`);
    }
}

    solve(40, "Regular", "Saturday")