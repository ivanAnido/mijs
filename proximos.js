
const cardProx = document.getElementById("card-prox")


function obtenerProx(){
    const URLJSON = "../productos.json"
    fetch(URLJSON)
    .then( resp => resp.json() )
    .then ( data => {
      data.forEach(producto => {
        const contenedor = document.createElement("div")
        contenedor.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${producto.imagen}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.medidas}</p>
        <p class="card-text"><small class="text-muted">${producto.armado}</small></p>
      </div>
    </div>
  </div>
</div>
        `
     cardProx.append(contenedor)   
      });
    })
}
obtenerProx()

