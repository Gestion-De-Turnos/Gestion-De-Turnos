const tbody = document.getElementById("tbody");

const pintarTurnos = (turnos) => {
  tbody.innerHTML = "";
  turnos.forEach((turno) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${turno.id}</td>
        <td>${turno.turno}</td>
        <td>${turno.descripcion}</td>
        <td>${turno.medico}</td>
        <td>${turno.especialidad}</td>
        <td>${turno.hora}</td>
        `;
    tbody.appendChild(tr);
  });
};

const crearTurno = async () => {
  const peticion = await fetch("http://localhost:4000/api/turnos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await peticion.json();
};
