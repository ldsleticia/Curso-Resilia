/* Preciso listar a soma de todos os números naturais múltiplos de 3 ou 5 menores que um determinado valor passado. Por exemplo, se passarmos 10 como valor, os múltiplos são 3, 5, 6 e 9: a soma desses múltiplos dá 23. Caso o número passado for negativo, preciso que a função retorne 0. */

function multiplos(num) {
  let soma = 0;
  if(num < 0){
    return 0;
  }
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma = soma + i;
    }
  }
  return soma;
}

console.log(multiplos(10));

//mostra(10);
