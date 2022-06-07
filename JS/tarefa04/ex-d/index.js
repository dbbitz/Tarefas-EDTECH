function int(n){
    if(n != parseInt(n)){
        return false
    }
    else{
        return true
    }
}
function calcular(){
    var idade = Math.random(0,1)
    var genero = Math.random(0,1)
    var resultado = document.querySelector('p')
    if(idade<0.874){
        idade = "Jovem"
    } else{
        idade = "Idoso"
    }
    if(genero<0.482){
        genero = "Homem"
    } else{
        genero = "Mulher"
    }
    resultado.innerHTML = `${genero} ${idade}`
    
}