js_carrito.js
const productosEncarrito=json.parse(localstorage-get1tem("producto-en-carrito"))

const contenenedorcarritoVacio=document.queryselector("*#carrito-vacio");
const contenedorcarritoProducto=document.queryselector("*#carrito-producto");
const contenedorcarritoAcciones=document.queryselector("*#carrito-acciones");
const contenedorcarritoComprado=document.queryselector("*#carrito-comprado");

 if(productosEncarrito) {
    
    contenenedorcarritoVacio.classList.classList.add("disabled");
    contenenedorcarritoProducto.classList.classList.remove("disabled");
    contenenedorcarritoAcciones.classList.classList.remove("disabled");
    contenenedorcarritoComprado.classList.classList.add("disabled");

 }

 else{
    
 }
