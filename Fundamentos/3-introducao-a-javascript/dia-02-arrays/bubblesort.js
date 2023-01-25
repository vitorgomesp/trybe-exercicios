let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let outroIndex = 1; outroIndex < numbers.length; outroIndex += 1)
    for (let index = 0; index < numbers.length; index += 1) {
        if ((numbers[index + 1]) < numbers[index]) {
            let posicaoInicial = numbers[index];
            numbers[index] = numbers[index + 1];
            numbers[index + 1] = posicaoInicial;        
        }
    }

console.log(numbers);

for (let outroIndex = 1; outroIndex < numbers.length; outroIndex += 1)
    for (let index = 0; index < numbers.length; index += 1) {
        if ((numbers[index + 1]) > numbers[index]) {
            let posicaoInicial = numbers[index];
            numbers[index] = numbers[index + 1];
            numbers[index + 1] = posicaoInicial;        
        }
    }

console.log(numbers);

let outrosNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (index = 0; index < outrosNumbers.length; index += 1) {
    if (index + 1 < outrosNumbers.length) {
        novoArray.push(outrosNumbers[index] * outrosNumbers[index + 1]);
    } else {
        novoArray.push(outrosNumbers[index] * 2);
    }
}

console.log(novoArray)