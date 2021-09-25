//const { escribir, leer  = require('./tareas');
let archivoTareas = require('./tareas');

let accion = process.argv[2];
let titulo = process.argv[3];
let estado = process.argv[4];


switch(accion) {
    case 'listar':
        console.log('Listado de tareas esta dado por: ');
        const tareas = archivoTareas.leer();
        tareas.forEach(function(element){
            console.log("El titulo de la tarea es " + element.titulo + " y el estado es " + element.estado)
        });
        console.log()
        break;

    case undefined:
        console.log('Pasame una acción, por favor');
        break;

    case 'crear':
        console.log('Acción Leer');
        const Tarea = archivoTareas.guardarTarea(titulo,estado);
        console.log('Tarea Guardada');
        break;

    case 'filtrar':
        console.log(filtrarPorEstado)
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear y filtar');
        break;
}
