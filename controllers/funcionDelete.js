const fs = require('fs/promises');
const _ = require('lodash');

const readFileFuncion = require('../helpers/readFileFuncion');

const eliminarPorId = (array,id) => {
    _.remove(array,(tarea) => tarea.id === id);
}

const funcionDelete = async({id}) => {
        
    let arrayTareas = [];

    try{        
        arrayTareas = await readFileFuncion();

        console.log('El ide es: ',id);
        
        //const {id , titulo , contenido} = arrayTareas[0];

        arrayTareas.forEach(({id:ide , titulo , contenido}) => {
            if(ide === id){
                eliminarPorId(arrayTareas,id);
            }
        });

        await fs.writeFile('./datos/tareas.txt',JSON.stringify(arrayTareas,null, 2));
        console.log('La tarea ha sido eliminada exitosamente');
    }catch(error){
        console.log(error);
    }
}

module.exports = funcionDelete;