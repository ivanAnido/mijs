


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
         <td scope="col">${element.material}</td>
         <td scope="col">${element.vencimiento}</td>
         </tr>
         ` 
     });
}
recuperarStorage()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a138643997mshd314618069c184ap15cd73jsn95087fdeba72',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));