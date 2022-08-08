
class Muebles{
    constructor(nombre, material, medida, imagen, precio,){
        this.nombre = nombre;
        this.hechaDe = material;
        this.medida = medida;
        this.precio = precio;
        this.imagen = imagen;
        
    }
}

//objetos
//mesas
const mesaComedor001 = new Muebles("Mesa de comedor 001".toUpperCase(),"Zoita","160x90x77","./assent/mesa comedor 001.jpeg",105900)
const mesaComedor002 = new Muebles("Mesa de comedor 002".toUpperCase(),"Zoita","160x90","./assent/mesa comedor 002.jpeg",112900)
const mesaComedor003 = new Muebles("Mesa de comedor 003".toUpperCase(),"Lenga","90x120 redonda","./assent/mesa comedor 003.jpeg",88900)
const mesaComedor004 = new Muebles("Mesa de comedor 004".toUpperCase(),"Zoita","190x85x77","./assent/mesa comedor 004.png",109900)
//sillas
const sillaJava = new Muebles("Silla Java".toUpperCase(),"hierro","40x43x80","./assent/silla java.jpeg",21900)
//banquetas
const bancoZoita = new Muebles("Banco Zoita".toUpperCase(),"Zoita","27x30x75","./assent/banco zoita.jpeg", 21900)
const banquetaCaña = new Muebles("Banqueta Caña".toUpperCase(),"caña","39x39x97","./assent/banqueta caña.jpeg",24900)
const banquetaJava = new Muebles("Banqueta Java".toUpperCase(),"hierro","34x38x97","./assent/banqueta java.jpeg",25900)
//bancos
const bancoCuyo = new Muebles("Banco Cuyo".toUpperCase(),"Zoita","100x30x50","./assent/banco cuyo.png",42900)
const bancoKiri =new Muebles("Banco Kiri".toUpperCase(),"Kiri","120x32x48","./assent/banco kiri 001.jpeg",18900)
//muebles de guardado
const modular001 = new Muebles("Modular 001".toUpperCase(),"Kiri","120x80x40","./assent/modular 001.jpeg",138900)
const modular002 = new Muebles("Modular 002".toUpperCase(),"Kiri","120x70x30","./assent/modular 002.png",145000)
const biblioteca001 = new Muebles("Biblioteca 001".toUpperCase(),"Kiri","120x75x30","./assent/biblioteca 001.jpeg",107900)
const gabinete001 = new Muebles("Gabinete 001".toUpperCase(),"Kiri","70x40x80","./assent/gabinete 001.jpeg",98900)
//respaldos de cama
const respaldoEsterilla = new Muebles("Respaldo de esterilla 001".toUpperCase(),"Lenga","100x130","./assent/respaldo esterilla.jpeg",72900)
//mesas de luz
const mesaKhali = new Muebles("Mesa Khali".toUpperCase(),"Caña","42x50 redonda","./assent/mesa de luz 003.jpeg",15900)
const mesaGili = new Muebles("Mesa de apoyo Gili".toUpperCase(),"Zoita","38x65 redonda","./assent/mesa apoyo gili.png",44900)
const mesaCuba = new Muebles("Mesa Cuba".toUpperCase(),"Lenga","42x60 redonda","./assent/mesa cuba.jpeg",32900)
//Racks
const rackKobe001 = new Muebles("Rack Kobe 001".toUpperCase(),"Lenga","140x37x58","./assent/rack kobe 001.jpeg",65900)
const rackKobe002 = new Muebles("Rack Kobe 002".toUpperCase(),"Lenga","140x37x58","./assent/rack kobe 002.png",145900)
const rackTv001 = new Muebles("Rack TV 001".toUpperCase(),"Kiri","150x45x60","./assent/rack tv.jpeg",145900)
//Comodas
const comoda001 = new Muebles("Comoda 001".toUpperCase(),"Kiri","150x45x80","./assent/comoda 002.jpeg",158900)
const comoda002 = new Muebles("Comoda 002".toUpperCase(),"Kiri","150x45x80","./assent/comoda 003.jpeg",145900)
//mesas bajas
const mesaRatona001 = new Muebles("Mesa ratona 001".toUpperCase(),"Kiri","120x50","./assent/mesa ratona 001.jpeg",44900)
const mesaRatona002 = new Muebles("Mesa ratona 002".toUpperCase(),"Lenga","80x47 redonda","./assent/mesa ratona 002.png", 98900)
const mesaRatonaZoita = new Muebles("Mesa ratona Zoita".toUpperCase(),"Zoita","120x50","./assent/mesa ratona 003.png",91900)

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



/*function elegirAmbiente(){
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
}*/




//array de todos los muebles
const totalMuebles=mesas.concat(sillas,banquetas,bancos,mueblesGuardado,respaldosCama,mesasLuz,racks,comodas,mesasBajas)
const mueblesDormitorio=respaldosCama.concat(bancos,mesasLuz,mueblesGuardado)
const mueblesLiving=racks.concat(comodas,mesasBajas,sillas)
const mueblesComedor=sillas.concat(banquetas,bancos,mueblesGuardado,mesas)
console.log (mueblesComedor)


//declaracion de variables para el filtro 
let filterName = document.getElementById ("filterName")
//evento para el filtro por onchange 
filterName.onchange=()=> {
    initCards()
}

//funcion para filtrar por nombre de los muebles las cartas
//si coincide el nombre se pushea en un nuevo array "products" sino muestra todos los muebles
//luego vacio el html y que muestre todos muebles de vuelta
function initCards(){
    let products= [];

    if(filterName.value) {
    for(i=0;i<totalMuebles.length;i++){
       let nombre = filterName.value
       let mueble = totalMuebles[i]
       if(mueble.nombre.includes(nombre.toUpperCase())){
            products.push(mueble)
       }
    }
    }else{
        products = totalMuebles
    }
    let container = document.getElementById("cardsContainer")

    container.innerHTML = '';

    for(i=0;i<products.length;i++){
        let mueble = products[i]
        renderCard(mueble)
    }
}

//funcion para crear las card
function renderCard(producto){
let imagen = producto.imagen
let nombre = producto.nombre
let medida = producto.medida
let precio = producto.precio
let container = document.getElementById("cardsContainer")
let card = `
<img src="${imagen}" alt="imagen">
<div class="card-body">
  <h5 class="card-title">${nombre}</h5>
  <p class="card-text">${medida}</p>
  <p class="card-text">${precio}</p>


  <a href="#" class="btn btn-primary">opciones</a>
</div>`

 let node = document.createElement('div');
 node.className = 'card'; 
 node.style = 'width: 18rem;'
 node.innerHTML = card;
container.appendChild(node)
}


  
//crearCuenta()
//ingresar()
initCards()







