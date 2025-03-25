document.getElementById("cadastro").addEventListener("submit", async function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let usertype = 1;
    let password = document.getElementById("password").value;
    let termos = 1;
    let birthday = document.getElementById("data").value;
    let cpfcnpj = document.getElementById("cpf").value;

    dados = {       
        "name": name,
        "email": email,
        "user_type_id": usertype,
        "password": password,
        "cpf_cnpj": cpfcnpj,
        "terms": termos,
        "birthday": birthday
    }
    try {
        let api = await fetch(
            "https://go-wash-api.onrender.com/api/user",{
                method:"POST",
                body:JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        if (api.ok){
            save ()
        } else{
            let responseErro = await api.json();
            console.error("Erro no cadastro:", responseErro);
            alert("Erro ao cadastrar. Tente novamente.");
        }
    } 
    catch (error){
        console.error("error: ", error)
       
    }

});

function save() {
    alert("Cadastro realizado com sucesso! Por favor faça o seu login :)")
}


document.getElementById("login").addEventListener("submit", async function(event) {
    event.preventDefault();

    let email = document.getElementById("email-login").value;
    let usertype = 1;
    let password = document.getElementById("password-login").value;

    dados = {       
        "email": email,
        "password": password,
        "user_type_id": usertype,
    }
    try {
        let api = await fetch(
            "https://go-wash-api.onrender.com/api/login",{
                method: "POST",
                body:JSON.stringify(dados),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        const result = await api.json();

        if (api.ok){
            window.location.href = "home.html";
        }
        
    } 
    catch (error){
        console.error("error: ", error)
    }
   
     

});


