let dinero = parseFloat(prompt("¿Cuánta plata tienes, bobo?"));

if (dinero >= 2.9) {
    alert("Puedes comprar potecito con confites o pote de 1/4 KG.");
} 
else if (dinero >= 1.8) {
    alert("Puedes comprar bombón helado Helardo.");
} 
else if (dinero >= 1.7) {
    alert("Puedes comprar bombón helado Heladix.");
} 
else if (dinero >= 1.0) {
    alert("Puedes comprar palito helado de crema.");
} 
else if (dinero >= 0.6) {
    alert("Puedes comprar palito de agua.");
} 
else {
    alert("A casa, pobre.");
}