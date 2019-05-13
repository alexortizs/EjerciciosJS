//1 - Diseña un algoritmo que lea dos números y realice los siguientes cálculos:

function calculosVarios(valor1, valor2){
    console.info("El valor de la suma es:", valor1+valor2);
    console.info("El valor de la resta es:",valor1-valor2);
    console.info("El valor de la división es:", valor1/valor2);
    console.info("El valor de la multiplicación es:", valor1*valor2)
    console.info("El valor del residuo es:", valor1%valor2)
};

calculosVarios(11,5);

/**2 - Diseña un algoritmo para calcular el porcentaje de hombres y mujeres en nuestro curso.

    Trucos:
Calcular porcentajes (segmento*100)/total**/

function porcentajeAlumnos(totalHombres, totalMujeres){
    var totalAlumnos = totalHombres + totalMujeres;
    var porcentajeMujeres = (totalMujeres*100)/totalAlumnos;
    var porcentajeHombres = (totalHombres*100)/totalAlumnos;

    console.info("El total de alumnos es:", totalAlumnos)
    console.log("El total de mujeres es:", totalMujeres);
    console.info("El % de mujeres es:", porcentajeMujeres);

    console.log("El total de hombres es:", totalHombres);
    console.info("El % de hombres es:", porcentajeHombres);
};

porcentajeAlumnos(14,5);
<<<<<<< HEAD
// Ejemplo de Condicionales
var ex1 = true && true; // true
var ex2 = (2 == 2) && (3 >= 6); // false
var ex3 = (2>3) || (17 <= 40); // true
var ex4 = false || false; // false

function condicionalAvanzado ( paraComparar ) {
    if (paraComparar) {
        console.log("Verdadero!");
    } else {
        console.log("falso!");
    };
};
condicionalAvanzado(ex1);
condicionalAvanzado(ex2);
condicionalAvanzado(ex3);
condicionalAvanzado(ex4);
=======

//Valor real es true:
console.log("valor boleano de \"Fictizia\":", Boolean("Fictizia")  );
console.log("valor boleano de 1235:", Boolean(1235));
console.log("valor boleano de -1235:", Boolean(-1235));
console.log("valor boleano de un objeto:", Boolean({saludo: "hola"}));
console.log("valor boleano de un array:", Boolean(["platano", -1, false]));
console.log("valor boleano de un array:", Boolean(function(){}));
//Sin valor real es false:
console.log("valor boleano de \"\":", Boolean("")  );
console.log("valor boleano de 0:", Boolean(0));
console.log("valor boleano de -0:", Boolean(-0));
console.log("valor boleano de null:", Boolean(null));
console.log("valor boleano de undefined:", Boolean(undefined));
console.log("valor boleano de NaN:", Boolean(NaN));

function revisarPorcentaje(Booleano,totalAlumnos, totalHombres){
    var porcentajeHombres = (totalHombres*100)/totalAlumnos;
    if (Booleano) {
        console.log("El total de es:", totalAlumnos);
    }
    else {

        console.log("El porcentaje de hombres es:", porcentajeHombres);
    }

};

revisarPorcentaje(true, 20, 15);
revisarPorcentaje(false, 20, 15);

>>>>>>> otrosdatos
