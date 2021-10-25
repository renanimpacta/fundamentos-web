//var - variável de escopo global
//let - variável de escopo local (de preferência usar o let)
//const - variável constante (escopo global)

/*
FORMAS DE ACESSAR:
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName() -- plural
por Classe: getElementsByClassName() -- plural
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '90%'
email.style.width = '90%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    }
    else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    }
    else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto não pode ultrapassar 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }

}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha o formulário corretamente antes de enviar')
    }
}


function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}


/*let nome = document.querySelector('#nome')
let enviar = document.querySelector('#enviar')
let nomeOk = false

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML='nome valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }    
}

function enviarDados(){
    if(nomeOk == true ){
        alert('Enviado com sucesso!!')
    }
    else{
        alert('Preencha o campo NOME')
    }
}*/