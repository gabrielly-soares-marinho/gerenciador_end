



async function save(){
    let name = "Gabrielly";
    let email = "aurelina8075@uorak.com"
    let usertype = 1;
    let password = "123456";
    let termos = 1;
    let birthday = "2005-03-05";
    let cpfcnpj = "82577497024"

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

save()