/*
    ===== Código de TypeScript =====
*/
/* Función en Javascript*/
function sumar(a,b) {
    return a+b;
}

const resultado = sumar('Fernando', 'Herrera');
console.log(resultado);

function sumar2(a:number, b:number): number {
    return a + b;
}

const resultado2 = sumar2(10, 20);

console.log(resultado2);

/* Función de flechas*/

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultado3 = multiplicar(5,10);
console.log("resultado con 2 números " + resultado3);
const resultado4 = multiplicar(5);
console.log("resultado con 1 número " + resultado4);
const resultado5 = multiplicar(5,0,10);
console.log("resultado modificando la base" + resultado5);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp:  () => void;
}
//cuando no queremos que devuelva ada --> void
function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
    
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida ', this.pv);
    }
}

curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHp();