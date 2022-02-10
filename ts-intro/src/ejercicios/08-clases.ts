/*
    ===== Código de TypeScript =====
*/
/*
* private .- sólo visible dentro de la clase
* public.- visible dentro y fuera de la clase
* static.- acceder a la propiedad sin hacer una instancia de la clase
*/
//Esto sería una forma de definir la clase

class personaNormal {

    constructor(
        public nombre: string,
        public direccion: string) {}
}
/*
class Heroe {
   public alterEgo: string;
   public edad: number;
   public nombreReal: string;
    //función que se va a llamar cuando se crea una instancia 
    //de la clase
    constructor(alterEgo: string, edad: number) {
        this.alterEgo = alterEgo;
        this.edad = edad;
    } 
}
*/
// pero es mejor ponerlo así
class Heroe extends personaNormal {
   
    constructor (
        public alterEgo: string,
        public edad: number,
        public nombreReal:string
    ) {
        super(nombreReal, 'NY');
    }
}
const ironman = new Heroe('Ironman', 45, 'Tony');
console.log(ironman);
