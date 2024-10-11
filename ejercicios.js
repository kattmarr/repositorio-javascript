// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    console.log(10>=9);
}
 compareTenAndNine()
// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    console.log(0===0);
}
compareZeroAndZero() 
// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
console.log(7>8 && 7<10);
}
compareSeven() 
// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
   const precioinicial = 1500;
const descuento = 0.25;
const Disponible = 1150;

const precioConDescuento = precioinicial-(descuento*precioinicial);

if (Disponible >= precioConDescuento) {
    console.log("Puedes comprar el producto.");
} else {
