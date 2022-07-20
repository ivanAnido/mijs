//sumar "hola" por el numero que diga el prompt
//declaracion e iniciacion de variables
let saludo = "hola"
let numero = parseInt(prompt("diga un numero "))
//cliclo 
for (let i = 1; i < numero; i++) {
    saludo = saludo + " hola";
}
console.log (saludo);

//concatena numeros y letras hasta que se escriba la "s"
//declaracion e iniciacion de variables
let numere = 0
let number
//ciclo
do{
number = prompt("decir un n°")
console.log ( numere=numere+number)
}while (number!="s")
