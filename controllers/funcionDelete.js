const fs = require('fs/promises');

const readFileFuncion = require('../helpers/readFileFuncion');

const funcionDelete = async({id}) => {
    
    let arrayTareas = [];

    try{        
        arrayTareas = await readFileFuncion();

        const nuevasTareas = arrayTareas.filter(tareas => tareas.id !== id);        

        await fs.writeFile('./datos/tareas.txt',JSON.stringify(nuevasTareas,null, 2));
        console.log('La tarea ha sido eliminada exitosamente');
    }catch(error){
        console.log(error);
    }
}

module.exports = funcionDelete;