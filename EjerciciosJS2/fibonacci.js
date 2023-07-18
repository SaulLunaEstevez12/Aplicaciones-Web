function ejercicio5() {
    var numero = prompt("Ingrese un numero:");
    var secuencia = [0, 1];

    while (secuencia[secuencia.length - 1] < numero) {
        var next = secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2];
        secuencia.push(next);
    }

    if (secuencia[secuencia.length - 1] > numero) {
        secuencia.pop();
    }

    alert("La secuencia de Fibonacci hasta el numero " + numero + " es: " + secuencia.join(", "));
}
