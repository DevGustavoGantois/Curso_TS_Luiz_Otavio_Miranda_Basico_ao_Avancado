//This em arrow functions
export function func(this: Date, name: string, age: number): void {
    console.log(this);
    console.log(name, age);
}
func.call(new Date(), 'Gustavo', 21); //O primeiro argumento e quem vai ser o this da função e o segundo argumento vai ser os argumentos da função.
func.apply(new Date(), ['Gustavo', 21]) //Utilizando o apply passamos os argumentos dentro de um array.

//Tomar cuidado com a palavra this em arrow functions, cuidado para não criar um this em uma arrow function travar o this como um scopo global.
