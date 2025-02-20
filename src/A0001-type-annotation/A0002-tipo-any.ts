//O any será um tipo que não queremos utilizar. Utilize apenas em último caso.

function showMessage(msg: any) { //Explicitar que o tipo será any. Para corrigir o erro usariamos uma string.
    return msg;
}

//Posso passar qualquer coisa por ser do tipo any
console.log(showMessage([1,2,3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
