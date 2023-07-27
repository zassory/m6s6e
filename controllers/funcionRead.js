const fs = require('fs/promises');

const readFileFuncion = require('../helpers/readFileFuncion');

const funcionRead = async() => {
    
    let arrayTareas = [];    

    try{

        arrayTareas = await readFileFuncion();
        let contador = 0;

        for(tareas of arrayTareas) {
            const { titulo , contenido , id } = tareas;
            contador++;
            console.log("-----------------------------");
            console.log(`Tarea numero ${contador}:`);
            console.log(`- Titulo: ${titulo}`);
            console.log(`- Contenido: ${contenido}`);
            console.log(`- Id: ${id}`);
            console.log("-----------------------------");
        }

    }catch(error){
        console.log(error);
    }
    
}

module.exports = funcionRead;