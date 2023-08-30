
// Leia o c�digo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console? 

/** Cachorro: imprime todos os dados de cachorro
 *  Gato: irá imprimir os mesmos dados de cachorro fazendo apenas a alteração de nome
 * Tartaruga: irá imprimir os mesmos dados de gato fazendo apenas a troca da ultima letra do nome */

// b) O que faz a sintaxe dos tr�s pontos antes do nome de um objeto?

/** Faz a cópia do objeto */
