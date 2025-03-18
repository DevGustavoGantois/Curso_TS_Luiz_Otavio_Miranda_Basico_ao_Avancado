//Interfaces

//Você criar uma Interface ou criar um Type Alias, não fazem a mínima diferença, ambos são para criar tipos ou então contratos.
//Type tem uma vantagem que pode se fazer um tipo simples, e é mais usado em Programação Funcional.
//Geralmente vou utilizar interfaces para modelar objetos, quando falamos de interfaces geralmente está relacionada a POO.

interface TypeName { //Aqui dentro vem os tipos da forma que eu estiver modelando.
    name: string;
};

interface TypeSurname {
    surname: string;
};

interface TypeCompleteName {
    completeName: () => void;
}

type TypePerson = TypeName & TypeSurname & TypeCompleteName; //Não consigo fazer isso com interfaces, pois não é possível atribuir o sinal de igual para as interfaces.
interface TypePersonTwo extends TypeName, TypeSurname, TypeCompleteName  {} //Interface TypePersonTwo se torna um subtipo das interfaces extendidas. Funciona da mesma maneira que o type.

const pessoaObj: TypePersonTwo = {
    completeName() {
        return this.name + '' + this.surname;
    },
    name: 'Gustavo',
    surname: 'Gantois'
}

console.log(pessoaObj.completeName());

//Quando trabalho com interfaces eu quero modelar uma forma.
//Quando estou trabalhando com Type Alias, posso modelar um tipo, posso modelar uma forma, posso um tipo simples, posso modelar qualquer coisa.
