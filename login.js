
const validacion = (email,password) => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorMessage = document.getElementById("error-message")


    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Por favor ingrese un mail válido"
        return false
    }
    if (password.length < 8) {
        errorMessage.textContent = "Contraseña incorrecta"
    }
    
    return true;
}

const loginUser = (email, password) => {

}

const form = document.getElementById("login-form")



const login = document.getElementById("login-button").addEventListener("click", function(e){
    e.preventDefault()
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(email);
    console.log(password);

    if (validacion(email, password)) {

    }
 
})