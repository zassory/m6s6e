const createConfig = {
    titulo: {
        describe: 'El nombre de la tarea a realizar',
        alias: 't',
        demandOption: true
    },
    contenido: {
        describe: 'Descripcion de la tarea a realizar',
        alias: 'c',
        demandOption: true
    }
}

const updateConfig = {
    titulo: {
        describe: 'Nuevo nombre de la tarea a realizar',
        alias: 't',
    },
    contenido: {
        describe: 'Nueva descripcion de la tarea a realizar',
        alias: 'c'
    },
    id:{
        describe: 'El id de la tarea a actualizar o modificar',
        alias: 'i',
        demandOption: true
    }
}

const deleteConfig = {
    id: {
        describe: "El id o identificador de la tarea a eliminar",
        alias: "i",
        demandOption: true
    }
}


module.exports = {
    createConfig,
    updateConfig,
    deleteConfig,
};