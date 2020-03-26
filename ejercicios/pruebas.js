const ejercicios = require('./ejercicios');

var array = [3, 2, 5, 9, 1, 3, 4, 5, 6 ,7 ,8,9, 1,2, 1, 1, 2, 3 , 4,1, 1,1, 2, 3,4,5,6,7,8,9];
var ejercicio1 = ejercicios.ejercicio1(array);
console.log("********** Ejercicio 1 **********");
console.log(ejercicio1);

var ejercicio2 = ejercicios.ejercicio2(1,10);
console.log("\n********** Ejercicio 2 **********");
console.log(ejercicio2);

var array2 = [3, 6, 2, 56, 32, 5, 89, 32];
var ejercicio3 = ejercicios.ejercicio3(array2, 3);
console.log("\n********** Ejercicio 3 **********");
console.log(ejercicio3);

var array3 = [1, 2, 3, 4, 1, 2, 2, 2, 10, 1, 2 , 4,];
var ejercicio4 = ejercicios.ejercicio4(array3);
console.log("\n********** Ejercicio 4 **********");
console.log(ejercicio4);

var cadena = "(((([]))))";
var ejercicio5 = ejercicios.ejercicio5(cadena);
console.log("\n********** Ejercicio 5 **********");
console.log(ejercicio5);

var array4 = new Array();
var clase = new Object();
    clase.inicio = '11:00';
    clase.fin = '14:00'; 
    array4.push(clase);
clase = new Object();
    clase.inicio = '12:00';
    clase.fin = '15:00';
    array4.push(clase);
clase = new Object();
    clase.inicio = '11:30';
    clase.fin = '16:00';
    array4.push(clase);
clase = new Object();
    clase.inicio = '16:00';
    clase.fin = '16:30';
    array4.push(clase);
clase = new Object();
    clase.inicio = '12:30';
    clase.fin = '18:00';
    array4.push(clase);
clase = new Object();
    clase.inicio = '16:10';
    clase.fin = '19:30';
    array4.push(clase);
var ejercicio6 = ejercicios.ejercicio6(array4);
console.log("\n********** Ejercicio 6 **********");
console.log(ejercicio6);




