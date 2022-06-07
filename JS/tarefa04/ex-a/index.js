function calcular(){
    var peso = document.querySelector("input#peso").value
    var altura = document.querySelector("input#altura").value
    var resultado = document.querySelector("p")
    if (isNaN(peso) == true || isNaN(altura) == true){
        alert("Coloque apenas números")
    }
    var npeso = Number(peso)
    var naltura = Number(altura)
    resultado.innerHTML = `Seu IMC é igual á ${npeso/(naltura*naltura)}`
}