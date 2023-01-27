let n = 5;
let linha = '';

for (let index = 1; index <= n; index += 1) {
    linha = linha + '*';    
}

for (let index = 1; index <= n; index += 1) {
    console.log(linha)
}

let outraLinha = '';

for (let index = 1; index <= n; index += 1) {
    outraLinha = outraLinha + '*';
    console.log(outraLinha)
}

