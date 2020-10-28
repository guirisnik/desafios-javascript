/*
 * Números primos
 */

/* ENUNCIADO
 *
 * Você deve fazer um programa que soma o valor de todos
 * os números primos existentes de 1 a n, onde n é dado como
 * parâmetro.
 *
 * Para isso você deve usar a função já escrita de verificação
 * de primalidade.
 *
 * Exemplo:
 * sumPrimes(15) deve retornar 41
 *
 */

const isPrime = require('../../utils/isPrime')

function sumPrimes(n) {
  let sum = 0
  for (let i = 2; i <= n; i++) {
    sum += isPrime(i) ? i : 0
  }
  return sum
}

module.exports = sumPrimes
