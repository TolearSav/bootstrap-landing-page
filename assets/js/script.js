/* 
Formas de acessar o DOM:
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: getElementBySelector()
*/

let email = document.querySelector("#email")
let assunto = document.querySelector("#exampleFormControlSelect1")
let assunto = document.querySelector("#exampleFormControlTextarea1")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mensagemOk = false

email.style.width = "100%"
assunto.style.width = "100%"
mensagem.style.width = "100%"


function validaEmail() {
    alert("oi")
   /*  let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido."
        txtEmail.style.backgroundColor = "red"
    } else {
        txtEmail.innerHTML = ""
        emailOk = true
    } */
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Seu texto ultrapassou o limite de 100 caracteres."
        txtAssunto.style.backgroundColor = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")
    if (mensagem.value.length >= 100) {
        txtMensagem.innerHTML = "Seu texto ultrapassou o limite de 100 caracteres."
        txtMensagem.style.backgroundColor = "red"
        txtMensagem.style.display = "block"
    } else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}

function enviar() {
    if (emailOk == true && assuntoOk == true && mensagemOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário antes de enviar!")
    }
}