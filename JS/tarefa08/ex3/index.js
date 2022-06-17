const txtarea = document.querySelector("textarea")
const msg = document.getElementById('msg')
function enviar(){
    txtarea.innerHTML += `${msg.value} \n`
    txtarea.scrollTop = txtarea.scrollHeight
}
addEventListener('keydown', function(event){
    if(event.key == "Enter"){
        enviar()
        
    }
})
function limpar(){
    txtarea.innerHTML = ""
}
