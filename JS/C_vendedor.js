export default class Cl_vendedor{
    constructor(n, tV, mV){
        this.nombre = n;
        this.tipoVendedor = +tV;
        this.montoVenta = +mV;
    }

    set nombre(n){
        this._nombre = n;
    }

    set tipoVendedor(tV){
        this._tipoVendedor = +tV;
    }

    set montoVenta(mV){
        this._montoVenta = +mV;
    }

    get nombre(){
        return this._nombre;
    }

    get tipoVendedor(){
        return this._tipoVendedor;
    }

    get montoVenta(){
        return this._montoVenta;
    }
}