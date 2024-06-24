import bcrypt from "bcrypt";
import { create, findOne } from "../utils/db.utils.js";
import { generarJWT } from "../helpers/generarJWT.js";

export const register = async (req, res) => {
  const {
    nombre,
    apellido,
    telefono,
    direccion,
    email,
    fecha_nacimiento,
    obra_social,
    dni,
    contrasenia,
  } = req.body;

  const datosUsuario = {
    nombre,
    apellido,
    telefono,
    direccion,
    email,
    fecha_nacimiento,
    obra_social,
    dni,
    contrasenia: await bcrypt.hash(contrasenia, 10),
  };

  try {
    const mensaje = await create("usuarios", datosUsuario);
    res.status(201).json({ mensaje });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, contrasenia } = req.body;
  const usuario = await findOne("usuarios", `email = ? `, [email]);
  if (!usuario[0]) {
    return res.status(400).json({ error: "email no encontrado" });
  }

  if (!contrasenia || !usuario[0].contrasenia) {
    return res.status(400).json({ error: "Contraseña no proporcionada" });
  }

  const validPwd = await bcrypt.compare(contrasenia, usuario[0].contrasenia);

  if (!validPwd) {
    return res.status(401).json({ error: "Contraseña incorrecta" });
  }
  const token = await generarJWT({ id: usuario[0].id });

  return res.json({
    msg: "Inicio de sesión exitoso",
    token,
  });
};
