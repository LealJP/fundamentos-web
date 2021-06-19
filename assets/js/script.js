
/* 
Case sensitive = reconhece letras minusculas e maiusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsClassName()
por Seletor: querySelector() //consigo selecionar tanto só a tag, como só o nome
                                ou só a classe
*/

let nome = window.document.getElementById('nome') //seleciona o campo (o elemento que tem o id nome) e
//o que esta dentro dele
let email = document.querySelector('#email') //pegando pelo id=email 
let assunto = document.querySelector('#assunto') //se for class usar .

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome") 
    if(nome.value.length < 3){
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color =  'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail') //pegando o elemento div com id = txtEmail
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 2){
        txtAssunto.innerHTML = '<h1> Teste h1 </h1>'
    }
}