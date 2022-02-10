/*
    ===== Código de TypeScript =====
*/
//DESESTRUCTURACION DE ARGUMENTOS EN FUNCIONES

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

function calcularISV(productos: Producto[]): number {
    let total = 0;

    productos.forEach((producto) => {
        total += producto.precio;
    })

    return total * 0.15;

}

export function calcularISVTotal(productos: Producto[]): [number, number]{
    let total = 0;
    //desestructurando el array
    productos.forEach(({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];

}
// const articulos = [telefono, tableta];
// const isv = calcularISV(articulos);
// const [total, isvTotal] = calcularISVTotal(articulos);
// console.log('ISV ', isv);
// console.log('ISV total ' , isvTotal,' y Total ', total );

