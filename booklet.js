//actividad 1 homero
/*let nombre = "homero"
let edad = 40
let apellido = "simpson"

//actividad 2 ciudades
const ciudad1 = "monte grande"
const ciudad2 = "ezeiza"
const ciudad3 = "lomas"
const ciudad4 = "lanus"
const ciudad5 = "banfield"

//actividad 3 carnet
let nombre = "homero "
let edad = 40
let apellido = "simpson "
let domicilio = " springfield "
let nacionalidad = "USA "
let espacio = " "
let carnet = "nombre: "+nombre+espacio+
             "apellido: "+apellido+espacio+
             "edad: "+edad+espacio+
             "domicilio: "+domicilio+espacio+
             "nacionalidad "+nacionalidad
console.log(carnet)             
//actividad 4 registro de personas 
let nombrePadre = prompt("ingrese nombre del padre")
let nombreMadre = prompt("ingrese nombre del madre")
let nombreHijo = prompt("ingrese nombre del hijo")
let espacio = " "
let familia ="padre: "+nombrePadre+espacio+"madre: "+nombreMadre+espacio+"hijo: "+nombreHijo
console.log(familia)

//actidad 5 descuentos
let parcial = parseFloat(prompt("ingrese el precio a descontar"))
let descuento = parseFloat(prompt("ingrese el descuento"))
let descuentoHecho =parseFloat(alert("el descuento es de: "+(parcial*descuento)/100))


//javascript 2

//actividad 1 yo no fui
let miNombre = "ivan"
let nombre = prompt("diga un nombre")

if(nombre == miNombre){
    console.log("fui yo")
}else{
    console.log("yo no fui")
}

//actidad 2 precionar y
let tecla =prompt("precione una tecla")
if((tecla == "y") || (tecla=="Y")){
    alert("correcto")
}else{
    alert("incorrecto")
}
//actividad 3 escoger personaje
let elijaPj = parseInt(prompt("elija un n° "))

let uno = "homero"
let dos = "marge"
let tres = "bart"
let cuatro = "lisa"

if (elijaPj==1){
    alert ("elegiste a "+uno)
}else if(elijaPj==2){
    alert("elegiste a "+dos)
}else if(elijaPj==3){
    alert("elegiste a "+tres)
}else if(elijaPj==4){
    alert("elegiste a "+cuatro)
}else{
    alert ("elija un n° del 1 al 4")
}
//actividad 4 presupuesto
let entrada = parseFloat(prompt("ingrese un numero"))

if(entrada<=1000){
    console.log("presupuesto bajo")
}else if((entrada>1000)&&(entrada<=3000)){
    console.log("presupuesto medio")
}else if(entrada>3000){
    console.log("presupuesto alto")
}else{
    console.log("error")
}
//actividad 5 vacio
let producto1 = prompt("primer producto")
let producto2 = prompt("segundo producto")
let producto3 = prompt("tercer producto")
let producto4 = prompt("cuarto producto")
let heladera = console.log("1° "+producto1+"\n2° "+producto2+"\n3° "+producto3+"\n4° "+producto4)

if((producto1 !="")&&(producto2!="")&&(producto3!="")&&(producto4!="")){
    heladera
}else{
    alert("error")
}
//javascript 3 
//actividad 1 el pizarron
let numero =parseInt(prompt("ingrese la cantidad de repeticiones"))
let texto = prompt("diga el texto que quiere repetir")

for(i=0;i<numero;i++){
    alert(texto)
}
//actividad 2 cuadrado ordinario
let numero = parseInt(prompt("elija un n°"))
let mensaje = alert("lado")

for(i=0;i<numero;i++){
    if(i>3){
        break
    }
    mensaje
}
//actividad 3 registro alumnos
let alumnos = ""
for(i=0;i<10;i++){
    alumnos += prompt("nombre de alumno")+"\n"  
}
console.log(alumnos)
//actividad 4 el innombrable
let nombre = prompt("ingrese un nombre")
let ingresados = ""
while(nombre!="voldemort"){
    ingresados+= nombre+"\n"
    nombre = prompt("ingrese un nombre")
}alert(ingresados)
//actividad 5 comprando productos
let producto = prompt("ingrese un numero del 1 al 4 (esc para salir)")
while(producto!="esc"){
    switch(producto){
        case "1":
            console.log("tomate")
            break;
            case "2":
                console.log("papa")
        break;
        case "3":
            console.log("carne")
        break;
        case "4":
            console.log("pollo")
            break;
            default:
                console.log("no existe")
                break;            
            }
            producto = prompt("ingrese un numero del 1 al 4 (esc para salir)")
        }
        //javascript 4
        //actividad 1 entradas y salidas
        function entrada(){
            return prompt("ingresar un valor")
        }
        function precesamiento(valor){
    return "la entrada es "+valor
}
function salida(valor){
    alert(valor)
}

salida(precesamiento(entrada()))

//actividad 2 redondeo
function entrada(valor){
    return Math.round(valor)
}
for(i=0;i<5;i++){
    let numero = prompt("ingrese numero")
    alert(entrada(numero))
}
//actividad 3 impuestos
function impuesto(precio,porcentaje){
    return precio+((precio*porcentaje)/100)
}
for(i=0;i<5;i++){
    let resultado = impuesto (parseFloat(prompt("ingrese un numero")),
    parseFloat(prompt("ingrese el %")))
    alert (resultado)
}
//actividad 4 cotizacion

function elegirMueble(comedor,dormitorio,living){
    return (comedor = prompt("elija el mueble por su numero: \n1-mesas \n2-sillas \n3-banquetas \n4-bancos \n5-muebles de guardado"))
    && (dormitorio = prompt("elija el mueble por su numero:  \n1-respaldo de cama \n2-pie de cama \n3-mesa de luz \n4-muebles de guardado"))
    && (living =prompt("elija el mueble por su numero:  \n1-rack \n2-comodas \n3-mesas bajas \n4-escritorio y recibidores \n5-sillones"))
}*/

