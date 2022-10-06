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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id) ?.nombre;

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id) ?.salario;

    if (salario) {
        callback(null, salario)
    } else {
        callback(`El salario con id ${id} no existe`);
    }
}
const id = 2;
getEmpleado(id, (err, empleado) => {
    if (err) {
        console.log('Error');
        return console.log(err);
    }
    getSalario(id, (err, salario) => {
        if (err) {
            console.log('Error');
            return console.log(err);
        }
        console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
    })
})

