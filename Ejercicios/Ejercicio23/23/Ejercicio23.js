// Definición del array con 6 elementos: dos booleanos, dos números y dos cadenas de texto
var valores = [true, 5, false, "kaixo", "agur", 2];

// 1. Determinar cuál de los dos elementos de texto es mayor
var texto1 = valores[3];
var texto2 = valores[4];
var textoMayor = texto1 > texto2 ? texto1 : texto2;
console.log("El texto mayor es:", textoMayor);

// 2. Determinar el resultado de dos operaciones lógicas realizadas con los elementos booleanos
var booleano1 = valores[0];
var booleano2 = valores[2];
var resultadoAND = booleano1 && booleano2; // AND lógico
var resultadoOR = booleano1 || booleano2;  // OR lógico
console.log("Resultado de la operación AND entre los valores booleanos:", resultadoAND);
console.log("Resultado de la operación OR entre los valores booleanos:", resultadoOR);

// 3. Determinar el resultado de dos operaciones aritméticas realizadas con los elementos numéricos
var num1 = valores[1];
var num2 = valores[5];
var suma = num1 + num2;     // Suma
var multiplicacion = num1 * num2;  // Multiplicación
console.log("Resultado de la suma entre los valores numéricos:", suma);
console.log("Resultado de la multiplicación entre los valores numéricos:", multiplicacion);
