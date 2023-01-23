let a = 12;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

const num1 = 15;
const num2 = 18;
const num3 = 27;

if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

if (num1 > num2 && num1 > num3) {
    console.log(num1)
} else if (num2 > num1 && num2 > num3) {
    console.log(num2)
} else {
    console.log(num3)
}

let valor = 95;

if (valor > 0) {
    console.log("positive")
} else if (valor < 0) {
    console.log("negative")
} else {
    console.log("zero")
}

const angulo1 = -49;
const angulo2 = 45;
const angulo3 = 90;

if (angulo1 + angulo2 + angulo3 === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    console.log(true)
} else if (angulo1 + angulo2 + angulo3 !== 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    console.log(false)
} else {
    console.log("erro")
}

let peçaXadrez = 'RaiNha';
let direcoes;
switch (peçaXadrez.toLowerCase()) {
    case 'bispo':
        direcoes = 'diagonais'
    break;
    case 'peão':
        direcoes = 'para frente'
    break;
    case 'rainha':
        direcoes = 'todas as direções'
    break;
    case 'cavalo':
        direcoes = 'movimento em L'
    break;
    case 'torre':
        direcoes = 'para frente e para os lados'
    break;
    case 'rei':
        direcoes = 'todas as direcoes'
    break;
default:
    direcoes = 'mensagem de erro'
}

console.log(direcoes)

let nota = 74;
if (nota >= 90 && nota <= 100) {
    console.log('A')
} else if (nota >= 80 && nota < 90) {
    console.log('B')
} else if (nota >= 70 && nota < 80) {
    console.log('C')
} else if (nota >= 60 && nota < 70) {
    console.log('D')
} else if (nota >= 50 && nota < 60) {
    console.log('E')
} else if (nota < 50 && nota >= 0) {
    console.log('F')
} else {
    console.log('Mensagem de erro')
}