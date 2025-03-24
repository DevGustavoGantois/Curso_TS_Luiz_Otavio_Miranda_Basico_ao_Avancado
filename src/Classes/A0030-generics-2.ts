//Array e Promises como generics.
type myType = number;

const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(arrayNumbers);

async function promiseAsync() {
    return 1;
};

//Uma Promise é usada para operações assíncronas e pode ser típada usando Generics para garantir que o valor resolvido tenha o tipo esperado:
function myPromise(): Promise<myType> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    })
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
