//sumar "hola" por el numero que diga el prompt
//declaracion e iniciacion de variables
/*let saludo = "hola"
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
*/


//variables
let muebles 
//declaracion de variables de ambientes
let comedor 
let dormitorio 
let living
//declaracion e iniciacion de variables de muebles 
let mesas = "mesa de comedor 004: $109900 \nmesa de comedor 003: $88900 \nmesa de comedor 002: $112900 \nmesa comedor 001: $105900"
let sillas = "silla java: $21900"
let banquetas = "banco zoita: $21900 \nbanqueta caña: $24900 \nbanqueta java: $25900"
let bancos = "banco cuyo 001: $42900 \nbanco kiri 001: $18900 \nbanqueta baja Java: $17900 \nbanco Leña: $18900"
let mueblesGuardado = "modular 002: $145000 \nbiblioteca 001: $107900 \ngabinete 001: $98900 \nzapatero 001: $85900 \nmodular 001: $138900"
let respaldoCama = "respaldo de esterilla 001: $72900 \nrespaldo de esterilla 002: $84900"
let pieCama = "banco cuyo 001: $42900 \nbanco kiri 001: $18900 \nbanqueta baja Java: $17900 \nbanco Leña: $18900"
let mesasLuz = "mesa Khali: $15900 \nmesa de apoyo Gili: $44900 \nmesa Cuba: $32900 \nmesa de luz 003: $49900 \nmesa de luz 002: $48900 \nmesa de luz 001: $48900"
let racks = "rack Kobe 002: $145900 \ngabinete 001: $98900 \nrack tv 002: $131900 \nrack Kobe 001: $65900 \nrack tv 001: $145900"
let comodas = "comoda 001: $158900 \ncomoda 002: $145900 \ncomoda 003: $158900 \ngabinete 001: $98900 \ncomoda 004: $178900"
let mesasBajas = "mesa ratona Zoita: $91900 \nmesa ratona 001: $ 44900 \nmesa ratona 002: $98900 \nmesa ratona 003: $93900"
//declaracion de variables ingresar
let crearUsuario
let crearContraseña
let usuario
let contraseña
//funciones
function crearCuenta(){
    crearUsuario = prompt("crear un nombre de usuario")
    crearContraseña = prompt("crear contraseña")
}
function ingresar(){
   usuario = prompt("ingrese el nombre de usuario")
   if(usuario ==crearUsuario){
    for(i=0;i<3;i++){
        contraseña = prompt("ingrese contraseña");
    if (contraseña==crearContraseña){
        alert("contraseña correcta");
        break;
    }else{
        alert("clave incorrecta, restan "+ (3-i) + " intentos")
    }
   }
    }else{
        alert("usuario incorrecto vuelva a interlo")
        ingresar()
       }
}



function elegirAmbiente(){
    muebles = prompt("elija el ambiente por su numero:\n1-comedor \n2-dormitorio \n3-living")
    switch(muebles){
        case "1":
          comedor = prompt("elija el mueble por su numero: \n1-mesas \n2-sillas \n3-banquetas \n4-bancos \n5-muebles de guardado")
          elegirMueble(comedor,dormitorio,living) 
          break;
        case "2":
            dormitorio= prompt("elija el mueble por su numero:  \n1-respaldo de cama \n2-pie de cama \n3-mesa de luz \n4-muebles de guardado")
            elegirMueble(comedor,dormitorio,living)
            break;
        case "3":
            living = prompt("elija el mueble por su numero:  \n1-rack \n2-comodas \n3-mesas bajas")
            elegirMueble(comedor,dormitorio,living)
            break;
        default:
            alert("opcion no valida")
            elegirAmbiente()
    }
}
function elegirMueble(comedor,dormitorio,living){
  if(comedor){
    switch(comedor){
        case "1":
            console.log(mesas)
            break;    
        case "2":
            console.log(sillas)
            break;
        case "3":
            console.log(banquetas)
            break;
        case"4":
            console.log(bancos)
            break;
        case "5":
            console.log(mueblesGuardado)
            break;
        default:
            console.log("opcion no valida")
            elegirMueble()
            break
    }
  }else if (dormitorio){
    switch(dormitorio){
        case "1":
            console.log(respaldoCama)
            break;    
        case "2":
            console.log(pieCama)
            break;
        case "3":
            console.log(mesasLuz)
            break;
        case "4":
            console.log(mesasLuz)
            break;
        default:
            console.log("opcion no valida")
            elegirMueble()
            break
    }
  }else if(living){
    switch(living){
        case "1":
            console.log(racks)
            break;    
        case "2":
            console.log(comodas)
            break;
        case "3":
            console.log(mesasBajas)
            break;
        default:
            console.log("opcion no valida")
            elegirMueble()
            break
    }
  }else{
    console.log("opcion no valida")
    elegirAmbiente()
  }
}
crearCuenta()
ingresar()

elegirAmbiente()
