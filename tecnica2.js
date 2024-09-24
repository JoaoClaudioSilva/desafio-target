/**
 * @description 
 * Escreva um programa que verifique, em uma string, a existência da letra ‘a’, 
 * seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
 * 
 * 
 * @param {String} str String a ser verificada
 */
function contar(str) {

  const strMinuscula = str.toLowerCase();
  console.log(`Quantidade de A's ou a's: ${strMinuscula.match(/a/g || []).length}`);
}

let args = process.argv.slice(2);
let texto = args[0];


if (!(typeof texto === `string`)) {
  console.log(`O texto não foi informado pelo cmd, testando com o exemplo "Linha de teste para contar A's"`);
  texto = `Linha de teste para contar A's`;
}

contar(texto);
