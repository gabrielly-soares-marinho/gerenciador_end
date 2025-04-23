async function login (){
    let url = ""
    let api = await fetch(url,{

    })

    if(api.ok)(
        let response = await api.json()
        console.log(response)
        localStorage.setItem("user", JSON.stringify(response))
        alert ("login com sucesso")
    }else{
    let responseError = await api.json()
    console.log(responseError)
}

//mandar informação
function getUserData(){
    let user = localStorage.getIt("nome")
    console.log(user)
}