let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
}

let result = 0;

for(let index = 0; index < numbers.length; index += 1) {
    result += numbers[index]
}

console.log(result)

let media = result / numbers.length

console.log(media)

if (media > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}

let numeroMaior = numbers[0]

for(let index = 1; index < numbers.length; index +=1) {
    if (numbers[index] > numeroMaior) {
        numeroMaior = numbers[index]
    }
}

console.log(numeroMaior)

let quantidadeImpar = 0;

for(let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        quantidadeImpar = quantidadeImpar + 1;       
} else if (quantidadeImpar === 0) {
    console.log('nenhum valor ímpar encontrado')
}
}
console.log(quantidadeImpar)

let menorValor = numbers[0];

for(let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorValor) {
        menorValor = numbers[index]
    }
}

console.log(menorValor)

let arrayExercicio = [];

for(let index = 1; index <= 25; index += 1) {
    arrayExercicio.push(index)
}

console.log(arrayExercicio)

for (let index = 0; index < arrayExercicio.length; index += 1) {
    console.log(arrayExercicio[index] / 2)
}