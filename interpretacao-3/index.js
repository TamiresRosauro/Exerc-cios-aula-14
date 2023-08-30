
// Leia o c�digo

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

/** false e undefined */

// b) Explique o valor impresso no console. Voc� sabe por que isso aconteceu?

/** imprime false, como string e udefined em altura, pois nao tem valor atribuido */