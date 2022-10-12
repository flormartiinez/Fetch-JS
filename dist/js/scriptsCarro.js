
document.body.onload=function(){
    mostrarCarro()
}

function mostrarCarro(){
    let carro=document.createElement("table")
    carro.setAttribute("class", "table")
    carro.setAttribute("id", "tablaCarro")
    const items=JSON.parse(localStorage.getItem("Carro"))
    carro.innerHTML+=`<tr><th>ID</th><th>DESCRIPCION</th><th>PRECIO</th><th>CANTIDAD</th><th>SUBTOTAL</th></tr>`
    let totalCompra=0
    if(items!=null){
        for (item of items) {
            let subtotal=item.producto.precio*item.cantidad
            carro.innerHTML+=`<tr><td> ${item.producto.id}</td><td> ${item.producto.descripcion}</td><td>${item.producto.precio}</td><td>${item.cantidad}</td><td>${subtotal}</td></tr>` 
            totalCompra=totalCompra+subtotal
        }
        carro.innerHTML+=`<tr><td colspan='4'> TOTAL:</td> <td>${totalCompra}</td></tr>` 
    } else{
        carro.innerHTML+=`<tr><td colspan='5'> NO AGREGÓ NINGÚN PRODUCTO A SU CARRO</td></tr>`
    }

    document.body.appendChild(carro)
    let btnComprar=document.createElement("button")
    btnComprar.innerHTML="Comprar"
    btnComprar.setAttribute("Class","btn btn-success")
    btnComprar.setAttribute("Id","btnComprar")
    document.body.appendChild(btnComprar)
    btnComprar.onclick= function () {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Has realizado la compra con éxito!',
            showConfirmButton: false,
            timer: 1500
        })
        localStorage.removeItem("Carro")
    }
}

let volver=document.querySelector("#btnVolver")

volver.onclick= function () {
    window.location.href = "index.html";
}
/*
fetch("https://api.emailjs.com/api/v1.1/history?user_id=BvR-TDDPO4ezXsn8h&accessToken=SPjmlt93ETNwpE25CXByW")
.then((resp)=>resp.json())
.then((usuarios)=> {
    usuarios.rows.forEach((usuario) => {
        const li= document.createElement("li")
        li.innerHTML= `
        <h4>${usuario.provider}</h4>
        <p>${usuario.id}</P>
        `
        listadoUsuarios.append(li)
    })
})

const listadoUsuarios=document.querySelector("#usuarios")*/
/*
var data = {
    service_id: 'service_jrysi4c',
    template_id: 'template_lyu4j6r',
    user_id: 'BvR-TDDPO4ezXsn8h',
    template_params: {
        'from_name': 'CODERHOUSE',
        'to_name': 'Florencia Martinez',
        'message': 'Mensaje de Prueba',
    }
};
 
fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{"contentType": "application/json; charset=UTF-8"},
})
.then ((response)=>response.json())
.then((data)=>console.log(data))*/