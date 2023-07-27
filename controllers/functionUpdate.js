
const fs = require('fs/promises');

const readFileFuncion = require('../helpers/readFileFuncion');

const funcionUpdate = async({id, titulo , contenido}) => {

    let arrayTareas = [];

    try{        

        arrayTareas = await readFileFuncion();
        
        const tareaActual = arrayTareas.findIndex(tarea => tarea.id === id);

        if(tareaActual !== -1){
            const tituloNuevo = titulo ?  titulo : tareaActual.titulo;
            const contenidoNuevo = contenido ? contenido : tareaActual.contenido;

            arrayTareas[tareaActual].titulo = tituloNuevo;
            arrayTareas[tareaActual].contenido = contenidoNuevo;

            await fs.writeFile('./datos/tareas.txt', JSON.stringify(arrayTareas, null , 2));
            console.log('Tarea actualizada satisfactoriamente');
        }else{
            throw new Error("No existe para actualizar");
        }             

    }catch(error){
        console.error(error.message);
    }
}

module.exports = funcionUpdate;