let player = 
{
    nome: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
};

console.log('A jogadora ' + player.nome + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.nome + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

console.log('A jogadora possui ' + player.medals['golden'] + ' medalhas de ouro e ' + player.medals['silver'] + ' medalhas de prata');


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let propriedade in names) {
    console.log('Olá ' + names[propriedade])
  }


  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key + car[key]);
  }


  function soma(a, b) {
    let resultado;
    return resultado = a + b; 
  }

  function subt(a, b) {
    let resultado;
    return resultado = a - b; 
  }

  function mult(a, b) {
    let resultado;
    return resultado = a * b; 
  }

  function div(a, b) {
    let resultado;
    return resultado = a / b; 
  }

  function rest(a, b) {
    let resultado;
    return resultado = a % b; 
  }

  function maiorDeDois(a, b) {
    if (a > b) {
        return a + ' é maior que ' + b;
    } else if (a === b) {
        return 'Os números são iguais';
    } else {
        return b + ' é maior que ' + a;
    }
  }

  console.log(maiorDeDois(999, 999))

  function maiorDeTres(a, b, c) {
    if (a > b && a > c) {
        return a + ' é maior que os outros dois números';
    } else if (a === b && a === c) {
        return 'Os números são iguais';
    } else if (b > a && b > c)    {
        return b + ' é maior que os outros dois números';
    } else {
        return c + ' é maior que os outros dois números';
    }
  }

  console.log(maiorDeTres(13, 19, 223))

  function posNeg(a) {
    if (a > 0) {
        return 'positive';
    } else if (a < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
  }

  console.log(posNeg(-30));

  function angulos(a, b, c) {
    if ((a + b + c === 180) && a > 0 && b > 0 && c > 0) {
        return true
    } else if (a + b + c !== 180 && a > 0 && b > 0 && c > 0) {
        return false
    } else {
        return 'Mensagem de erro'
    }
}


console.log(angulos(30, 60, 85))