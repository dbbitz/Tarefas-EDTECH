const prg = document.querySelector('p')
const gatinho = document.getElementById('foto-gatinho')
const bomba = document.getElementById('foto-bomba')
function explodir(){
    prg.innerHTML = "Você deixou o gatinho morrer, seu monstro"
    bomba.src = "explosao.webp"
    gatinho.src = "fogo.jpg"
}
var timer = setTimeout(explodir,10000)
function pare(){
    gatinho.src = "gatinho2.jpg"
    bomba.src = "palmas.jpg"
    clearTimeout(timer)
    prg.innerText = "Parabéns você salvou o gatinho filhote"
}


