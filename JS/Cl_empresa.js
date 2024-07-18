export default class Cl_empresa{
    constructor(){
        this.acumVentasMay = 0;
        this.mayorVenta = 0;
    }

    procesarVendedor(v){
        if (v.tipoVendedor === 1){
            this.acumVentasMay += v.montoVenta;
        }

        if (v.tipoVendedor === 1 && v.montoVenta > this.mayorVenta)
            this.mayorVenta = v.montoVenta;
    }

    devolverMayorVenta(){
        return this.mayorVenta;
    }

    devolverVentasTotalMay(){
        return this.acumVentasMay;
    }
}