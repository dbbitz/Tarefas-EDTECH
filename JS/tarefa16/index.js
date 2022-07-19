const btn = document.getElementById('btn')
const tabela = document.querySelector('table')
const mapa = document.querySelector('iframe')
const cepbox = document.getElementById('cep')
const bloco = document.getElementById('bloco-principal')
const exibir = document.getElementById('exibir')
const info = []
let resultado = document.getElementById('info')

// Formatador 
cepbox.addEventListener('keydown', function (event) {
    console.log(cepbox.value)
    if (cepbox.value.length == 5) {
        cepbox.value += "-"
    }
    if (isNaN(event.key) == true && event.key != "Backspace" && cepbox.value.length < 9) {
        alert('digite um numero')
    }

})


// Evento que dispara função que lista as informações sobre o cep.
btn.addEventListener('click', function getAddress() {
    tabela.innerHTML = `
        <tr>
            <td>Rua</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
            <td>Longitude</td>
            <td>Latitude</td>
        </tr>
        <tr id="info">
        </tr>
    `
    let cep = document.getElementById('cep').value
    btn.style.cursor = 'wait'
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        .then((response) => {
            console.log(response.status)
            if(response.status != 200){
                alert("Cep Inválido")
            }
            return response.json()
            
        })
        .then((data) => {
            if(data.address == undefined){
                mapa.style.display = 'none'
                tabela.style.display = 'none'
                btn.style.cursor = 'default'
            }
            else{
                mapa.style.display = 'none'
                //Api com Parametros de Latitude e Longitude
                mapa.src = `https://maps.google.com.br/maps?q=${data.lat},${data.lng}&output=embed&dg=oo`
                tabela.style.display = 'flex'
                document.getElementById('info').innerHTML += `
                <td>${data.address}</td>
                <td>${data.district}</td>
                <td>${data.city}</td>
                <td>${data.state}</td>
                <td>${data.lng}</td>
                <td>${data.lat}</td>
            `
            exibir.style.display = 'flex'
                btn.style.cursor = 'default'
            }
            exibir.addEventListener('click', () => {
                mapa.style.display = "flex"
            })
        
        })
})

