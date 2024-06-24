document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  const navItem = document.getElementById("nav-items");

  const registerLink = document.createElement("a");
  registerLink.classList.add("nav-link", "registro");
  registerLink.href = "/client/register.html";
  registerLink.textContent = "REGISTRARSE";

  const loginLink = document.createElement("a");
  loginLink.classList.add("nav-link", "iniciar_sesion");
  loginLink.href = "/client/login.html";
  loginLink.textContent = "INICIAR SESIÓN";

  const logoutLink = document.createElement("a");
  logoutLink.classList.add("nav-link", "cerrar_sesion");
  logoutLink.href = "";
  logoutLink.textContent = "CERRAR SESIÓN";

  if (!token) {
    // Agregar los enlaces de registro e inicio de sesión al navbar
    navItem.appendChild(registerLink);
    navItem.appendChild(loginLink);
  } else {
    // Agregar el enlace de cierre de sesión al navbar
    navItem.appendChild(logoutLink);

    // Agregar el evento click al enlace de cierre de sesión
    logoutLink.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.reload();
    });
  }
});
