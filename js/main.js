//Pedir nombre al usuario
let nombreUsuario = prompt("Ingresar nombre de usuario");
if(nombreUsuario == "") {
    console.log("Usuario no registrado")
 }else{
    alert("Bienvenido "+nombreUsuario)
}
//Declarar variables para calcular precio.

let valorNeto;
let valorDeposito;
let valorAquiler = Number(prompt("Ingrese valor de alquiler aproximado que desea buscar"));
valorDeposito = valorAquiler;
console.log("El valor de alquiler y depósito es $" + valorDeposito* 2);
valorNeto = valorAquiler * 36;
let valorComision = valorNeto * 0.05;
console.log("La comisión inmobiliaria es de $" + valorComision);

//Pregustar cuantos departamentos quiere alquilar y pasar precio final.

let valorAlquiler2 = valorAquiler
function multiplicar(valor1, valor2){
    return valor1 * valor2;
}
let cantidadInmuebles = Number(prompt("ingrese cantidad de deptos que desea alquilar"));
let valorTotal = valorAlquiler2 * cantidadInmuebles;
console.log("El total por " + cantidadInmuebles + " Departamentos es de $" + (valorTotal + (valorDeposito * cantidadInmuebles)));
console.log("Por " + cantidadInmuebles + " departamentos la comisión inmobiliaria es $" + valorComision * cantidadInmuebles);











