


function recuperarStorage(){
    //operardor logico or 
     let produccion = JSON.parse(localStorage.getItem("produccion")) || []
     
     document.getElementById("producir").innerHTML= ``
     console.table(produccion)
     produccion.forEach(element => {  
     document.getElementById("producir").innerHTML+= `
         <tr>
         <td scope="col">${element.nombre}</td>
         <td scope="col">${element.medida}</td>
         <td scope="col">${element.color}</td>
         <td scope="col">${element.material}</td>
         <td scope="col">${element.vencimiento}</td>
         </tr>
         ` 
     });
}
recuperarStorage()
