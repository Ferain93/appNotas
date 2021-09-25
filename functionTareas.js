const fs = require('fs');
const archivo = require('./tareas.json');

function escribirJson(archivo){
    const array = JSON.stringify(archivo)
    fs.writeFileSync(array, 'utf-8');
}

function guardarTarea(titulo,estado){
    const newTask= {
        titulo : titulo,
        estado : estado
    }
    const array = archivo
    array.push(newTask)
    const taskJson = JSON.stringify(array,null,4)
    fs.writeFileSync("./tareas.json",taskJson)
}

const filtrarPorEstado = (element) =>{
    return archivo.filter(item => item.estado ==element)
}

function leer(){
    archivo.forEach(function(element){
            console.log("* El titulo de la tarea es: " + element.titulo + ", el estado es: " + element.estado);
        });
}

module.exports = {archivo, escribirJson, guardarTarea, filtrarPorEstado, leer};