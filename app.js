const { escribir, leer } = require('./tareas');
let archivoTareas = require('./tareas');

let accion = process.argv[2];


switch(accion) {
    case 'listar':
        console.log('Listado de tareas esta dado por: ');
        const tareas = leer();
        tareas.forEach(function(element){
            console.log("El titulo de la tarea es " + element.titulo + " y el estado es " + element.estado)
        });
        console.log()
        break;

    // Micro desafío 1
    // Atajar el caso en que no se envíe un parámetro
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    // Micro desafío 2
    case 'escribir':
        console.log('Acción Leer');
        
        let task = ["Titulo" , "Estado"];
        let newtask =[];
        let titulo;
        let estado;

        newtask.push(`Ingrese un ${task[0]} : ${process.argv[3]}`);
        newtask.push(`Ingrese un ${task[1]} : ${process.argv[4]}`);
        
        console.log(newtask);
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar y escribir');
        break;
}
