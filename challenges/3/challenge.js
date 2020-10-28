/*
 * Calcular o MDC
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que calcula e retorna o MDC
 * (máximo divisor comum) entre dois números.
 * Para isso você pode usar as seguintes informações:
 *
 * 1. O MDC de um número N com 0 é o próprio N.
 *
 * 2. O MDC entre dois números M e N, onde M > N é
 * igual ao MDC de N e do resto da divisão de M por N.
 *
 * Você pode considerar que nas entradas dos testes
 * a > b sempre.
 */

function remainderOf(numerator = 1, denominator = 1) {
  return numerator % denominator
}

function MDC(a, b) {
  if (a == 0) return b
  if (b == 0) return a

  return a > b ? MDC(b, remainderOf(a, b)) : MDC(a, remainderOf(b, a))
}

module.exports = MDC
