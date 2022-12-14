const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Jose'
    },
    {
        id: 3,
        nombre: 'Ramon'
    },
]

const salarios = [
    {
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 1500
    }
]


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`Empleado con id ${id} no existe`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`El salario con id ${id} no existe`);
    });
}

const id = 10;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

//anidamiento de promesas
// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => console.log(`El empleado ${empleado} tiene un salario de ${salario}`))
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

//promesas en cadena
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch(err => console.log(err));