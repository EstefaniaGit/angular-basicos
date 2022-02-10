/*
    ===== Código de TypeScript =====
*/
//? --> la propiedad hijos es opcional, no todos los pasajeros tendrán hijos
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}


const pasajero2: Pasajero = {
    nombre: "Melisa",
    hijos: ["Natalia", "Gabriel"]
}

function imprimeHijos (pasajero: Pasajero): void {

    //mira la propiedad hijos, si existe devuelve el length, sino devuelve 0
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log( cuantosHijos );
}

imprimeHijos(pasajero1);