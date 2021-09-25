const fs = require('fs');

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
        tareas.push(tareas)
        const tareaJson = JSON.stringify('tareas.json',null,4)
        fs.writeFileSync("./tareas.json",tareaJson)
    },
}

module.exports = archivoTareas;