
class Muebles{
    constructor(nombre, material, medida, precio){
        this.nombre = nombre;
        this.hechaDe = material;
        this.medida = medida;
        this.precio = precio
    }
    mostrarMueble(){
        console.table("nombre: "+this.nombre+"\nhecha con : "+this.hechaDe+"\nmedida: "+this.medida+"\nprecio: $"+this.precio)
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

//ingreso de usuario
//variables
let muebles 
//declaracion de variables de ambientes
let comedor 
let dormitorio 
let living


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
            console.table(mesas)
            break;    
        case "2":
            console.table(sillas)
            break;
        case "3":
            console.table(banquetas)
            break;
        case"4":
            console.table(bancos)
            break;
        case "5":
            console.table(mueblesGuardado)
            break;
        default:
            console.table("opcion no valida")
            elegirMueble()
            break
    }
  }else if (dormitorio){
    switch(dormitorio){
        case "1":
            console.table(respaldosCama)
            break;    
        case "2":
            console.table(bancos)
            break;
        case "3":
            console.table(mesasLuz)
            break;
        case "4":
            console.table(mueblesGuardado)
            break;
        default:
            console.table("opcion no valida")
            elegirMueble()
            break
    }
  }else if(living){
    switch(living){
        case "1":
            console.table(racks)
            break;    
        case "2":
            console.table(comodas)
            break;
        case "3":
            console.table(mesasBajas)
            break;
        default:
            console.table("opcion no valida")
            elegirMueble()
            break
    }
  }else{
    console.log("opcion no valida")
    elegirAmbiente()
  }
}
//crearCuenta()
//ingresar()

//elegirAmbiente()

//array de todos los muebles
const totalMuebles=mesas.concat(sillas,banquetas,bancos,mueblesGuardado,respaldosCama,mesasLuz,racks,comodas,mesasBajas)
const mueblesDormitorio=respaldosCama.concat(bancos,mesasLuz,mueblesGuardado)
const mueblesLiving=racks.concat(comodas,mesasBajas,sillas)
const mueblesComedor=sillas.concat(banquetas,bancos,mueblesGuardado,mesas)
console.log (mueblesComedor)

//quiero pedir un precio por prompt y se me hace un bucle y cuando pongo el numero anda bien
//const baratos = totalMuebles.filter((mueble)=>mueble.precio<89000)
//console.table(baratos)

//ordenadas por precio
totalMuebles.sort((a,b)=>a.precio - b.precio)
console.table(totalMuebles)



/*elegir producto a fabricar
elegir medida 
elegir tipo de madera si aplica
elegir color si aplica
aclarar tiempo de demora */ 

