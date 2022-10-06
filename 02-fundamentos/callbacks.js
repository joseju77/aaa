// setTimeout(() => {
//     console.log('Hola mundo');
// }, 1000);

const getUsuarioByID = (id, callback) => {
    const user = {
        id, //id : id
        nombre: 'Juan'
    }
    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUsuarioByID(10, (user) => {
    console.log(user.id);
    console.log(user.nombre);
})