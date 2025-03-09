//tipar funções, cirar um type alias ou uma interface, falar o tipo da função dentro dos parenteses, como se fosse a chamada da função, não vai ter corpo, aí vamos colocar uma arrow function e um retorno:

type MapStringsCallback = (item: string) => string;

export function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }

    return newArray;
};

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, item => item.toUpperCase());

console.log(abc);
console.log(abcMapped);
