
/*
//fecha
const DateTime =luxon.DateTime
const dt = DateTime.now()
console.log(dt.toLocaleString(DateTime.DATE_SHORT))

const vencimientoCorto = dt.plus({days:30}).toLocaleString(DateTime.DATE_SHORT)
const vencimientoLargo = dt.plus({days:60}).toLocaleString(DateTime.DATE_SHORT)
console.log(vencimientoLargo)

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
//desestructuracion de mis objetos
    let{imagen, nombre, medida, material} = producto

let container = document.getElementById("cardsContainer")
let card = `
<img src="${imagen}" alt="imagen">
<div class="card-body">
  <h5 class="card-title">${nombre}</h5>
<div id="formulario">
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>medidas</option>
  <option value="1">${medida}</option>
  <option value="2">2424123</option>
  <option value="3">3453634</option>
</select>
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>tipo de madera</option>
  <option value="1">${material}</option>
  <option value="2">kiri</option>
  <option value="3">lenga</option>
  <option value="4">no aplica</option> 
</select>
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
  <option selected>color a pintar</option>
  <option value="1">claro</option>
  <option value="2">oscuro</option>
  <option value="3">natural</option>
</select>
<button type="submit" id="btn${nombre}" class=" d-grid gap-2 col-6 mx-auto mt-1 btn btn-outline-success">CARGAR</button>
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


let produccion = []

function agregarProduccion(productoArmar){
produccion.push(productoArmar)
//libreria toastify
Toastify({
    text:"producto agregado",
    duration:2500,
    gravity:"top",
    position:"right"
}).showToast()

localStorage.setItem("produccion",JSON.stringify(produccion) )
recuperarStorage()

}




function recuperarStorage(){
    //operardor logico or 
     produccion = JSON.parse(localStorage.getItem("produccion")) || []
     
     document.getElementById("producir").innerHTML= ``
     console.table(produccion)
     produccion.forEach(element => {  
     document.getElementById("producir").innerHTML+= `
         <tr>
         <td scope="col">${element.nombre}</td>
         <td scope="col">${element.medida}</td>
         <td scope="col">${element.material}</td>
         <td scope="col">${element.vencimiento}</td>
         </tr>
         ` 
     });
}



  
//crearCuenta()
//ingresar()
//initCards()*/







