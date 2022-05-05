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

*/

//SUMATORIA DE NUMERO QUE SE LE PIDE A UN USUARIO

let num = prompt(Number("Ingrese un numero"));
let aux = 0;

for (i = 0; i <= num; i++)
{
    aux +=i;
}
console.log(aux);