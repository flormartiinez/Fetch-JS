let clientes=[];
let productos=[];
let nombre="Flor";
let apellido ="Martinez";


let nuevoCliente=new cliente(clientes.length,nombre,apellido);
clientes.push(nuevoCliente);

/*let velas=new producto(productos.length+1,"Velas",200);
productos.push(velas);

let aceite=new producto(productos.length+1,"Aceite Escenciales",300);
productos.push(aceite);

let lampara=new producto(productos.length+1,"Lamparas de Sal",800);
productos.push(lampara);

let jabon=new producto(productos.length+1,"Jabones",100);
productos.push(jabon);

let difusores=new producto(productos.length+1,"Difusores",1200);
productos.push(difusores);

let fuentes=new producto(productos.length+1,"Fuentes de Agua",1700);
productos.push(fuentes);

let inciensos=new producto(productos.length+1,"Inciensos",50);
productos.push(inciensos);

let fragancia=new producto(productos.length+1,"Fragancia",600);
productos.push(fragancia);*/

fetch("./data.json").then((res)=>res.json())
.then((data)=>{
    data.forEach((producto)=>{
        productos.push(producto)
    })
    //cargarPagina()
})

function calcularCostoTotal (precio,cantidad){
    return precio * cantidad * 1.22;
}

function cliente(id, nombre, apellido){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
}
function producto(id,descripcion, precio){
    this.id=id;
    this.descripcion=descripcion;
    this.precio=precio;
}
function compra(cliente,producto,cantidad){
    this.cliente=cliente;
    this.producto=producto;
    this.cantidad=cantidad;
}
function buscarProducto(id){
    for (let index = 0; index < productos.length; index++) {
        if(productos[index].id==id){
            return productos[index];
        }
    }
}

const buttonVelas = document.querySelector("#btnComprarVelas");

buttonVelas.onclick= function () {
    let valor=Number(document.querySelector("#numberVelas").value);
    agregarCarrito (1,valor);
    document.querySelector("#numberVelas").value=0
}

const buttonAceites = document.querySelector("#btnComprarAceites");

buttonAceites.onclick= function () {
    let valor=Number(document.querySelector("#numberAceite").value);
    agregarCarrito (2,valor);
}

const buttonLamparas = document.querySelector("#btnComprarLampara");

buttonLamparas.onclick= function () {
    let valor=Number(document.querySelector("#numberLampara").value);
    agregarCarrito (3,valor);
}

const buttonJabones = document.querySelector("#btnComprarJabones");

buttonJabones.onclick= function () {
    let valor=Number(document.querySelector("#numberJabones").value);
    agregarCarrito (4,valor);
}

const buttonDifusores = document.querySelector("#btnComprarDifusores");

buttonDifusores.onclick= function () {
    let valor=Number(document.querySelector("#numberDifusores").value);
    agregarCarrito (5,valor);
}

const buttonFuente = document.querySelector("#btnComprarFuente");

buttonFuente.onclick= function () {
    let valor=Number(document.querySelector("#numberFuente").value);
    agregarCarrito (6,valor);
}

const buttonInciensos = document.querySelector("#btnComprarInciensos");

buttonInciensos.onclick= function () {
    let valor=Number(document.querySelector("#numberInciensos").value);
    agregarCarrito (7,valor);
}

const buttonFragancia = document.querySelector("#btnComprarFragancia");

buttonFragancia.onclick= function () {
    let valor=Number(document.querySelector("#numberFragancia").value);
    agregarCarrito (8,valor);
}

function agregarCarrito (option, cantidad) {
    let productoBuscado=buscarProducto(option); 
    if (Number(cantidad)>0 ){
        let nuevaCompra = new compra(nuevoCliente,productoBuscado,cantidad);
        let carro=JSON.parse(localStorage.getItem("Carro"))
        if(carro==null){
            let v=[]
            v.push(nuevaCompra);
            localStorage.setItem("Carro",JSON.stringify(v))
        } else{
            carro.push(nuevaCompra);
            const carroStr=JSON.stringify(carro);
            localStorage.setItem("Carro", carroStr)
        }
        Swal.fire({
            title: 'Excelente!',
            text: `Usted agregó al carrito ${cantidad} ${productoBuscado.descripcion}`,
            imageUrl: `./img/${productoBuscado.descripcion}.jpg`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: `${producto.descripcion}`,
        })

    } else{
        alert("Debe comprar al menos un producto")
    }
}

function cargarPagina(){
    for (producto of productos) {
        let divProducto=document.createElement("div")
        divProducto.innerHTML+=`
        <div class="col mb-5">
        <div class="card h-100">
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <img class="card-img-top" src="./img/${producto.descripcion}.jpg" alt="${producto.descripcion}"/>
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${producto.descripcion}</h5>
                    <span class="text-muted text-decoration-line-through">$${producto.precio}
                </div>
            </div>
            <div class="btn-toolbar justify-content-center p-4 " role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group mr-2" role="group" aria-label="First group">
                    <input type="number" class="btn btn-secondary" id="cant${producto.id}">
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="${producto.id}" href="#">Comprar</a></div>
            </div>
        </div>
    </div>
    `
    let sectionProductos=document.querySelector("#ProductosBd")
    sectionProductos.appendChild(divProducto)
    }
}
function comprar(){
    let valor=Number(document.querySelector("#numberInciensos").value);
    agregarCarrito (7,valor);
}
/*
fetch("https://fakestoreapi.com/products")
.then((resp)=>resp.json())
.then((productos)=> {
    for (producto of productos) {
        let divProducto=document.createElement("div")
        divProducto.innerHTML+=`
        <div class="col mb-5">
        <div class="card h-100">
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
            <img class="card-img-top img-fluid" src="${producto.image}" alt="${producto.title}"/>
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${producto.title}</h5>
                    <span class="text-muted text-decoration-line-through">$${producto.price}
                </div>
            </div>
            <div class="btn-toolbar justify-content-center p-4 " role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group mr-2" role="group" aria-label="First group">
                    <input type="number" class="btn btn-secondary" id="numberFuente">
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" id="btnComprar${producto.description}" href="#">Comprar</a></div>
            </div>
        </div>
    </div>
    `
    let sectionProductos=document.querySelector("#Productos")
    sectionProductos.appendChild(divProducto)
    }
})*/

