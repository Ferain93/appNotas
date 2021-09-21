const fs = require('fs');
//const readline = require('readline');
//const rl =require('readline-sync');

let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync('tareas.json', 'utf-8'));
    },
    escribir: function () {
        return JSON.parse(fs.writeFileSync('tareas.json', 'utf-8'));
    },
}

module.exports = archivoTareas;