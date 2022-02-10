/*
    ===== Código de TypeScript =====
*/

//DESESTRUCTURACIÓN DE OBJETOS
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor:'Ed sheeran',
        anio:2015
    }
}


const {volumen: vol, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;


// const {autor} = detalles;
console.log('El volumen actual es ', vol);
console.log('El segundo actual es ', segundo);
console.log('La canción actual es ', cancion);
console.log('El autor es ', autor);

//DESESTRUCTURACIÓN DE ARRAYS

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3] = dbz;
const [,,s3] = dbz;

console.log('Personaje 1 ', dbz[0], p1, );
console.log('Personaje 2 ', dbz[1], p2);
console.log('Personaje 3 ', dbz[2], p3, s3);