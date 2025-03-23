async function save(){
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
    let api = await fetch(
        "https://go-wash-api.onrender.com/api/user",{
            method:"POST",
            body:JSON.stringify(dados),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    if(api.ok){
        let response = await api.json()
        console.log(response);
        return
    }
    let responseErro = await api.json()
    console.log(responseErro);
}

