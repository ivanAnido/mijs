//filtro por nombre en la lupa
let filterName = document.getElementById ("filterName")
//evento para el filtro por onchange 
filterName.onchange=()=> {
    initCards()
}

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

function renderCard(producto){
    //desestructuracion de mis objetos
        let{imagen, nombre} = producto
    
    let container = document.getElementById("cardsContainer")
    let card = `
    <img src="${imagen}" alt="imagen">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
    <div id="formulario">
    <select id="medida${nombre}" class="form-select form-select-sm" aria-label=".form-select-sm example">
      <option selected>medidas</option>
      <option value="standar">standar</option>
      <option value="chica">chica</option>
      <option value="grande">grande</option>
    </select>
    <select id="material${nombre}" class="form-select form-select-sm" aria-label=".form-select-sm example">
      <option selected>tipo de madera</option>
      <option value="zoita">zoita</option>
      <option value="kiri">kiri</option>
      <option value="lenga">lenga</option>
      <option value="no aplica">no aplica</option> 
    </select>
    <select id="color${nombre}" class="form-select form-select-sm" aria-label=".form-select-sm example">
      <option selected>color a pintar</option>
      <option value="claro">claro</option>
      <option value="oscuro">oscuro</option>
      <option value="natural">natural</option>
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
        let medida = document.getElementById(`medida${nombre}`).value
        let material = document.getElementById(`material${nombre}`).value
        let color = document.getElementById(`color${nombre}`).value

        let propductoModif = producto;
        propductoModif.medida = medida;
        propductoModif.material = material; 
        propductoModif.color = color;


      
        agregarProduccion(propductoModif)
     
       })
    ;
    }

    

function agregarProduccion(productoArmar){

    let produccion = [];
    const currentProduction = localStorage.getItem("produccion");
    if (currentProduction) {
        const productionArr = JSON.parse(currentProduction);
        produccion = productionArr;
    }


produccion.push(productoArmar)
//libreria toastify
Toastify({
    text:"producto agregado",
    duration:2500,
    gravity:"top",
    position:"right"
}).showToast()

localStorage.setItem("produccion",JSON.stringify(produccion) )


}


    
    initCards()