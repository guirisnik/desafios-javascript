/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

function sumArguments(...arr) {
  return arr.reduce((sum, argument) => (sum += argument))
}

module.exports = sumArguments
