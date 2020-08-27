function solve(x1, y1, x2, y2){
    let firstCoordinates = Math.pow(x2 - x1, 2);
    let secondCoordinates = Math.pow(y2 - y1, 2);
    let distance = firstCoordinates + secondCoordinates;

    let result = Math.sqrt(distance);

    console.log(result);
}

solve(2.34, 15.66, -13.55, -2.9985)