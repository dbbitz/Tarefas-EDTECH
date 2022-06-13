// Sequencia de comandos para criar os options
function addoption(n) {
    document.getElementById("min").add(new Option(n, n))
    document.getElementById("seg").add(new Option(n, n))
}
for (i = 0; i < 60; i++) {
    addoption(i)
}

// Declaração das variaveis
const txt = document.querySelector('p')
var botao = document.querySelector('input')
var titulo = document.querySelector('h1')
var alarme = document.querySelector('audio')
var som = new Audio('alarme.mp3')


function cont() {
    var min = document.querySelector("select#min").value
    var seg = document.querySelector("select#seg").value
    const temposeg = ((seg+(min*60))*5)/1000
    botao.value = "Parar"
    botao.style.background = "red"
    // Contador 
    function contar() {
        seg = seg - 1
        if (seg == -1) {
            setTimeout(1000)
            seg = 59
            min = min - 1
        }
        if((min*60+seg)< temposeg && (min*60+seg)>0 ){
            document.getElementById('bloco-principal').style.background = "rgb(228, 48, 48)"
            titulo.innerHTML = "Seu tempo está acabando"
        }
        if(min==0 && seg==0){
            parar()
            titulo.innerHTML = "Seu tempo acabou!"
            alarme.innerHTML = som.play()
        }
        
        txt.innerHTML = `${min} : ${seg}`
    }
    var timer = setInterval(contar, 1000);
    // Função para parar o cronometro
    function parar() {
        clearInterval(timer)
        botao.value = "Voltar Para Contagem Regressiva"
        botao.style.background = "green"
        botao.addEventListener('click', cont)
        botao.removeEventListener('click', parar)
        alarme.innerHTML = som.pause()
    }
    
    botao.removeEventListener('click', cont)
    botao.addEventListener('click', parar)
    // Tempo em base decimal

}
botao.addEventListener('click', cont)

