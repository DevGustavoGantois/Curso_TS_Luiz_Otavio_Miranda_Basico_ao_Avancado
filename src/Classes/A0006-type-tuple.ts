//Tuple
const dataClient1: [number, string] = [1, 'Gustavo']; //Tuplas são imutáveis
const dataClient2: [number, string, string] = [1, 'Gustavo', 'Gantois'];

dataClient1[0] = 100;
dataClient1[1] = 'Gustavo';

console.log(dataClient1);
console.log(dataClient2);

//Posso fazer com que o  último valor seja opcional
const dataClient3: [number, string, string?] = [1, 'Gustavo', 'Gantois'];
console.log(dataClient3);

//Posso utilizar o rest operator para falar que tenho o restante das coisas como strings number etc...
const dataClient4: [number, string, ...string[]] = [1, 'Gustavo', 'Gantois', 'é um', 'programador', 'Front-end', '.'];
console.log(dataClient4);

//Podemos usar o pop para excluir.
dataClient1.pop();
//Push para adicionar.

//Podemos deixar a tupla imutável
const dataClient5: readonly [number, string] = [1, 'Gustavo'];

//readonly array:

//Caso queiramos ter um array só de strings:
const array1: readonly string[] = ['Gustavo', 'Gantois', '21', 'anos'];
const array2: ReadonlyArray<string> = ['Gustavo', 'Gantois', '21', 'anos'];

console.log(array1);
console.log(array2);
