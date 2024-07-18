/* 8. VENTAS VENDEDORES
|* Se conoce el nombre, tipo de vendedor (1=Mayorista, 2=Minorista) y monto de ventas de
|* varios vendedores. Se desea determinar Monto total de la ventas de los vendedores Mayoristas
|* y mayor venta realizada por los vendedores tipo mayorista.
|* Se dispone de los siguientes datos de varias vendedores: (nombre, tipo de vendedor, monto
|* venta) (Mary, 1, 150), (José, 1, 135), (Carlos, 2, 160), (Pedro, 2, 75)
|* Monto total de las ventas de los vendedores tipo mayorista: 285$
|* Monto mayor venta realizada por los vendedores tipo mayorista: 150$
*/
import Cl_vendedor from "./C_vendedor.js";
import Cl_empresa from "./Cl_empresa.js";

let ven1 = new Cl_vendedor("Mary", 1, 150);
let ven2 = new Cl_vendedor("José", 1, 135);
let ven3 = new Cl_vendedor("Carlos", 2, 160);
let ven4 = new Cl_vendedor("Pedro", 2, 75);
let empresa = new Cl_empresa();

empresa.procesarVendedor(ven1);
empresa.procesarVendedor(ven2);
empresa.procesarVendedor(ven3);
empresa.procesarVendedor(ven4);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>Monto total de las ventas de los vendedores tipo mayorista: ${empresa.devolverVentasTotalMay()}$
<br>Monto mayor venta realizada por los vendedores tipo mayorista: ${empresa.devolverMayorVenta()}$
`;