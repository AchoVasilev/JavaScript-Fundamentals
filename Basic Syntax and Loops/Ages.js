function solve(years){
    if (years >= 0 && 2 >= years) {
        console.log('baby');
    }else if (years >= 3 && 13 >= years) {
        console.log('child');
    }else if (years >= 14 && 19 >= years) {
        console.log('teenager');
    }else if (years >= 20 && 65 >= years) {
        console.log('adult');
    }else if (years >= 66) {
        console.log('elder');
    }else{
        console.log('out of bounds');
    }
}

solve(-1)