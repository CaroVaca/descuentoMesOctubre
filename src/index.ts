//este ejercicio te calcula un descuento del 15%//
//si compras en el mes de octubre//

rotulo1.innerHTML = "Ingresar el monto:";
rotulo2.innerHTML = "Ingresar cantidad:";
rotulo3.innerHTML = "Ingresar mes:";

let btnEnviar = document.getElementById("enviar");

let monto: number = Number(dato1.value);
let montoConDescuento: number = 0;
let descuento: number = 0;
let cantidad: number = Number(dato2.value);
let precioTotal: number = monto * cantidad;
let mes: number = Number(dato3.value);

btnEnviar.addEventListener("click", () => {
  if (mes === "octubre") {
    descuento = (precioTotal * 15) / 100;
    montoConDescuento = precioTotal - descuento;
    console.log(
      "Por comprar en el mes de octubre Ud tiene un 15% de descuento"
    );
    console.log("El onto a pagar es:" + montoConDescuento);
  } else {
    console.log("Ud no tiene descuento, el monto a pagar es:" + precioTotal);
  }
});
