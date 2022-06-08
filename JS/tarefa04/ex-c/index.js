function int(n){
    if(n != parseInt(n)){
        return false
    }
    else{
        return true
    }
}
function calcular(){
    var max = document.querySelector("input#max").value
    var resultado = document.querySelector("p")
    if (isNaN(max) == true){
        alert("Coloque apenas números")
    }
    var nmax = Number(max)
    resultado.innerHTML = `O menor inteiro é ${Math.floor(max)} e o maior inteiro é ${Math.ceil(max)}`
}