//const { escribir, leer  = require('./tareas');
const funciones = require('./functionTareas');

let accion = process.argv[2];
let titulo = process.argv[3];
let estado = process.argv[4];
let search = process.argv[3];

switch(accion) {
    case 'listar':
        console.log()
        console.log('Listado de tareas esta dado por:\n');
        const tareas = archivo;
        tareas.forEach(function(element){
            console.log("* El titulo de la tarea es: " + element.titulo + ", el estado es: " + element.estado);
        });
        console.log()
        break;

    case undefined:
        console.log('Pasame una acción, por favor');
        break;

    case 'crear':
        console.log('Acción Crear');        
        funciones.guardarTarea(titulo, estado);
        console.log('...');
        console.log('Tarea Guardada');
        break;

    case 'filtrar':
        console.log(funciones.filtrarPorEstado(search));
        break;

    default:
        console.log('No entiendo lo que me pides');
        console.log('Las acciones disponibles son: listar, crear y filtar');
        break;
}
