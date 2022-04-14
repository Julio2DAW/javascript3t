'use strict'

export class Factura{
                //Valores por defecto
    constructor(cliente = null , base = 0, tipoIVA = 21){

        this.cliente = cliente
        this.base = base
        this.tipoIVA = tipoIVA
    }

    
    setCliente(cliente){

        this.cliente = cliente
    }

    getCliente(){

        return this.cliente
    }

    setBase(base){

        this.base = base
    }

    getBase(){

        return this.cliente
    }

    setTipoIVA(tipoIVA){

        this.tipoIVA = tipoIVA
    }

    getTipoIVA(){

        return tipoIVA
    }

    getTotal(){

        return (this.base*this.tipoIVA)/100+this.base
    }
}