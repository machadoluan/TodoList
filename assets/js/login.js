const inputEmail = document.querySelector("#email")
const inputSenha = document.querySelector("#senha")
const btnEnviar = document.querySelector("#enviar")
const erro = document.querySelector(".erro")

function logar(){
    let email = "luanmachado@gmail.com"
    let senha = "1234"

    if(inputEmail.value == email || inputSenha.value == senha){
        alert("Seja bem vindo(a)")
    } else {
        alert("Login ou senha invalidos!")
    }
}


btnEnviar.addEventListener("click", logar)