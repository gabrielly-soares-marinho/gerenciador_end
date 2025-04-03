document.getElementById("cadastro").addEventListener("submit", async function(event) { /*ele seleciona pelos id para enviar, pega itens do formulario*/ 
    event.preventDefault(); /*trava de regarregar*/
    await save();
});

async function save() {
    try { /*trata erros*/
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let usertype = 1;
        let password = document.getElementById("password").value;
        let termos = 1;
        let birthday = document.getElementById("data").value;
        let cpfcnpj = document.getElementById("cpf").value;

        let dados = {       
            "name": name,
            "email": email,
            "user_type_id": usertype,
            "password": password,
            "cpf_cnpj": cpfcnpj,
            "terms": termos,
            "birthday": birthday
        };

        let api = await fetch("https://go-wash-api.onrender.com/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        let result = await api.json();

        if (api.ok) {
            alert("Cadastro realizado com sucesso!", result);
        } else {
            alert("Erro ao cadastrar:", result);
        }

    } catch (error) {
        alert("Erro inesperado:", error);
    }
}
