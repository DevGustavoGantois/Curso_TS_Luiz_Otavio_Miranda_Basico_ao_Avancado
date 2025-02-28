//type unknown
let x: any;
x = 100;
x = 'Gustavo';
x = 900;
x = 10;
const y = 800;

if(typeof x === 'number') console.log(x + y);
console.log(x + y);

//Unknown é um any mais seguro, ele vai te forçar a fazer a checkagem de tipos antes de você fazer qualquer operação com o valor.

//Dica: Sempre quando você precisar receber alguma coisa que você não sabe o que você espera, ao invés de utilizar any, utilize unknow sabendo que você terá que checkar o tipo sempre que você for utilizar essa várivavel para fazer alguma operação com ela
