// Essa função diz se o número é inteiro ou não, caso seja inteiro retorna true
function int(n){
    if(n != parseInt(n)){
        return false
    }
    else{
        return true
    }
}
function calcular(){
    var max = document.querySelector("input#num").value
    var resultado = document.querySelector("p")
// Verificar se os numeros são inteiros
    if (isNaN(max) == true){
        alert("Coloque apenas números")
    }
    var nmax = Number(max)
    resultado.innerHTML = `O menor inteiro é ${Math.floor(max)} e o maior inteiro é ${Math.ceil(max)}`
}