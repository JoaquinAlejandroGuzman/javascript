/* CODIGO let nombre = prompt("Ingrese su nombre de usuario");

if (nombre == null){
    alert("NO INGRESO CORRECTAMENTE EL NOMBRE");
} else {
    alert("hola "+nombre);
}



// FOR


let numero = prompt(Number("Ingrese un numero"))

for (let i=1;i<=numero;i++) //estar atento con los punto y coma
{
    if (i%2==0)
    {
        console.log(i);
    } else  {
        console.log("SOY UN NUMERO IMPAR ");
    }
} 


//AJEDREZ

for (let i=1;i<=8;i++)
{
    if (i==1 || i==8)
    {
        console.log("TCARRACT");
    }
    else if (i==2 || i==7)
    {
        console.log("PPPPPPP");
    }
    else
    {
        console.log("0000000");
    }
}



//SUMATORIA DE NUMERO QUE SE LE PIDE A UN USUARIO

let num = prompt(Number("Ingrese un numero"));
let aux = 0;

for (i = 0; i <= num; i++)
{
    aux +=i;
}
console.log(aux);  

let plataforma = prompt("Ingrese nombre de plataforma");
let comision = prompt("Ingrese numero de COMISION");


while (plataforma!=="CODERHOUSE" && comision !==30380)
{
    alert("SU RESPUESTA ES INCORRECTA");
    let rta = prompt("Quiere una pista?  SI / NO")
        if (rta =="SI")
        {
           alert("PUEDE INGRESAR A SU PLATAFORMA DE ESTUDIO Y AHI TENDRA LA RESPUESTA CORRECTA")
        } else (rta !=="NO")
        {
            alert("RESPUESTA INVALIDA")
        } 
    plataforma = prompt("Ingrese nombre de plataforma");
    comision = prompt("Ingrese numero de COMISION");

}

alert("SU RESPUESTA ES CORRECTA"); 

function funcionSimple(i) 
{
    alert("su nombre es " + i);
}

funcionSimple("chapulin");

*/

/* ESTE ES EL QUE HABIA ENTREGADO PARA DESAFIO SIMULADOR INTERATCTIVO

const pedirDatos = () => {
    const nombre = prompt("Cual es su nombre?");
    const apellido = prompt("Cual es su Apellido?");
    const cantidadHijos = Number(prompt("Cuantos hijos tiene Ud?"));

    alert(`Hola, bienvenidx ${nombre + " " + apellido}`)

    if (!isNaN(cantidadHijos)){
        consultarNombres(cantidadHijos); 
    }
}

const consultarNombres = (cantidad) => {
    for (let i = 1; i <= cantidad; i++){
        const nombreHijo =  prompt(`Cual es el nombre de su hijo Nro ${i}?`);
        const edadHijo = Number(prompt(`Cual es la edad de su hijo ${nombreHijo}`));
        verificarEdad(edadHijo,nombreHijo);
    }
}

const verificarEdad = (edad, nombre) => {
    if (edad < 18) {
        alert(`Su hijx ${nombre} es MENOR de edad`);
    } else {
        alert(`Su hijx ${nombre} es MAYOR de edad`);
    }
}

pedirDatos(); */

// SIMULADOR VIRTUAL PLAVICA
/* 
  const solicitarDatos = () => {

    const nombreProfesor = prompt("Indique su Nombre y Apellido");
    const numeroLegajo = Number(prompt("Indique su Numero de Legajo Unico de DOCENTE"));
    
    if (!isNaN(numeroLegajo) && numeroLegajo > 10000){
        alert(`Bienvenido ${nombreProfesor} (L.U.D ${numeroLegajo}) a PLAVICA (Plataforma Virtal de Calificaciones)`);
        const numeroAlumnos = Number(prompt("Indique cantidad de alumnos"));
       
        solicitarAlumnado(numeroAlumnos);

    } else{
        alert("- ACCESO DENEGADO - ACCESO DENEGADO - ACCESO DENEGADO -");
        alert("en caso de NO estar conforme comuniquese a Soporte Tecnico 4444-4444 para solucionar su Ingreso");
    }
}

const solicitarAlumnado = (cant) => {
    for (let i = 1; i <= cant; i++){
        const nombreAlumno = prompt(`Indique nombre del Alumno Nro ${i}`);
        const calificacionAlumno = Number(prompt(`Calificacion del Alumno ${nombreAlumno} (1 al 10)`));
        verificarCalif (calificacionAlumno, nombreAlumno);
    }
}

const verificarCalif = (nota, nombre) =>{
    if (nota >4){
        alert(`El alumno ${nombre} APROBO con un ${nota}, FELICITELO!`)
    } else{
        alert(`El alumno ${nombre} DESAPROBO con un ${nota}, ASIGNELE FECHA PARA RECUPERATORIO, URGENTE`);

        const rendimiento = Number(prompt(`Como fue el rendimiento universitario del alumno ${nombre}
        ....................................
        SELECCIONE EL NUMERO CORRESPONDIENTE
        ....................................
                1 - INSUFICIENTE 
                2 - REGULAR 
                3 - BUENO`));
           
        asignarFecha(rendimiento,nombre);
    }
}

const asignarFecha = (concepto,nombre) => {
    
    if (concepto === 1){
        alert (`El alumno ${nombre} recibio el concepto INSUFICIENTE, por ende debera RECURSAR la totalidad de la materia.`)
    }else if (concepto === 2){
        alert (`El alumno ${nombre} recibio el concepto REGULAR, por ende tendra UN RECUPERATORIO EN DICIEMBRE.`)
    }else if (concepto === 3){
        alert (`El alumno ${nombre} recibio el concepto BUENO, por ende tendra que realizar un TRABAJO PRACTICO INTEGRADOR, la proxima clase a LIBRO ABIERTO.`)
    }

}
 
solicitarDatos(); 


 */
