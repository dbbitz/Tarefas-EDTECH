function escrever() {
    var num = document.getElementById('num').value
    var resultado = document.querySelector('p')
    var res = ""
    var n = Number(num)
    if (n < 0 || n > 10) {
        alert("Digite um número de 1 a 10")
    }
    switch (n) {
        case 1: res = "Um"
            break
        case 2: res = "Dois"
            break
        case 3: res = "Três"
            break
        case 4: res = "Quatro"
            break
        case 5: res = "Cinco"
            break
        case 6: res = "Seis"
            break
        case 7: res = "Sete"
            break
        case 8: res = "Oito"
            break
        case 9: res = "Nove"
            break
        case 10: res = "Dez"
            break
    }
    resultado.innerHTML = res
}