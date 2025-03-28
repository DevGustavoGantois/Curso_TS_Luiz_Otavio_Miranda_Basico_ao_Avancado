import isEmail from 'validator/lib/isEmail';

const ShowErrorMessage = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (event: Event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);
    if(shouldSendForm(this)) //form.submit();
    console.log('Formulário enviado!')
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach(input => {
        if(!input.value)
            showErrorMessage(input , 'Este campo não pode ficar vazio.');
    });
};

function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input ,'Email inválido')
}
function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement): void {
    if (password.value !== password2.value) {
        showErrorMessage(password,'Senhas não batem');
        showErrorMessage(password2, 'Senhas não batem');
    }
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + ShowErrorMessage).forEach(item => item.classList.remove());
};
function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
    errorMessage.innerText = msg;
    formFields.classList.add(ShowErrorMessage)
}

function shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll('.' + ShowErrorMessage).forEach(() => (send = false));
    return send;
}
