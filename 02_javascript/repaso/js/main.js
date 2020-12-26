//alert("Hola Mundo");
/*
var nombre = "Nicolas Sepulveda";
//var altura = 184;
var altura = 185;

var concanetacion = nombre + " " + altura;

//document.write(concanetacion);
var datos = document.getElementById("datos");
//datos.innerHTML(datos);
datos.innerHTML = `
    <h1> Hola soy la caja de datos </h1>
    <h2> mi nombre es : ${nombre}  </h2>
    <h3> mi estatura es : ${altura}</h3>
`;


if (altura >= 185) {
    datos.innerHTML += '<h1> Eres una Persona alta </h1>';
} else {
    datos.innerHTML += '<h1> Eres una Persona Pequeña </h1>';
}

for (var i = 2000; i <= 2020; i++) {
    //bloque de instrucciones
    datos.innerHTML += '<h2> Estamos en el Año ' + i + '</h2>';
}

*/
function MuestraMiNombre(nombre, altura) {
    //datos.innerHTML(datos);
    var misDatos = `
        <h1> Hola soy la caja de datos </h1>
        <h2> mi nombre es : ${nombre}  </h2>
        <h3> mi estatura es : ${altura}</h3>
    `;
    return misDatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Nicolas Sepulveda", 185);

}

imprimir();
//

/*
document.write("<h1>Listado de nombres</h1>");
var nombres = ['Nicolas', 'Arnell', 'Gustavo'];
for (var i = 0; i < nombres.length; i++) {
    //bloque de instrucciones
    document.write(nombres[i] + "<br />");
}

*/

/*
document.write("<h1>Listado de nombres</h1>");
var nombres = ['Nicolas', 'Arnell', 'Gustavo'];
nombres.forEach(function(nombre) {
    document.write(nombre + "<br />");
});

*/
document.write("<h1>Listado de nombres</h1>");
var nombres = ['Nicolas', 'Arnell', 'Gustavo'];
nombres.forEach((nombre) => {
    document.write(nombre + "<br />");
});

//alert(nombres[1]);

var coche = {
    modelo: "Mercedes Clase A",
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad: "valor aleatorio"
}
document.write("<h1>" + coche.antiguedad + "</h1>");
coche.mostrarDatos();
console.log(coche);

//valor que puede estar disponible ahora en el futuro o nunca
//nos promete que nos llegara un dato on un error, sacar dato de manera asyncrona


var saludar = new Promise((resolve, reject) => {

    setTimeout(() => {
        let saludo = "Hola muy buenas a todos chavales!!";
        saludo = false;
        if (saludo) {
            resolve(saludo);
        } else {
            reject("no hay saludo disponible");
        }
    }, 2000);

});

saludar.then(resultado => {
        alert(resultado);
    })
    .catch(error => {
        alert(error);
    });