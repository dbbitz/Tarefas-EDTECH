// Informações do carro
const modelo = document.getElementById('modelo')
const fabricante = document.getElementById('fabricante')
const vmax = document.getElementById('vmax')
const zerocem = document.getElementById('0a100')

// Informações de cada modelo
const ferrari = ['Ferrari F8', 'Ferrari', '340km/h', '2,6 (s)']
const lambo = ['Lamborghini Diablo GT', 'Lamborghini', '345km/h', '3,5 (s)']
const porsche = ['Porsche 911', 'Porsche', '330km/h', '2,7 (s)']
const bmw = ['BMW 320i', 'BMW', '240km/h', '7,1 (s)']
const mercedez = ['Mercedez C200', 'Mercedez', '235km/h', '8,7 (s)']

function carros(x) {
    var carro = ""
    document.querySelector('img').src = `${x}.jpg`
    switch (x) {
        case "ferrari": carro = ferrari
            break
        case "lambo": carro = lambo
            break
        case "porsche": carro = porsche
            break
        case "bmw": carro = bmw
            break
        case "mercedez": carro = mercedez
    }
    console.log(carro)
    modelo.innerHTML = `Modelo: ${carro[0]}`
    fabricante.innerHTML = `Fabricante: ${carro[1]}`
    vmax.innerHTML = `Velocidade Máxima: ${carro[2]}`
    zerocem.innerHTML = `0-100Km: ${carro[3]}`
}
