import connectDb from "../config/db.js";

const formEntity = async () => {
  const connection = await connectDb();
  const sql = `
CREATE TABLE IF NOT EXISTS formularios (
  id INT AUTO_INCREMENT,
  nombre VARCHAR(100),
  dni VARCHAR(100),
  fecha_nacimiento VARCHAR(100),
  genero VARCHAR(100),
  motivo VARCHAR(100),
  especialidad VARCHAR(100),
  fecha_cita VARCHAR(100),
  primera_visita BOOLEAN,
  seguro_medico VARCHAR(100),
  antecedentes VARCHAR(100),
  medicamentos VARCHAR(100),
  alergias VARCHAR(100),
  contacto_preferido VARCHAR(100),
  asistencia VARCHAR(100),
  comentarios VARCHAR(100),
  consentimiento BOOLEAN,
  comunicaciones BOOLEAN,
  PRIMARY KEY(id)
);
  `;

  await connection.execute(sql);
  console.log("La tabla de formulario ha sido creada o ya existía.");
};

export default formEntity;
