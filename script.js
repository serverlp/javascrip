let vuelto = 0; // sin vuelto porque no puso nada jeje el vuelto en 0
let mensaje = ""; // con el mensaje que se llena despues dejo el mensaje como un string vacío

let dinero = parseFloat(prompt("¿Cuánta plata tienes, bobo?"));

if (dinero >= 2.9) {
    mensaje = "Puedes comprar potecito con confites o pote de 1/4 KG."; // Se asigna el mensaje
    vuelto = dinero - 2.9; // Se calcula el vuelto :o
} 
else if (dinero >= 1.8) {
    mensaje = "Puedes comprar bombón helado Helardo.";
    vuelto = dinero - 1.8;
} 
else if (dinero >= 1.7) {
    mensaje = "Puedes comprar bombón helado Heladix.";
    vuelto = dinero - 1.7;
} 
else if (dinero >= 1.0) {
    mensaje = "Puedes comprar palito helado de crema.";
    vuelto = dinero - 1.0;
} 
else if (dinero >= 0.6) {
    mensaje = "Puedes comprar palito de agua.";
    vuelto = dinero - 0.6;
} 
else {
    mensaje = "A casa, pobre."; // No puede comprar nada pobre
    vuelto = dinero; // Se queda con su  cochino dinero
}

// Mostramos el mensaje y el vuelto
alert(mensaje + ` Te sobra: $${vuelto.toFixed(2)} USD.`);
// recordar que .toFixed() sirve para recortar la cantidad de decimales  
