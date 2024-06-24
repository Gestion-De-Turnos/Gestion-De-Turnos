const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", () => {
  const registrar = async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const email = document.getElementById("email").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const dni = document.getElementById("dni").value;
    const obraSocial = document.getElementById("obraSocial");
    const contrasenia = document.getElementById("password").value;

    const selectedOptions = Array.from(obraSocial.selectedOptions);
    const obraSocialValues = selectedOptions.map((option) => option.value);

    const formData = {
      nombre,
      apellido,
      telefono,
      direccion,
      email,
      fechaNacimiento,
      dni,
      obraSocialValues,
    };

    const result = await fetch("http://localhost:4000/auth/registrar", {
      method: "POST",
      body: JSON.stringify({ ...formData, contrasenia }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const response = await result.json();
    console.log(response);
    if (response.error) {
      // alert(response.msg);
    } else {
      // alert(response.msg);
      window.location.href = "/client/login.html";
    }
  };

  form.addEventListener("submit", registrar);
});
