//type never
//Representa um não valor, quer dizer que nunca vai retornar nada.

//Geralmente usada para retonar erros ou nunca retornar nada.
export function createError(): never {
    throw new Error("Erro qualquer.")
};

createError();

//Esse tipo de função ou vai travar sua aplicação em um loop infinito ou vai lançar um erro.
