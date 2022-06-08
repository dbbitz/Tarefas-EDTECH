function calcular(){
    var peso = document.querySelector("input#peso").value
    var altura = document.querySelector("input#altura").value
    var resultado = document.getElementById("r1")
    var classificacao = document.getElementById("r2")
    if (isNaN(peso) == true || isNaN(altura) == true){
        alert("Coloque apenas números")
    }
    var npeso = Number(peso)
    var naltura = Number(altura)
    var imc = npeso/(naltura*naltura)
    resultado.innerHTML = `Seu IMC é igual á ${imc.toFixed(1)}`
    if(imc<18.5){classificacao.innerHTML = "Você está abaixo do peso"}
    if(18.5<imc && imc<24.9){classificacao.innerHTML = "Você está no seu peso ideal"}
    if(25<imc){classificacao.innerHTML = "Você está acima do peso"}
}