//
let x;
if(typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
    firstName: string,
    lastName?: string,
) : {
    firstName: string,
    lastName?: string
} {
       return {
        firstName,
        lastName,
    }
};

export function squareOf(x: any) {
    if (typeof x === 'number') return x + x;
    return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
    console.log("Invalid Account.", squareOfTwoString * 2) //Aqui não será possível pois o valor é nulo.
} else {
    console.log(squareOfTwoString * 100); //Em vez de ser number ou null ele sabe que será um number, pois fiz o estreitamento das checkagens
}

//Dica: É muito comum quando retorna um erro,
//Exemplo: As vezes estou checkando na base de dados, dai não quero levantar um erro caso eu não encontre o que estou buscando da base de dados, então retorno pro desenvolvedor ou a coisa que ele está procurando na base de dados ou null, e aí sempre que ele for checkar ele terá que checkar por null. Essa é a diferença entre null e undefined.
