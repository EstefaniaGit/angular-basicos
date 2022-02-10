/*
    ===== Código de TypeScript =====
*/
//ARRAYS
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

//OBJETOS

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo paleta';

console.table( personaje );