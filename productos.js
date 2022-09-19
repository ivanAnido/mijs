//fecha para definir que dia se vence la produccion de cada mueble 
const DateTime =luxon.DateTime
const dt = DateTime.now()
console.log(dt.toLocaleString(DateTime.DATE_SHORT))
//si se tarde 30 dias 0 60 dias dependiendo el producto
const vencimientoCorto = dt.plus({days:30}).toLocaleString(DateTime.DATE_SHORT)
const vencimientoLargo = dt.plus({days:60}).toLocaleString(DateTime.DATE_SHORT)
console.log(vencimientoLargo)

class Muebles{
    constructor(nombre, material, medida, imagen, vencimiento,){
        this.nombre = nombre;
        this.material = material;
        this.medida = medida;
        this.vencimiento = vencimiento;
        this.imagen = imagen;
        
    }
}

//objetos
//mesas
const mesaComedor001 = new Muebles("Mesa de comedor 001".toUpperCase(),"Zoita","160x90x77","./assent/mesa comedor 001.jpeg",vencimientoLargo )
const mesaComedor002 = new Muebles("Mesa de comedor 002".toUpperCase(),"Zoita","160x90","./assent/mesa comedor 002.jpeg",vencimientoCorto)
const mesaComedor003 = new Muebles("Mesa de comedor 003".toUpperCase(),"Lenga","90x120 redonda","./assent/mesa comedor 003.jpeg",vencimientoCorto)
const mesaComedor004 = new Muebles("Mesa de comedor 004".toUpperCase(),"Zoita","190x85x77","./assent/mesa comedor 004.png",vencimientoLargo)
//sillas
const sillaJava = new Muebles("Silla Java".toUpperCase(),"hierro","40x43x80","./assent/silla java.jpeg",vencimientoCorto)
//banquetas
const bancoZoita = new Muebles("Banco Zoita".toUpperCase(),"Zoita","27x30x75","./assent/banco zoita.jpeg", vencimientoLargo)
const banquetaCaña = new Muebles("Banqueta Caña".toUpperCase(),"caña","39x39x97","./assent/banqueta caña.jpeg",vencimientoCorto)
const banquetaJava = new Muebles("Banqueta Java".toUpperCase(),"hierro","34x38x97","./assent/banqueta java.jpeg",vencimientoLargo)
//bancos
const bancoCuyo = new Muebles("Banco Cuyo".toUpperCase(),"Zoita","100x30x50","./assent/banco cuyo.png",vencimientoCorto)
const bancoKiri =new Muebles("Banco Kiri".toUpperCase(),"Kiri","120x32x48","./assent/banco kiri 001.jpeg",vencimientoLargo)
//muebles de guardado
const modular001 = new Muebles("Modular 001".toUpperCase(),"Kiri","120x80x40","./assent/modular 001.jpeg",vencimientoCorto)
const modular002 = new Muebles("Modular 002".toUpperCase(),"Kiri","120x70x30","./assent/modular 002.png",vencimientoLargo)
const biblioteca001 = new Muebles("Biblioteca 001".toUpperCase(),"Kiri","120x75x30","./assent/biblioteca 001.jpeg",vencimientoLargo)
const gabinete001 = new Muebles("Gabinete 001".toUpperCase(),"Kiri","70x40x80","./assent/gabinete 001.jpeg",vencimientoLargo)
//respaldos de cama
const respaldoEsterilla = new Muebles("Respaldo de esterilla 001".toUpperCase(),"Lenga","100x130","./assent/respaldo esterilla.jpeg",vencimientoCorto)
//mesas de luz
const mesaKhali = new Muebles("Mesa Khali".toUpperCase(),"Caña","42x50 redonda","./assent/mesa de luz 003.jpeg",vencimientoLargo)
const mesaGili = new Muebles("Mesa de apoyo Gili".toUpperCase(),"Zoita","38x65 redonda","./assent/mesa apoyo gili.png",vencimientoCorto)
const mesaCuba = new Muebles("Mesa Cuba".toUpperCase(),"Lenga","42x60 redonda","./assent/mesa cuba.jpeg",vencimientoCorto)
//Racks
const rackKobe001 = new Muebles("Rack Kobe 001".toUpperCase(),"Lenga","140x37x58","./assent/rack kobe 001.jpeg",vencimientoCorto)
const rackKobe002 = new Muebles("Rack Kobe 002".toUpperCase(),"Lenga","140x37x58","./assent/rack kobe 002.png",vencimientoLargo)
const rackTv001 = new Muebles("Rack TV 001".toUpperCase(),"Kiri","150x45x60","./assent/rack tv.jpeg",vencimientoLargo)
//Comodas
const comoda001 = new Muebles("Comoda 001".toUpperCase(),"Kiri","150x45x80","./assent/comoda 002.jpeg",vencimientoCorto)
const comoda002 = new Muebles("Comoda 002".toUpperCase(),"Kiri","150x45x80","./assent/comoda 003.jpeg",vencimientoLargo)
//mesas bajas
const mesaRatona001 = new Muebles("Mesa ratona 001".toUpperCase(),"Kiri","120x50","./assent/mesa ratona 001.jpeg",vencimientoLargo)
const mesaRatona002 = new Muebles("Mesa ratona 002".toUpperCase(),"Lenga","80x47 redonda","./assent/mesa ratona 002.png", vencimientoLargo)
const mesaRatonaZoita = new Muebles("Mesa ratona Zoita".toUpperCase(),"Zoita","120x50","./assent/mesa ratona 003.png",vencimientoCorto)

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

//array de todos los muebles
const totalMuebles=mesas.concat(sillas,banquetas,bancos,mueblesGuardado,respaldosCama,mesasLuz,racks,comodas,mesasBajas)
const mueblesDormitorio=respaldosCama.concat(bancos,mesasLuz,mueblesGuardado)
const mueblesLiving=racks.concat(comodas,mesasBajas,sillas)
const mueblesComedor=sillas.concat(banquetas,bancos,mueblesGuardado,mesas)