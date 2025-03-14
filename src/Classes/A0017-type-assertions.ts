/* Recomendado */

//Type assertion (Asserção recomendada) -> Só vai fazer isso quando tiver a certeza que tal elemento existe.
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

//Condicional -> se não tiver certeza utiliza esse tipo (vai fazer o refinamento de tipo).
const body1 = document.querySelector('body');
//Estreitar a possibilidade de tipos
if (body1) body1.style.background = 'red';

//Posso ter vários tipos de elementos na tela

//HTMLEelement => pai dos elementos HTML
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'anything';
input.focus();

/* Não recomendado */

//Você pode fazer isso, mas é muito improvável:
const body4 = (document.querySelector('body') as unknown) as number;

//Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
