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
console.log(aux);  */

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