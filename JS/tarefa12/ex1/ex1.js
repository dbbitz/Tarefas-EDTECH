function fatorial(x) {
    let total = x
    if (x == 0) {
        return 1
    }
    for (i = 1; i < x; i++) {
        total = total * i
    }
    document.getElementById('res-fatorial').innerHTML = total
}
function euler() {
    let euler = 1
    for (k = 1; k < 100; k++) {
        euler = euler + 1 / fatorial(k)
    }
    return euler
}
function ehprimo(x) {
    let cont = 0
    for (i = 0; i < x; i++) {
        if (x % i == 0) {
            cont++
        }
    }
    if (cont == 1) {
        return true
    }
    else {
        return false
    }
}
function primos() {
    let primos = []
    for (i = 0; i < 100000; i++) {
        if (ehprimo(i) == true) {
            primos.push(i)
        }
    }
    document.getElementById('res-primos').innerHTML = primos
    console.log(primos)
}
function pi() {
    let pi = 0
    for (i = 1; i < 1000000; i += 4) {
        pi += 1 / i
    }
    for (i = 3; i < 1000000; i += 4) {
        pi -= 1 / i
    }
    pi = pi * 4
    console.log(pi)
    document.getElementById('pi').innerHTML = pi
}
let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let naipe = ["-Ouros", "-Espadas", "-Copas", "-Paus"]
let cartas_naipe = []
for (i = 0; i < cartas.length; i++) {
    cartas_naipe.push((cartas[i] + naipe[0]).split('-'))
    cartas_naipe.push((cartas[i] + naipe[1]).split('-'))
    cartas_naipe.push((cartas[i] + naipe[2]).split('-'))
    cartas_naipe.push((cartas[i] + naipe[3]).split('-'))
}
console.log(cartas_naipe)
console.log(cartas_naipe[1][2])

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let combinacao = []
function sortear() {
    combinacao = []
    for (i = 0; i < 5; i++) {
        let escolha = getRandomIntInclusive(0, 52 - i)
        combinacao.push(cartas_naipe[escolha])
        cartas_naipe.splice(escolha, 1)
    }
    
}
function combo() {
    sortear()
    document.getElementById('poker').innerHTML = combinacao
    let score = ""
    let cartas = []
    for (i in combinacao) {
        cartas.push(combinacao[i][0])
    }
    cartas.sort((a,b) => a - b) 
    let naipes = []
    for(i in combinacao){
        naipes.push(combinacao[i][1])
    }
    console.log(combinacao)
    if(naipes[0] == naipes[1] && naipes[1] == naipes[2] && naipes[2] == naipes[3] && naipes[3] == naipes[4]){
        if(cartas[0] == cartas[1]-1 && cartas[1]==cartas[2]-1 && cartas[2]==cartas[3]-1 && cartas[3]==cartas[4]-1){
            console.log("Você tem um stright flush")
            score = "Sflush"
        }
        else{
            console.log("Você tem um flush")
        }
    }
    else{
        if(cartas[0] == cartas[1]-1 && cartas[1]==cartas[2]-1 && cartas[2]==cartas[3]-1 && cartas[3]==cartas[4]-1){
            score="Sequência"
        }
        for(i in cartas){
            let cont = 0
            for(x in cartas){
                if(cartas[x] == cartas[i]){
                    cont++
                }
            }
            if(cont==4){score="Quadra"}
            if(cont==3){score+="Trinca"}
            if(cont==2){score+="Par"}
        }
        if(score=="TrincaTrincaTrinca"){score="Trinca"}
        if(score=="ParPar"){score="Par"}
        if(score=="TrincaTrincaTrincaParPar" || score=="ParParTrincaTrincaTrinca"){score="Full House"}
        if(score=="ParParParPar"){score="Dois Pares"}
        if(score==""){score="Você não tem nada"}
        console.log(score)
        document.getElementById('score').innerHTML = score
    }
    
    
    

    //for (i in cartas) {
    //    let cont = 0
    //    for (x in cartas) {
    //        if (cartas[x] == cartas[i]){
    //            
    //        }
     //   }
        
        
    }
//Utiliza a função combo para sortear as cartas e dizer o que você tem 





