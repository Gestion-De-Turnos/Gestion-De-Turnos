const elForm = document.getElementById("register")

elForm.addEventListener("submit" , (e) => {
    e.preventDefault()

    const formData = new formData(e.target)
    formData.get("password")
    formData.get("confirm-password")
})