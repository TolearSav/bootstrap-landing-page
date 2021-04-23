/* 
Formas de acessar o DOM:
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: getElementBySelector()
*/

let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mensagem = document.querySelector("#msg")
let emailOk = false
let assuntoOk = false
let mensagemOk = false
let assuntoValue = ''

email.style.width = "100%"
assunto.style.width = "100%"
mensagem.style.width = "100%"

function validaEmail() {

    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido."
        txtEmail.style.backgroundColor = "red"
        emailOk = false
    } else {
        txtEmail.innerHTML = ""
        emailOk = true
    }
}

function validaAssunto(event) {
    let txtAssunto = document.querySelector("#txtAssunto")
    assuntoValue = event.target.value
    if (assuntoValue == '') {
        txtAssunto.innerHTML = "Escolha um assunto"
        txtAssunto.style.backgroundColor = "red"
        txtAssunto.style.display = "block"
        assuntoOk = false
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
        mensagemOk = false
    } else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}

function enviar() {
    if (emailOk && assuntoValue != '' && mensagemOk) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário antes de enviar!")
    }
}