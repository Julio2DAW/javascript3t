'use strict'

/**
 * Exportamos la clase modelo la cual necesitaremos en el controlador,
 * Generamos el constructor con un mensaje por consola y un metodo que usaremos desde el controlador
 * @export Modelo
 * @class Modelo
 */
 export class Modelo{

    constructor(){

        console.log('Buenos días')
    }

    getDato(){
        
        return 42
    }
}