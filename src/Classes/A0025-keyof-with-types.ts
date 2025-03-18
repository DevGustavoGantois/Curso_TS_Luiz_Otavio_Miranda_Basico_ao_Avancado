//Keyof with types

//Estamos espelhando o objeto utilizando as chaves do tipo.
//Garante consistência e evita repetição de código.
type Vehicle = {
    brand: string;
    year: string;
};

//Vehicle pega o que tem dentro da chave
type Car = {
    brand: Vehicle['brand'];
    year: Vehicle['year'];
    name: string;
};

const car: Car = {
    brand: 'Ford',
    year: '2025',
    name: 'Ferrari',
};

console.log(car);

//Ex: Sistema de cadastro, onde teremos um tipo User, e queremos criar um tipo AdminUser que herda algumas informações de User e adiciona novos campos:
type User1 = {
    id: number;
    name: string;
    email: string;
}

//Espalhando as chaves de User
type AdminUser = {
    id: User1['id'];
    name: User1['name'];
    email: User1['email'];
    role: 'admin',
};

const adminUser: AdminUser = {
    id: 1,
    name: 'Gustavo',
    email: 'gugagantois@gmail.com',
    role: 'admin',
}

console.log(adminUser);

