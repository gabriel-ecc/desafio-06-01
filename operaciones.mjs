import fs from "fs";
const _pathName = "citas.json";

const mostrarCitas = () => {
  console.log("Citas registradas:");
  const citas = fs.readFileSync(_pathName, "utf8");
  const data = JSON.parse(citas);
  if (data.length === 0) {
    console.log("No hay registros para mostrar.");
  } else {
    data.forEach((cita) => {
      console.log(cita);
    });
  }
  console.log("Fin Citas registradas");
};

const registrarCita = (nombre, edad, animal, color, enfermedad) => {
  const citas = leerRegistros();

  const newCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };
  citas.push(newCita);
  guardarRegistros(citas);
  console.log("Registro guardado exitosamente.");
};

function leerRegistros() {
  try {
    const data = fs.readFileSync(_pathName, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    console.error("Error al leer el archivo de registros:", error);
    return [];
  }
}

function guardarRegistros(citas) {
  try {
    fs.writeFileSync(_pathName, JSON.stringify(citas));
  } catch (error) {
    console.error("Error al guardar el archivo de registros:", error);
  }
}

export { mostrarCitas, registrarCita };
