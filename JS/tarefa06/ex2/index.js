const msg = document.getElementById('msg')
const cont = document.getElementById('cont')
const gatinho = document.getElementById('foto-gatinho')
const bomba = document.getElementById('foto-bomba')
const som = document.getElementById('som')
const tick = new Audio('tick.wav')
const exp = new Audio('explosao.mp3')
const tick2 = new Audio('cronometro.mp3')

var tempo = 60
function contar() {
    tempo = tempo - 1
    if (tempo < 10) {
        som.innerHTML = tick2.play()
        cont.innerText = `${tempo}`
    }
    else {
        cont.innerText = `${tempo}`
        som.innerHTML = tick.play()
    }

}
function explodir() {
    msg.innerText = "Você deixou o gatinho morrer, SEU MONSTRO!!!"
    bomba.src = "explosao.webp"
    gatinho.src = "fogo.jpg"
    som.innerHTML = tick.pause()
    clearInterval(contador)
    som.innerHTML = exp.play()

}
var contador = setInterval(contar, 1000)
var timer = setTimeout(explodir, 61000)
function pare() {
    gatinho.src = "gatinho2.jpg"
    bomba.src = "palmas.jpg"
    clearTimeout(timer)
    clearInterval(contador)
    msg.innerText = "Parabéns você salvou o gatinho filhote"
    som.innerHTML = tick.pause()
}


