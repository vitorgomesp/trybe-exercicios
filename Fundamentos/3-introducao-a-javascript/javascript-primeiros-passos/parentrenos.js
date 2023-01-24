const num1 = 5;
const num2 = 8;
const num3 = 17;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true)
} else {
    console.log(false)
}

const num4 = 6;
const num5 = 8;
const num6 = 18;

if (num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0) {
    console.log(true)
} else {
    console.log(false)
}


const custoProduto = 50;
const valorVenda = 75;

if (custoProduto >= 0 && valorVenda >= custoProduto) {
    console.log((valorVenda - (custoProduto * 1.2)) * 1000)
} else {
    console.log('Mensagem de erro')
}


let salarioBruto = 1600;

if (salarioBruto <= 1556.94) {
    console.log(salarioBruto * 0.92)
} else if (2594.92 > salarioBruto && salarioBruto <= 1903.98 && salarioBruto >= 1556.95) {
    console.log(salarioBruto * 0.91)
} else if ()

