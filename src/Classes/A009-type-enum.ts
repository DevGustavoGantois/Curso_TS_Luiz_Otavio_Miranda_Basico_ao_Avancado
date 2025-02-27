//Type enum
enum Colors {
    RED = 10,
    BLUE = 100,
    YELLOW = 200,
}

//Ele não vai reclamar, vai unir os 2 Enums em 1 só.
enum Colors {
    PURPLE = 'PURPLE',
    GREEN = 201,
    PINK, //Rosa e a cor 222
}

function chooseColors(color: Colors): void {
    console.log(Colors[color]);
}

chooseColors(Colors.PURPLE);

console.log(Colors.RED);
console.log(Colors[10]);
console.log(Colors.PURPLE);
