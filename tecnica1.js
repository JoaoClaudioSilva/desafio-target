/**
 * @description 
 * Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor
 * sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8,
 * 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado
 * um número, ele calcule a sequência de Fibonacci e retorne uma mensagem 
 * avisando se o número informado pertence ou não a sequência.
 * 
 * 
 * @param {Number} n Número a ser testado na sequência
 * @returns {Boolean} Pertence ou não a sequência de Fibonacci
 */
function fibonacci(n) {

  let sequencia = [0, 1];

  // Testa se passou de N, caso não, calcula o próximo número e adiciona ao final do vetor
  while (sequencia[sequencia.length - 1] < n) {
    let proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
    sequencia.push(proximo);
  }

  console.log(`Sequência: ${sequencia}`);
  return sequencia.includes(n);
}



let args = process.argv.slice(2);
let numero = parseInt(args[0]);

if (isNaN(numero)) {
  console.log("O número não foi informado pelo cmd, testando com o exemplo n = 10");
  numero = 10;
}

if (fibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
