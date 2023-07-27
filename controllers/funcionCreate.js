const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');

const readFileFuncion = require('../helpers/readFileFuncion');

const funcionCreate = async({titulo,contenido}) => {

    let arrayTareas = [];
    
    try{

        const id = uuidv4().slice(0,8);
        const nuevaTarea = { id: id , titulo: titulo,contenido : contenido };
        
        arrayTareas = await readFileFuncion();

        arrayTareas.push(nuevaTarea);

        await fs.writeFile('./datos/tareas.txt',JSON.stringify(arrayTareas, null, 2));
        console.log('Nueva tarea agregada');

    }catch(error){
        console.log(error);
    }
}

module.exports = funcionCreate;