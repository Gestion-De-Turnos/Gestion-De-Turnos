const form = document.getElementById("login-form");

const login = async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const contrasenia = document.getElementById("password").value;

  const result = await fetch("http://localhost:4000/auth/ingresar", {
    method: "POST",
    body: JSON.stringify({
      email,
      contrasenia,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const response = await result.json();

  if (response.error) {
    alert(response.error);
  } else {
    localStorage.setItem("token", response.token);
    window.location.href = "/client/index.html";
  }
};

form.addEventListener("submit", login);
