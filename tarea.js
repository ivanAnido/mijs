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
//clases






class Muebles{
    constructor(nombre, material, medida, precio){
        this.nombre = nombre;
        this.hechaDe = material;
        this.medida = medida;
        this.precio = precio
    }
    mostrarMueble(){
        console.log("nombre: "+this.nombre+"\nhecha con : "+this.hechaDe+"\nmedida: "+this.medida+"\nprecio: $"+this.precio)
    }
}

//objetos
//mesas
const mesaComedor001 = new Muebles("Mesa de comedor 001","Zoita","160x90x77",105900)
const mesaComedor002 = new Muebles("Mesa de comedor 002","Zoita","160x90",112900)
const mesaComedor003 = new Muebles("Mesa de comedor 003","Lenga","90x120 redonda",88900)
const mesaComedor004 = new Muebles("Mesa de comedor 004","Zoita","190x85x77",109900)
//sillas
const sillaJava = new Muebles("Silla Java","hierro","40x43x80",21900)
//banquetas
const bancoZoita = new Muebles("Banco Zoita","Zoita","27x30x75",21900)
const banquetaCaña = new Muebles("Banqueta Caña","caña","39x39x97",24900)
const banquetaJava = new Muebles("Banqueta Java","hierro","34x38x97",25900)
//bancos
const bancoCuyo = new Muebles("Banco Cuyo","Zoita","100x30x50",42900)
const bancoKiri =new Muebles("Banco Kiri","Kiri","120x32x48",18900)
//muebles de guardado
const modular001 = new Muebles("Modular 001","Kiri","120x80x40",138900)
const modular002 = new Muebles("Modular 002","Kiri","120x70x30",145000)
const biblioteca001 = new Muebles("Biblioteca 001","Kiri","120x75x30",107900)
const gabinete001 = new Muebles("Gabinete 001","Kiri","70x40x80",98900)
//respaldos de cama
const respaldoEsterilla = new Muebles("Respaldo de esterilla 001","Lenga","100x130",72900)
//mesas de luz
const mesaKhali = new Muebles("Mesa Khali","Caña","42x50 redonda",15900)
const mesaGili = new Muebles("Mesa de apoyo Gili","Zoita","38x65 redonda",44900)
const mesaCuba = new Muebles("Mesa Cuba","Lenga","42x60 redonda",32900)
//Racks
const rackKobe001 = new Muebles("Rack Kobe 001","Lenga","140x37x58",65900)
const rackKobe002 = new Muebles("Rack Kobe 002","Lenga","140x37x58",145900)
const rackTv001 = new Muebles("Rack TV 001","Kiri","150x45x60",145900)
//Comodas
const comoda001 = new Muebles("Comoda 001","Kiri","150x45x80",158900)
const comoda002 = new Muebles("Comoda 002","Kiri","150x45x80",145900)
//mesas bajas
const mesaRatona001 = new Muebles("Mesa ratona 001","Kiri","120x50",44900)
const mesaRatona002 = new Muebles("Mesa ratona 002","Lenga","80x47 redonda",98900)
const mesaRatonaZoita = new Muebles("Mesa ratona Zoita","Zoita","120x50",91900)

//arrays

//mesas
const mesas = []
mesas.push(mesaComedor001,mesaComedor002,mesaComedor003,mesaComedor004)
//sillas
const sillas = []
sillas.push(sillaJava)
//banquetas
const banquetas = []
banquetas.push(bancoZoita,banquetaCaña,banquetaJava)
//bancos
const bancos = []
bancos.push (bancoCuyo,bancoKiri)
//muebles de guardado
const mueblesGuardado =[]
mueblesGuardado.push(modular001,modular002,biblioteca001,gabinete001)
//respaldos de cama
const respaldosCama =[]
respaldosCama.push(respaldoEsterilla)
//mesas de luz
const mesasLuz =[]
mesasLuz.push(mesaKhali,mesaGili,mesaCuba)
//racks
const racks =[]
racks.push(rackKobe001,rackKobe002,rackTv001)
//comodas
const comodas=[]
comodas.push(comoda001,comoda002)
//mesas bajas
const mesasBajas =[]
mesasBajas.push(mesaRatona001,mesaRatona002,mesaRatonaZoita)



//variables
let muebles 
//declaracion de variables de ambientes
let comedor 
let dormitorio 
let living
//declaracion e iniciacion de variables de muebles 
//let mesas = "mesa de comedor 004: $109900 \nmesa de comedor 003: $88900 \nmesa de comedor 002: $112900 \nmesa comedor 001: $105900"
//let sillas = "silla java: $21900"
//let banquetas = "banco zoita: $21900 \nbanqueta caña: $24900 \nbanqueta java: $25900"
//let bancos = "banco cuyo 001: $42900 \nbanco kiri 001: $18900 \nbanqueta baja Java: $17900 \nbanco Leña: $18900"
//let mueblesGuardado = "modular 002: $145000 \nbiblioteca 001: $107900 \ngabinete 001: $98900 \nzapatero 001: $85900 \nmodular 001: $138900"
//let respaldoCama = "respaldo de esterilla 001: $72900 \nrespaldo de esterilla 002: $84900"
//let pieCama = "banco cuyo 001: $42900 \nbanco kiri 001: $18900 \nbanqueta baja Java: $17900 \nbanco Leña: $18900"
//let mesasLuz = "mesa Khali: $15900 \nmesa de apoyo Gili: $44900 \nmesa Cuba: $32900 \nmesa de luz 003: $49900 \nmesa de luz 002: $48900 \nmesa de luz 001: $48900"
//let racks = "rack Kobe 002: $145900 \ngabinete 001: $98900 \nrack tv 002: $131900 \nrack Kobe 001: $65900 \nrack tv 001: $145900"
//let comodas = "comoda 001: $158900 \ncomoda 002: $145900 \ncomoda 003: $158900 \ngabinete 001: $98900 \ncomoda 004: $178900"
//let mesasBajas = "mesa ratona Zoita: $91900 \nmesa ratona 001: $ 44900 \nmesa ratona 002: $98900 \nmesa ratona 003: $93900"
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
