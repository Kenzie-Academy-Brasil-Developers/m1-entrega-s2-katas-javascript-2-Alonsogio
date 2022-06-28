// comece a criar a sua função add na linha abaixo
function add(number1, number2) {
    let soma = number1 + number2;
    return soma;
  }
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(number1, number2) {
    let multipli = 0;
  
    for (let i = 0; i < number2; i++) {
      multipli = add(number1, multipli);
    }
    return multipli;
  }
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n) {
  let expo = 1;

  for (let pot = 1; pot <= n; pot++) {
    expo = multiply(expo,x);
  }
  return expo;
}

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(y) {
    let fac = 1;
  
    for (let rial = 1; rial <= y; rial++) {
      fac = multiply(fac, rial);
    }
    return fac;
  }

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
