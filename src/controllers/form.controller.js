import { create } from "../utils/db.utils.js";

export const createForm = async (req, res) => {
  const {
    genero,
    motivo,
    especialidad,
    fecha_cita,
    primera_visita,
    seguro_medico,
    antecedentes,
    medicamentos,
    alergias,
    contacto_preferido,
    asistencia,
    comentarios,
    consentimiento,
    comunicaciones,
  } = req.body;

  const datosForm = {
    genero,
    motivo,
    especialidad,
    fecha_cita,
    primera_visita,
    seguro_medico,
    antecedentes,
    medicamentos,
    alergias,
    contacto_preferido,
    asistencia,
    comentarios,
    consentimiento,
    comunicaciones,
  };

  try {
    const form = await create("formularios", datosForm);
    console.log("Formulario creado:", form.insertId);
    return res.json({ message: "Formulario creado: ", form });
  } catch (error) {
    console.error("Error al crear un formulario:", error.message);
    return res.status(400).json({ error: error.message });
  }
};
