const fs = require('fs');
//const readline = require('readline');
//const rl =require('readline-sync');

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));
    },
    guardarTarea: function(titulo,estado) {
        const tareas= {
            titulo : titulo,
            estado : estado
        }
        const database = logic
        database.push(tareas)
        const tareaJson = JSON.stringify(database,null,4)
        fs.writeFileSync("./tareas.json",tareaJson)
    },
}

module.exports = archivoTareas;