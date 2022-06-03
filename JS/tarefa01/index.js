var a = document.querySelector('button')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
function clicar(){
    console.log("Olá console")
}
function entrar(){
    a.style.background = "red"
}
function sair(){
    a.style.background = "green"
}