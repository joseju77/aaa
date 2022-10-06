const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

function imprimeHeroe({ nombre, apellido, poder, edad = 0}) {
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

const heroes = ['deadpool', 'superman', 'batman'];

const [ , , h3] = heroes;

console.log(h3)