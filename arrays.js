//exercicio 8

const numeros = [10,20,30,40,50]
numeros.splice(0,2,5,15)
console.log(numeros)

//exercicio 9

const letras = ['a','b','c','d','e']
const consoantesdoarray = letras.slice(1,4)
console.log(consoantesdoarray)

//exercicio 10

const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = array1.concat(array2)
console.log(array3)

//Exercicio 1

let cores1 = ['Azul','Preto','Amarelo']
let cores2 = ['Verde','Roxo','Ciano']

const cores12 = cores1.concat(cores2)
console.log(cores12)

//Exercicio 2

let numeros2 = ['1','2','3','4','5','6','7','8','9','10']
console.log(numeros2)
let partenumeros = numeros2.slice(3,8)
console.log(partenumeros)

//Exercicio 3

const frutas = ['Maçã','Banana','Laranja','Limão','Abacaxi']
frutas.splice(2,2,'kiwi','pêssego')
console.log(frutas)

//Exercicio 4

let menuPrincipal = ['Estrogonofe de Frango','Lasanha','PF']
let menuDeSobremesas = ['Petit gâteau','Prato de Brigadeiro','Gelatina']

const menuCompleto = menuPrincipal.concat(menuDeSobremesas)
console.log(menuCompleto)