//Interfaces => Declaration merge

//Aqui está acontecendo um Declaration-merge, as 2 interfaces são unidas para formar um objeto maior.
interface Person {
    name: string;
};

interface Person {
    surname: string;
};

interface Person {
    readonly address: string[] //readonly está dizendo que não posso alterar esse valor de jeito nenhum. Porém se eu quiser readonly na propriedade e readonly no array => eu preciso botar readonly string[].
};

//Após isso não poderei adicionar novas coisas no array, depois que o valor for definido.

interface Person {
    age?: number;  //Aqui ela será number ou undefined, por isso não é obrigatoria na const person, posso também fazer com que essa propriedade seja readonly => readonly age?: number, porém caso exista essa propriedade não poderá ser alterada.
}

const person: Person = {
    name: 'Gustavo',
    surname: 'Gantois',
    address: ['Pituba'],
    age: 21,
};

//person.age = 32 Caso tenha readonly não posso alterar, caso não tenha esse valor pode ser alterável
person.address.push('Av. Paulista')
console.log(person)

