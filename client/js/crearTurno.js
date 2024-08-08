const tbody = document.getElementById("tbody");
document.addEventListener("DOMContentLoaded", (e) => {
  pintarTurnos();
});

const pintarTurnos = async () => {
  console.log("Iniciando pintarTurnos");
  const response = await fetch("http://localhost:4000/api/turnos");
  const turnos = await response.json();
  console.log("Turnos recibidos:", turnos);

  const tableBody_turnos = document.getElementById("tableBody_turnos");
  if (!tableBody_turnos) {
    console.error("No se pudo encontrar el elemento tableBody_turnos");
    return;
  }
  tableBody_turnos.innerHTML = "";

  turnos.forEach((turno, index) => {
    console.log("Procesando turno:", turno);
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${turno.turno}</td>
        <td>${turno.descripcion}</td>
        <td>${turno.hora}</td>
        `;
    tableBody_turnos.appendChild(tr);
  });
  console.log("Finalizando pintarTurnos");
};

const crearTurno = async () => {
  const peticion = await fetch("http://localhost:4000/api/turnos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const data = await peticion.json();

  // let content = "";
  // data.forEach((turno, index) => {
  //   content += `
  //       <tr>
  //           <td>${index + 1}</td>
  //           <td>${turno.turno}</td>
  //           <td>${turno.descripcion}</td>
  //           <td>${turno.hora}</td>
  //       </tr>
  //       `;
  // });
  // tableBody_turnos.innerHTML = content;
};
