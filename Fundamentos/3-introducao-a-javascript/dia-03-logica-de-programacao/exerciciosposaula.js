let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
    fatorial *= index;
}

console.log(fatorial);



let word = 'tryber';
let drow = '';

for (let index = (word.length - 1); index >= 0; index -= 1) {
    drow += word[index];
}

console.log(drow);



let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
}

console.log(maiorPalavra);

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index]
    }
}

console.log(menorPalavra);

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let number = 0;

for (let index = 2; index <= 50; index += 1) {
    let primo = true
    for (let indexDivide = 2; indexDivide < index; indexDivide += 1) {
        if (index % indexDivide === 0) {
            primo = false;  
        }              
    }
if (primo === true) {
    number = index;
}
}

console.log(number);