function solve(input){
    let initialHealth = 100;
    let initialCoins = 0;

    let rooms = input[0].split('|');
    let roomCount = 0;
    let isDead = false;
    
    for(let i = 0; i < rooms.length; i++){
        let items = rooms[i].split(' ');
        let monsterOrItem = items[0];
        let argument = Number(items[1]);
        roomCount++;
        switch (monsterOrItem) {
            case 'potion':
                if (initialHealth + argument > 100) {
                    argument = 100 - initialHealth;
                    initialHealth = 100;
                }
                else{
                    initialHealth += argument;
                }
                
                console.log(`You healed for ${argument} hp.`);
                console.log(`Current health: ${initialHealth} hp.`)
                break;
        
            case 'chest':
                initialCoins += argument;
                console.log(`You found ${argument} coins.`);
                break;

            default:
                if (initialHealth - argument > 0) {
                    initialHealth -= argument;
                    console.log(`You slayed ${monsterOrItem}.`);
                } else{
                    isDead = true;
                }

                break;
        }

        if (isDead) {
            break;
        }
    }

    if (isDead) {
        console.log(`You died! Killed by ${monsterOrItem}.`);
        console.log(`Best room: ${roomCount}`);
    } else{
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])