const objectA = {
    keyA: "Value A",
    keyB: "Value B",
};

objectA.keyA = "Modify value";
objectA.keyC = "Modify value"; //Não podemos criar novas chaves

const objectA2: Record<string, unknown> = { //A chave seria uma string, e o unknown seria qualquer tipo de valor, unknown seria mais abrangente que o any. Objeto totalmente aberto.
    keyA: "Value A",
    keyB: "Value B",
}

objectA2.keyA = "Modify value";
objectA.keyB = "Modify value";
objectA2.keyC = "Modify value"; //Dessa forma o typescript não conhece mais a forma do meu objeto, não terei mais autocomplete, não é seguro


//Outra maneira:
const objectA3: {
    keyA: string;
    keyB: string;
    keyC?: string; //Se quisermos permitir a chave C ser criada, podemos botá-la como opcional com uma interrogação atrás dos dois pontos.
} = {
    keyA: "Value A",
    keyB: "Value B"
}

objectA3.keyA = "Other value";

const objectA4: {
    keyA: string;
    keyB: string;
    keyC?: string;
    [key: string]: unknown //Podemos fazer desta forma também que será a mesma coisa que o exemplo de cima, mesma coisa que o record que vimos no exemplo acima.
} = {
    keyA: "Modify value",
    keyB: "Modify value",
    keyC: "Modify value"
};

objectA3.keyA = "Other value";
objectA3.keyC = "New Key";
objectA3.keyD = "New Key"; //Ele não reconhece essa chave


//Dicas: Quando tiver que criar um objeto que for extendido, ou você melhora seu design e cria o objeto de uma vez ou você deixa o objeto mais aberto, especifíca as chaves que devem existir com o tipo literal, e se eu precisar criar mais chaves eu uso ->  [key: string]: unknown | index signature

//Caso eu não tenha não tenha uma API que eu não saiba o que eu estou recebendo, eu não preciso deixar o objeto tão aberto assim, extender ele da forma acima.


const objectA5: {
    readonly keyA: string; //Não posso alterar o valor dessa chave por que ela é readonly, ela nunca será alterada.
    keyB: string;
} = {
    keyA: "Value A",
    keyB: "Value B",
}

objectA.keyA = "Modify value";

