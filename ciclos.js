//ciclo por conteo
/*
for (let i=1; i<6; i++){
    console.log ("hola coder, ciclo "+i)
}

//tabla multiplicar ej
let ingresarNumero = parseInt(prompt("ingrese numero"));
//ciclo
for (let i=1; i<=10; i++){
    let resultado = ingresarNumero * i ;
    console.log (ingresarNumero + " * " + i + " = " + resultado);
}

//turnos ej
for (let i=1; i<=4; i++){
    let = ingresarNombre = prompt("ingresar nombre");
    console.log ("turno n° " + i +", "+  ingresarNombre);
}

//ejemplo contraseña con sentencia BREAK
let password;
for (i=1; i<=3; i++){
    password = prompt("ingrese contraseña");
    if (password=="coder123"){
        console.log("contraseña correcta");
        break;
    }else{
        console.log("clave incorrecta, restan "+ (3-i) + " intentos")
    }
    
}

//ciclo con while ej juego oracion
let oracion ="";
let palabra = prompt("ingrese una palabra para armar oracion (s-salir del juego)");

while(palabra != "s"){
    oracion = oracion + " " + palabra;
    palabra = prompt("ingresa otra palabra para aramr la oracion (s-salir del juego)");
}

alert("la oracion formada es: " + oracion);

//do while ej
let numero;
do{
    numero = prompt ("ingresar n°");
    console.log(numero);
}while(parseInt(numero));

//SWITCH ej (condicional)
let producto = prompt("ingresa el producto y te dire el precio")
let precio = 0
while (producto !="s"){
    switch(producto){
        case "azucar":
            console.log("azucar sale 130")
            precio=precio+130
            break
            case "yerba":
                console.log("yerba sale 450")
            precio=precio+450
            break
            case "te":
                console.log("te sale 90")
                precio=precio+90
                break
        default:
            console.log("ese producto no esta")
            break
        }
        producto= prompt("ingresa el producto y re dire el precio")            
    }
    console.log("total a pagar es $"+precio)
    //tarea 
    
    let saludo = "hola"
    let numero = parseInt(prompt("diga un numero "))
    for (let i = 1; i < numero; i++) {
        saludo = saludo + " hola";
    }
    console.log (saludo);
    
    let numero = 0
    let number
    do{
        number = prompt("decir un n°")
        console.log ( numero=numero+number)
    }while (number!="s")
    */
    




