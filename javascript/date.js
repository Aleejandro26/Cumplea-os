function horasVividas(fechaNacimiento) {
  const ahora = new Date();
  const nacimiento = new Date(fechaNacimiento);

  const diferencia = ahora - nacimiento;

  const horas = Math.floor(diferencia / (1000 * 60 * 60));

  return `¡Has vivido aproximadamente ${horas.toLocaleString()} horas hasta ahora!`;
}

const miCumpleaños = "2000-10-26"; //Pon tu fecha de nacimiento año/mes/dia
console.log(horasVividas(miCumpleaños));
