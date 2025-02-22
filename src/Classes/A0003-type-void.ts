function semRetorno(...args: string[]): void { //É uma função que não espera nenhum retorno.
    console.log(args.join(""));
}

const person = {
    name: "Gustavo",
    surname: "Gantois",

    showName(): void {
        console.log(this.name + "" + this.surname);
    },
};

semRetorno("Gustavo", "Gantois");
person.showName();

export { person };
