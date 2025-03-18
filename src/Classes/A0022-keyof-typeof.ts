//Keyof e Typeof
type ColorsObj = typeof colorsObj;

//Quando quero pegar só as chaves desse tipo
type colorsKey = keyof ColorsObj;

const colorsObj = {
    red: 'vemelho',
    blue : 'azul',
    green: 'verde',
    purple: 'purple',
};

function tradutionColor(color: colorsKey, colors: ColorsObj) { //Estou inferindo o meu tipo para ColorsObj
    return colors[color];
}

console.log(tradutionColor('red', colorsObj))
console.log(tradutionColor('green', colorsObj))
console.log(tradutionColor('purple', colorsObj))

//Dessa forma o código fica dinâmico.

//Posso pegar a partir de um valor inferido ou de um valor que eu tenha configurado e posso pegar o tipo daquele objeto a partir de um valor, peguei o tipo com typeof e a partir do tipo eu posso pegar as chaves do objeto com o keyof
