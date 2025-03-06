//Type alias
type Age = number;

//Posso fazer isso para melhorar a leitura do meu código

type Person = {
    name: string;
    age: Age; //Posso passar o tipo para um objeto, pois o tipo recebe um número logo o objeto vai ser um número também
    salary: number;
    betterColor?: string;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Ciano' | 'Magenta' | 'Yellow' | 'Black';
type betterColor = ColorRGB | ColorCMYK;

//type betterColor é tudo que está em RGB e e tudo que está em CMYK

//Tudo acime é o Type alias

//Código abaixo utilizando os tipos:

const person: Person = {
    age: 30,
    name: 'Gustavo Gantois',
    salary: 200_000, //200000
};

export function setPreferColor(person: Person, color: betterColor): Person {
    return {...person, betterColor: color} //Estamos fazendo um shallow copy.
}

console.log(setPreferColor(person, 'Blue'));
console.log(person)