/* 
class Usuario {

    constructor (nombre, apellido)
        {
            this.nombre = nombre;
            this.apellido = apellido;
        }

    nombreCompleto()
        {
            return this.nombre + " " + this.apellido;
        }

}

const usuario = new Usuario ("Joaquin Alejandro", "Guzman");
console.log(usuario.nombreCompleto());

 */

/* 
class Usuario {

    constructor (id, nombre, apellido,edad, club, federado)
    {
        this.id = id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.club=club;
        this.federado=federado;
    
    }

    dialogoCompleto()
        {
        
            return this.id + " " + this.nombre + " " + this.apellido+ " " + this.edad+ " " +this.club + " " +this.federado;

        }

}

let nombre = prompt ("cual es tu nombre");
let edad = Number(prompt("que edad tenes ?"));
const usuario = new Usuario (nombre, "gomez",edad, "san lorenzo", "si soy federado");


console.log(usuario.dialogoCompleto());

 */
/* 
class Usuario {
    constructor (nombre,apellido)
        {
            this.nombre = nombre;
            this.apellido = apellido;
        }
    nombreCompleto()
        {
            return this.nombre +" "+this.apellido;
        }
}
let name = prompt("INDICAME TU NOMBRE ");
const user1 = new Usuario (name, "GUZMAN");
console.log(user1.nombreCompleto()); 
 */

/* 
class Usuario { //creo el contructor que le va  dar datos a mis arrays 
    constructor (id, nombre, apellido)
        {
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
        }
}

let usuarios = []; //CREACION DEL ARRAY DE NOMBRE usuarios

mostrarMenu(); //FUNCION MOSTRAR MENU 

function mostrarMenu()
{
    let opcion = Number(prompt(`Ingrese una opcion
                                1. AGREGAR USUARIO
                                2. ELIMINAR USUARIO
                                3. MODIFICAR USUARIO
                                4. LISTAR USUARIOS
                                5 SALIR`));
    
    switch (opcion){
        case 1: {
            agregarUsuario();
        }
        
    }
     
}

function agregarUsuario()
{
    let id = Number(prompt("Ingrese ID"));
    let nombre = prompt("Ingrese el Nombre");
    let apellido = prompt("Ingrese el Apellido");

    let usuario = new Usuario (id, nombre, apellido); // ESTO CREA UN USUARIO 

    usuarios.push(usuario);
}

console.log(usuarios);

 */
/* 
class Usuario {
    constructor (id, nombre, apellido)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
} 

let usuarios = [];

mostrarMenu(); // esta funcion sirve para mostrar menu funcion 

function mostrarMenu()
{
    let opcion = 0;
    
    while (opcion !== 5) //este bucle sirve para cuando es un ciclo while y sea diferente de 5 
        {
            opcion = Number(prompt(`INGRESE UNA OPCION NUMERICA
                                1. AGREGAR USUARIO
                                2. ELIMINAR USUARIO
                                3. MODIFICAR USUARIO
                                4. ENLISTAR USUARIO
                                5. FINALIZAR PROGRAMA`));
        switch(opcion){ //este es un switch que indica caso 1
            case 1: {
                agregarUsuario();
            }
        }
    }
}

function agregarUsuario()  //se esta declarando la funcion agregarUsuario()
{
    let id = prompt("ingrese ID");
    let nombre = prompt("ingrese nombre");
    let apellido = prompt("ingrese apellido");

    let usuario = new Usuario (id,nombre, apellido);
    usuarios.push(usuario);
}

console.log(usuarios);

 */
/* class Usuario{
    constructor (id, nombre, apellido){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const usuarios = [];

mostrarMenu();

function mostrarMenu()
{
    let opcion = 0;

    while (opcion !==5) {
        opcion = Number(prompt(`ingrese una op
                                1. agregar usuario
                                2. borrar usuario
                                5. SALIR`));
        switch (opcion){
            case 1: {
                agregarUsuario()
            }
        }
    }

}

function agregarUsuario() {
    let id = prompt("ingrese id");
    let nombre = prompt("ingrese nombre");
    let apellido = prompt("ingrese apellido");
} 

 */