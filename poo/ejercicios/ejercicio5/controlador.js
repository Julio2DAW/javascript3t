'use strict'
import {Vista} from './vista.js'
import {Modelo} from './modelo.js'


/**
 * Creamos la clase controlador la cual no necesitara parametros,
 * Desde controlador llamamos a la vista y al modelo,
 * Recogeremos los datos del metodo getDato() en el fichero del modelo,
 * Ahora lo mostraremos junto a la información guardada en mostrar() en el fichero vista.
 * @import Vista
 * @import Modelo
 * @class Controlador
 */
class Controlador{

    constructor(){

        console.log('Buenas noches')
        this.vista = new Vista()
        this.modelo = new Modelo()
        let cogerdato = this.modelo.getDato()
        console.log(cogerdato)
        this.vista.mostrar(cogerdato)
    }
}

var obj = new Controlador()