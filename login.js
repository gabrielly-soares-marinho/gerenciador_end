document.getElementById("login").addEventListener("submit", async function (event) {
    event.preventDefault();
    await save();
});


async function login() {
    let url = "https://go-wash-api.onrender.com/api/login"
    let api = await fetch(url, {
        method: "POST",
        body: {
            "email": "",
            "password": "",
            "user_type_id": 1
        },
        headers: { "Content-Type": "application/json" },
    })

    if (api.ok) {
        let response = await api.json()
    console.log(response)
    localStorage.setItem("user", JSON.stringify(response))
    alert("login com sucesso")
}else {
    let responseError = await api.json()
    console.log(responseError)
}
}