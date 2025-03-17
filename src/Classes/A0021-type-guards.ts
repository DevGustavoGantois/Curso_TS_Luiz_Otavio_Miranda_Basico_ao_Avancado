export function add(a: unknown, b: unknown): number | string {
    return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type Person = {type: 'person'; name: string};
type Animal = {type: 'animal'; color: string};
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
    type: 'person' = 'person';
    constructor(public name: string) {}
};

function showName(obj: PersonOrAnimal): void {
    switch (obj.type) {
        case 'person':
        console.log(obj.name);
        return;
        case 'animal':
        console.log('Is this animal', obj.color);
        return;
    }
}
