const usn = document.getElementById("form3Example1m");
const usa = document.getElementById("form3Example1n");
const usc = document.getElementById("form3Example1m1");
const usl = document.getElementById("form3Example1n1");
const usd = document.getElementById("form3Example8");
const use = document.getElementById("form3Example97");
const usp = document.getElementById("form3Example90");
const uscp = document.getElementById("form3Example99");
const btn = document.getElementById("regbtn");

function soloLetras(e) {
    let key = e.keyCode || e.charCode;
    let isLetter = key >= 65 && key <= 90 || key >= 97 && key <= 122;
    if (!isLetter && (key !== 8 && key !== 32)) {
        return false; 
    }
}

function soloNumeros(e) {
    let key = e.keyCode || e.charCode;
    let isNumber = key >= 48 && key <= 57;
    if (!isNumber && (key !== 8 && key !== 32)) {
        return false;
    }
}

function contIn(campo) {
    if (campo.value >8) {
        campo.value = campo.value.slice(0, 8)
    }
}

btn.addEventListener("click", async (event) => {

    if (usn.value == "") {
        alert("Ningún campo puede estar vacío");
    } else if (usa.value == "") {
        alert("Ningún campo puede estar vacío");
    } else if (usc.value == "") {
        alert("Ningún campo puede estar vacío");
    } 
    if (usp.value != uscp.value ) {
        alert("Las contraseñas no coinciden")
    }
})

