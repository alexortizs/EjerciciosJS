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