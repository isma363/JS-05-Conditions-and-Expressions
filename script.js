//Exercise #1
//Parte 1
var names = ["Maria", "Antony", "Joy", "Juan"];
function agregar(){
    names.push("Ismael")
    console.log(names)
}
//agregar();
//Parte 2
function validar(){
    validarNombre=prompt()
    var checar=names.indexOf(validarNombre);
    console.log(checar)
    if (checar==-1) {
        console.log(false);
    } else {
        console.log(true);
    }

}
//validar();

function Nombres(){
    var nombresRepetidos=[];
var nombre1=prompt("Inserte el primer nombre: ");
var nombre2=prompt("Inserte el segundo nombre: ");
var nombre3=prompt("Inserte el tercer nombre: ");
var checar1=names.indexOf(nombre1);
var checar2=names.indexOf(nombre2);
var checar3=names.indexOf(nombre3);
console.log(checar1,checar2,checar3)
if(checar1>=0){
    nombresRepetidos.push(nombre1);
}
if(checar2>=0){
    nombresRepetidos.push(nombre2);
}
if(checar3>=0){
    nombresRepetidos.push(nombre3);
}
console.log(nombresRepetidos)
}
//Nombres();

function longitud(){
    var nombre1=prompt("Inserte el primer nombre: ");
    var nombre2=prompt("Inserte el segundo nombre: ");
    var nombre3=prompt("Inserte el tercer nombre: ");
    var longitud1=[nombre1.length,nombre2.length,nombre3.length];
    console.log(longitud1);
}
//longitud();

//Exercise #2


//Exercise #3
function between(){
    var valor=prompt("Inserte su numero: ");
    if(valor>=0 && valor<=25){
        console.log(valor+" is between 0 and 25");
    }
    if(valor>=26 && valor<=100){
        console.log(valor+" is between 26 and 100");
    }
    if(valor>=100){
        console.log(valor+" is greater than 100");
    }
    if(valor<0){
        console.log(valor+" is less than 0");
    }
}
between();
