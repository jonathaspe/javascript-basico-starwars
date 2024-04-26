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

// Operadores matemáticos, operadores de comparação e funções

/* //Operadores matemáticos //

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

/* //Operadores de comparação //

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

/* //Funções//

function soma(n1, n2) {
    console.log( n1 + n2)
}

soma(5, 10)

function boasVindas(nome) {
    alert(nome + ', seja bem-vindo(a)')
}

boasVindas('Jonathas Santos')

function soma(n1, n2) {
    return n1 + n2
}

var resultado = soma(5, 10)
console.log(resultado)
*/


// Cotrole de fluxos //

// Como um cliente correntis de um banco
// Quero sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito


// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando eu faço um saque de 500 reais
// Então o valor é debitado do meu saldo

// var saldo = 1000

// function saque(valor) {
//     saldo = saldo - valor
// }

// saque(500)
// console.log(saldo)

// Cenário 2: Saque com valor superior ao saldo em conta
// Dado que o meu saldo é de 1000 reais
// Quando eu faço um saque de 1001 reais
// Então não de permitir o saque
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// var saldo = 1000

// function saque(valor) {
//     if(valor > saldo) {
//         console.log('Valor do saque superior ao saldo')
//     }else{
//         saldo = saldo - valor
//     }
    
// }

// saque(1001)
// console.log(saldo)

// Cenário 3: saque com o valor máximo
// Dado que o meu saldo é de 1000 reais
// E que o valor máximo por operação é de 700 reais
// Quando eu faço um saque de 701 reais
// Então não de permitir o saque
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

// var saldo = 1000

// function saque(valor) {
//     if(valor > saldo) {
//         console.log('Valor do saque superior ao saldo')
//     }else if (valor > 700){
//         console.log('Valor do saque superior ao máximo permitido por operação')
//     }else{
//         saldo = saldo - valor
//     }
    
// }

// saque(701)
// console.log(saldo)


// Arrays//

/*var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

console.log(gaveteiro[0])

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

console.log( typeof personagens)

//para adicionar um novo personagem
personagens.push('C3pO')
personagens.push('R2D2')
console.log(personagens)

//Remover o último item da lista
personagens.pop()

//Remover um item específico do array
personagens = personagens.filter(function(p){
    return p !== 'Darth Vader'
})

//Remover um item específico do array
personagens = personagens.filter(function(p){
    return p === 'Mestre Yoda'
})

console.log(personagens)*/

// Controles de repetição (Loops)

/*var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// console.log(personagens[0])
// console.log(personagens[1])
// console.log(personagens[2])
// console.log(personagens[3])

//Visualizar cada um dos itens que estão no array personagens
personagens.forEach(function(p){
    console.log(p)
})

//Visualizar a posição de cada um dos itens do array personagens
for (var i in personagens) {
    console.log(i)
}

//Visualizar cada um dos itens do array personagens
for (var i in personagens) {
    console.log(personagens[i])
}

//Visualizar cada um dos itens do array personagens
for (var i  = 0; i <= 10; i++) {
    console.log(i)
    // o código será executado até que a condição retorne false, ou seja, até que i seja maior que 10
}*/

//Objetos

// var yoda = {}

// yoda.nome = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true 

/*
var yoda = {
    nome: 'Mestre Yoda',
    idade: 100,
    jedi: true,
    //criação de função com interpolação de string
    mostraIdade: function() {
        console.log(`A idade do ${this.nome} é ${this.idade} anos`)
    }
} 

console.log(yoda)
yoda.mostraIdade()
*/

//Constantes

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)