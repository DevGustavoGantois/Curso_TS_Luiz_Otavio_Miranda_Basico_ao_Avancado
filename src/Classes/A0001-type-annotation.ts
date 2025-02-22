/*eslint-disable*/
//Tipos básicos (aqui ocorre a inferência de tipos)
const name: string = "Gustavo Gantois"; //Qualquer tipo de strings;
const idade: number = 21; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744;
const adulto: boolean = true; //true ou false;
const simbolo: symbol = Symbol("&");//symbol
const big: bigint = 10n; //bigint


//Arrays
const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeStrings: Array<string> = ['a', 'b'];
const arrayDeStrings2: string[] = ['a', 'b'];

//Objetos
const pessoa: {nome: string, idade: number, adulto?: boolean} = { //Podemos usar um type alias
    idade: 21,
    nome: "Gustavo Gantois",
}; //Interrogação e : deixa opcional

console.log(pessoa.nome)

//Funções
function soma(x:number, y:number): number { //Como essa função não retorna nada ele vai inferir que ela retorna void. Porém se eu retornar x + y ele já vai inferir que essa função é um number.
    return x + y;
}

//Tipagem dos parâmetros, tipagem da função

const result = soma(2, 2); //Ele já inferiu que a variável result é do tipo number;


//2 forma de tipar uma função
const soma2: (x: number, y: number) => number = (x, y) => x + y;



//Tudo depois de 2 pontos é type annotation do typescript

//Não coloca tipos antes, crie seu código normal, ver se inferiu, se ele inferir o tipo any, ai sim precisamos tipar

//any -> qualquer coisa

//Sempre que aparecer any, signifca que ele não conseguiu inferir o tipo para o seu valor.
