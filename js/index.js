class Producto {
    constructor(id, nombre, valor) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
    }
}


const produ1 = new Producto(1, "Sello COLOP", "1200");
const produ2 = new Producto(2, "Lapicera Parker", "2500");
const produ3 = new Producto(3, "Cuaderno Rivadavia", "400");

const productos = [produ1,produ2,produ3];
console.log("INICIAL:", productos);

mostrarMenu();


function mostrarMenu()
{
   let opcion = 0;
   
   while(opcion!==6)
   {
       opcion = Number( prompt(`Seleccione una acción:
                           1. Agregar Producto
                           2. Eliminar Producto
                           3. Modificar Producto
                           4. Listar Producto
                           5. Buscar Producto
                           6. Salir`));

   switch(opcion)
   {
       case 1:
       {
           agregarProducto();
           break;
       }
       case 2: 
       {
           eliminarProducto();
       }
       case 3: 
       {
           modificarProducto();
       }
       case 4:
       {
           listarProducto();
           break;
       }
       case 5:
       {
               buscarProducto();
               break;
       }
       default:{
           alert("opcion inválida");
           break;
       }
      
   }

   }
}

function agregarProducto()
{      
    let id=1;
    if(productos.length>0)
    {
       id=productos[productos.length-1].id+1;
    }
    
    let nombre=prompt("ingrese el nombre del Producto");
    let valor = prompt("ingrese el valor (numerico)");
    let producto = new Producto(id, nombre, valor);

    productos.push(producto);
}


function listarProducto()
{
   console.log("LISTAR PRODUCTOS")
   
   productos.forEach(
       (producto)=>{
           
           console.log(producto.id+" "+producto.nombre+" "+producto.valor);

       }
   );


}

function eliminarProducto(){

   let id= Number(prompt("Ingrese el id del producto que quiere eliminar"));

   let encontrado = productos.find((producto)=>producto.id===id);

  if(!encontrado)
  {
      alert("Producto no Encontrado");
  }
  else{

       let index = productos.indexOf(encontrado);

       productos.splice(index,1);

       console.log("ELIMINAR PRODU");
       console.log(productos);

  }
   

}

function buscarProducto() {
    let nombre = prompt("INGRESE EL NOMBRE PARA BUSCAR");
    let encontro = productos.filter((producto)=>producto.nombre===nombre);
    console.log("Producto encontrado en la lista");
}


function modificarProducto()
{
   let id= Number(prompt("Ingrese el id del Produ que quiere modificar"));

   let existe = productos.some((producto)=>producto.id===id);

   if(existe)
   {
       let encontrado = productos.find((producto)=>producto.id===id);
       let nuevoNombre = prompt("Ingrese el nuevo nombre");
       let nuevoValor = prompt("Ingrese el nuevo valor");

       encontrado.nombre = nuevoNombre;
       encontrado.valor= nuevoValor;

       console.log("MODIFICACION")
       console.log(productos);
   }
   else
   {
       alert("Usuario no econtrado")
   }

}
