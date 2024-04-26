console.log('Olá, JavaScript!')

/* Entendendo os tipos de variáveis e os seus dados

var nome = 'Darth Vader'
var idade = 100
var jedi = false

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi) */

var userName = 'Jonathas Santos'

document.getElementById('user').innerHTML = userName

/* Operadores matemáticos 

var n1 = 5
var n2 = 2.5

console.log(typeof n1)
confirm.log(typeof n2)

// + para somar
// - para subtrair
// * para multiplicar
// / para dividir


var total = n1 / n2
console.log(total)
*/

/* Operadores de comparação 

var v1 = 5
var v2 = 5

// == Retorna verdadeiro se os valores comparados forem iguais
// === Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais
// != Retorna verdadeiro se os valores comparados não forem iguais
// !== Esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
// Maior que (>)
// Maior ou igual que (>=)
// Menor que (<)
// Menor ou igual que (<=)

var resultado = v1 === v2
console.log(resultado)
*/

/* Funções

function soma(n1, n2) {
    console.log( n1 + n2)
}

soma(5, 10)

function boasVindas(nome) {
    alert(nome + ', seja bem-vindo(a)')
}

boasVindas('Jonathas Santos')*/

function soma(n1, n2) {
    return n1 + n2
}

var resultado = soma(5, 10)
console.log(resultado)