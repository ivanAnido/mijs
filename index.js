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
        let{imagen, nombre, medida, material} = producto
    
    let container = document.getElementById("cardsContainer")
    let card = `
    <img src="${imagen}" alt="imagen">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
    <div id="formulario">
    <select id="medida${nombre}" class="form-select form-select-sm" aria-label=".form-select-sm example">
      <option selected>medidas</option>
      <option value="qeqwe131">qeqwe131</option>
      <option value="2424123">2424123</option>
      <option value="la 3">la 3</option>
    </select>
    <select id="material${nombre}" class="form-select form-select-sm" aria-label=".form-select-sm example">
      <option selected>tipo de madera</option>
      <option value="1">${material}</option>
      <option value="2">kiri</option>
      <option value="3">lenga</option>
      <option value="4">no aplica</option> 
    </select>
    <select id="color${nombre}" class="form-select form-select-sm" aria-label=".form-select-sm example">
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

    let produccion = JSON.parse(localStorage.getItem("produccion") || [])

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