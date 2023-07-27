const fs = require('fs/promises');

const readFileFuncion = async () => {    
    try{

        const tareas = await fs.readFile('./datos/tareas.txt');
        const arrayTareas = await JSON.parse(tareas);

        return arrayTareas;

     }catch(error){
         console.log(error);
     }
}

module.exports = readFileFuncion;