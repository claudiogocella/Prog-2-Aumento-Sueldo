let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");
let btnEnviar = document.getElementById("Enviar");

rotulo.innerHTML = "Ingrese el salario actual del empleado:";

btnEnviar.addEventListener("click", () => {
  let sueldoActual: number = Number(dato.value);
  let aumento: number = 0;

  if (sueldoActual > 0 && sueldoActual <= 15000) {
    sueldoActual = sueldoActual + (sueldoActual * 20) / 100;
    aumento = aumento + sueldoActual;
    console.log("Usted tiene un aumento del 20% " + aumento);
  } else if (sueldoActual > 15.001 && sueldoActual <= 20000) {
    sueldoActual = sueldoActual + (sueldoActual * 10) / 100;
    aumento = aumento + sueldoActual;
    console.log("Usted tiene un aumento del 10% " + aumento);
  } else if (sueldoActual > 20001 && sueldoActual <= 25000) {
    sueldoActual = sueldoActual + (sueldoActual * 5) / 100;
    aumento = aumento + sueldoActual;
    console.log("Usted tiene un aumento del 5% " + aumento);
  } else {
    console.log("Usted no tiene aumento " + sueldoActual);
  }
});
