//Quero criar tipos bem enchutos que quero usar em vários objetos no caso:

type HasName = { name: string; };

type HasSurname = { surname: string; };
type HasAge = { age: number; };
type Person = HasName | HasSurname | HasAge;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;
//O resultado será a interseção do AB com o AC e AD

const person: Person = {
    age: 21,
    name: 'Gustavo',
}

console.log(person)

//Module mode
export { person }

//Quando quero formar tipos unindo as 3 chaves acima ao invés de utilizar union types eu vou utilizar intersection types:

type Person2 = HasName & HasSurname & HasAge; //AND

const person2: Person2 = {
    age: 21,
    name: 'Gustavo',
    surname: 'Gantois',
};

//meu tipo Person2 é a união de todas as chaves de todos esses tipos acima.

console.log(person2)

//Module mode
export { person2 }
