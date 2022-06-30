let resultado = ""
let res = document.getElementById("resultado")
let jogo = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
function check() {    
    for (i in jogo) {
        if (jogo[i][0] == jogo[i][1] && jogo[i][1] == jogo[i][2] && jogo[i][2] == jogo[i][0]) {
            resultado = jogo[i][0]
        }
    }
    for (i in jogo) {
        if (jogo[0][i] == jogo[1][i] && jogo[1][i] == jogo[2][i] && jogo[2][i] == jogo[0][i]) {
            resultado = jogo[0][i]
        }
    }
    if((jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2]) || (jogo[0][2] == jogo[1][1] && jogo[1][1] == jogo[2][0]) ){
        resultado = jogo[1][1]
    }
    if(resultado == "X"){
        console.log("X venceu")
        res.innerHTML = "X é o vencedor !" 
    }
    if(resultado == "O"){
        console.log("O venceu")
        res.innerHTML = "O é o vencedor !"
    }
}

let cont = 0
function clicar(y,x){
    check()
    if(cont % 2 == 0){
        document.getElementById(`${y}${x}`).innerHTML = "X"
        jogo[y][x] = "X"
        cont++
        
    }
    else{
        document.getElementById(`${y}${x}`).innerHTML = "O"
        jogo[y][x] = "O"
        cont++
    }
    console.log(jogo)
    if(cont>8 && resultado!="X" && resultado!="Y"){
        res.innerHTML = "Deu velha"
    }
    console.log(resultado)
    check()
}





