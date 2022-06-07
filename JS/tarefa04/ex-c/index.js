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
    var min = document.querySelector("input#min").value
    var resultado = document.querySelector("p")
    if (isNaN(max) == true || isNaN(min) == true){
        alert("Coloque apenas números")
    }
    if(int(max) == false || int(min) == false){
        alert("Coloque apenas inteiros")
    }
    var nmax = Number(max)
    var nmin = Number(min)
    if(nmax<nmin){
        alert("O máximo preciso ser maior que o minimo")
    }
    resultado.innerHTML = `${Math.random() * (nmax - nmin) + nmin}`
}