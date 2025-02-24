//Array<T>-[]
export function multiplyArgs(...args: Array<number>): number { //Array de números
    return args.reduce((ac, value) => ac * value, 1);
};
export function concatStrings(...args: string[]): string { //Array de strings. Podemos criar um array tanto no jeito de cima como no de baixo, da no mesmo.
    return args.reduce((ac, value) => ac + value);
};

export function toUpperCse(...args: string[]): string[] {
    return args.map((value) => value.toUpperCase());
}

const result = multiplyArgs(1, 2, 3);
const concat = concatStrings('a', 'b', 'c');
const upper = toUpperCse('a', 'b', 'c');

console.log(result);
console.log(concat);
console.log(upper);
