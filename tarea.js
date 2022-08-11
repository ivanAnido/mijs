


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
let material = producto.hechaDe
let container = document.getElementById("cardsContainer")
let card = `
<img src="${imagen}" alt="imagen">
<div class="card-body">
  <h5 class="card-title">${nombre}</h5>
<div id="formulario">
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>medidas</option>
  <option value="1">${medida}</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>tipo de madera</option>
  <option value="1">${material}</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>color a pintar</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<button type="submit" id="btn${nombre}" class=" d-grid gap-2 col-6 mx-auto mt-1 btn btn-outline-success">submit</button>
</div>
</div>`

 let node = document.createElement('div');
 node.className = 'card'; 
 node.style = 'width: 18rem;'
 node.innerHTML = card;
container.appendChild(node)

 
   document.getElementById(`btn${nombre}`).addEventListener("click",function(){
    agregarProduccion(producto)
   })
;
}

function agregarProduccion(productoArmar){
produccion.push(productoArmar)
console.log(produccion)
document.getElementById("producir").innerHTML+= `
<tr>
<td scope="col">${productoArmar.nombre}</td>
<td scope="col">${productoArmar.medida}</td>
<td scope="col">${productoArmar.material}</td>
</tr>
`
}
const produccion = []
//quiero agregar un evento a las card 


  
//crearCuenta()
//ingresar()
initCards()







