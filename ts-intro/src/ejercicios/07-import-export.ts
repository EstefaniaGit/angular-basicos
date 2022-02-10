/*
    ===== Código de TypeScript =====
*/

import { calcularISVTotal, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
   {
       desc: 'Telefono 1',
       precio: 100
   },
   {
    desc: 'Telefono 2',
    precio: 150
}
];

const [total, isv] = calcularISVTotal(carritoCompras);
console.log('Total', total);
console.log('ISV', isv);
