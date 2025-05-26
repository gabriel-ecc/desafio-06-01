const { mostrarCitas, registrarCita } = require("./operaciones.js");

const args = process.argv.slice(2);
const comando = args[0];

if (comando === "registrar") {
  if (args.length < 6) {
    console.log(
      "Uso: node index.js registrar <nombre> <edad> <animal> <color> <enfermedad>"
    );
  } else {
    registrarCita(args[1], args[2], args[3], args[4], args[5]);
    console.log("Cita registrada con éxito.");
  }
} else if (comando === "leer") {
  mostrarCitas();
} else {
  console.log("Opcion no valida, solo acepta registrar o leer");
}
