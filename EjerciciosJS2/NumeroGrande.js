function ejercicio1() {
    var numeros = [];
    var numero;

    do {
        numero = prompt("Ingrese un numero (o ingrese 'fin' para terminar):");
        if (numero !== "fin") {
            numeros.push(Number(numero));
        }
    } while (numero !== "fin");

    var maximo = Math.max.apply(null, numeros);
    alert("El numero mas grande ingresado es: " + maximo);
}
