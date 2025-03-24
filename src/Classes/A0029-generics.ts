//generics

//São poderosos para criar código mais flexível e reutilizável, permitindo que funções, classes e interfaces trabalhem em diferentes tipos sem perder a segurança de tipos do Typescript

type FilterCallback<U> = ( //Tipei a função de callback
    value: U,
    index?: number,
    array?: U[],
 ) => boolean;

export function myFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if(callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Ele já tipa de forma genérica

const arrayFilteredOriginal = array.filter((value) => value < 5);
console.log(arrayFilteredOriginal);

const filteredArray = myFilter<number>(array, (value) => value < 5); //Caso inferisse o tipo falando que é um string[], todos os parametros mesmo sendo numbers, iriam inferir string.

console.log(filteredArray);

//O que são generics? Quando eu não sei o que vão ser o que cada coisa vai receber

//Generics permitem que você defina um tipo como um parâmetro, em vez de um tipo específico, tornando funções, classes e interfaces mais genéricas reutilizaveis.

//Quando eu usar a interface eu tenho que mandar o tipo

//Podemos criar restrição em Generics usando extends:

function showName<T extends {name: string}>(obj: T) {
    console.log(obj.name);
}

showName({name: "Alguma coisa", age: 25});

// T extends { nome: string } força T a ser um objeto com a propriedade nome.
