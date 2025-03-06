let x = 10; //eslint-disable-line

//Posso pegar essa variável e converter para um binário pois é do tipo number.
x = 0b1010;
const y = 10; //Y é um subtipo de number que é o valor 10.
let a: 100 = 100; //let precisa ser igual a 100. Isso é um tipo literal, é um subtipo de number, mas não é aconselhado que você faça
const c = 100; //Aqui está querendo dizer, eu quero que c seja 100 como uma constante.

//Module mode
export default 1;

//Em alguns casos, como chave de objetos, um atributo de uma classe como constante, vc poderia utilizar o dessa maneira abaixo:
let b = 100 as const
//Por que? Pois sabemos que objetos e arrays são mutáveis

const person = {
    name: "Gustavo" as const, // em vez do tipo inferido ser string igual o surname, o tipo inferido vai ser "Gustavo". Seria uma ASSERÇÃO
    surname: "Gantois"
};

person.name = 'Augusto' //Não é possível fazer alteração no nome.

const person2 = { // Em vez de person2 ser um objeto de strings ele será do um objeto do tipo "Gustavo","Gantois", será readonly.
    name: "Gustavo",
    surname: "Gantois",
} as const;

//Se eu juntar tipos literais com union types, eu tenho basicamente o que eu tinha no enum com a tipagem segura.
function chooseColor(color: "Red" | "Yellow" | "Blue"): string { //Eu quero que minha função receba uma string, mas dentro dessa string só podem ser os seguintes tipos:
    return color;
}
console.log(chooseColor('Red'));

//Posso criar um tipo mais aberto utilizando let, geralmente sempre vamos criar um tipo literal usando const, quando eu não puder utilizar const eu posso fazer uma ASSERÇÃO DE CONST.
