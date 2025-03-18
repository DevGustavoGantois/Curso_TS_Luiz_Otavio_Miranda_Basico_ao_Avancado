//Como tipar o this
export class Calculator {
    constructor(public number: number) {}

    add(n: number): this {
        this.number += n;
        return this;
    };

    sub(n: number): this {
        this.number -= n;
        return this
    };

    div(n: number): this {
        this.number /= n;
        return this
    };

    mul(n: number): this {
        this.number *= n;
        return this;
    }
}

export class subCalculator extends Calculator {
    pow(n: number): this {
        this.number **= n;
        return this;
    }
}

const calculator = new Calculator(10);
calculator.add(5).mul(2).sub(5).pow(2);
console.log(calculator);

//Builder - GoF
export class RequestBuilder {
    private method: 'post' | 'get' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }

    setUrl(url: string): this { //Aqui é um subtipo de string da url. não poderia fazer ao contário pois estaria expandindo o tipo (url) e no (setUrl) estou comprimindo mais o tipo.
        this.url = url;
        return this
    };
    send(): void {
        console.log(`Send data with ${this.method} for ${this.url}`)
    }
}

const request = new RequestBuilder(); //Builder
request.setUrl('http://www.google.com').setMethod('post').send(); //Como é o padrão de projeto builder, poderia utilizar o request. (separado)

//Padrão de projeto Builder, posso ir setando partes do objeto aos poucos ao invés de setar de uma vez
