const botao = document.getElementById('botaosortear') 
const nsorteado = document.getElementById('sorteador')
const cartela = document.querySelectorAll('div.caixas')

function clicar(b){
    cartela[b].style.background = "green"
    console.log(cartela[b])
}

console.log(cartela)
function Sortear_Cartela(x,y){
    let a = x
    let b = y
    function Criar_Cartela(a, n) {
        let cartela = []
        while (cartela.length < a) {
            cartela.push(Math.floor(Math.random() * n))
            cartela = cartela.filter(function (ele, pos) {
                return cartela.indexOf(ele) == pos;
            })
        }
        return cartela
    }
    return Criar_Cartela(a,b)
}
function Sortear_Numero(n){
    let a = n
    function Numero(n){
        return Math.floor(Math.random(0,1) * n)
    }
    return Numero(a)
}
function sorteados(n) {
    let sorteados = []
    while(sorteados.length<n) {
        let sorteado = Sortear_Numero(75)
        sorteados.push(sorteado)
        sorteados = sorteados.filter(function (ele, pos) {
            return sorteados.indexOf(ele) == pos;
        })}
    return sorteados
}
const numerosmesa = sorteados(75)
const numeroscartela = Sortear_Cartela(10,75)
console.log(numeroscartela)
console.log(numerosmesa)
botao.addEventListener('click', () => {
    for(let i=0;i<cartela.length;i++){
        cartela[i].innerHTML = numeroscartela[i] 
    }
    setInterval(
        () => {
            if(pontos == 0){
                location.reload()
                confirm("BINGO!!! \nContinuar jogando: ")
            }
            nsorteado.innerHTML = numerosmesa[cont+1]
            for(let i=0;i<numeroscartela.length;i++){
                comparar_numeros(numeroscartela[i],numerosmesa[cont]) 
                if(comparar_numeros(numeroscartela[i],numerosmesa[cont]) == true){
                    pontos--
                }
            }
            cont++
        },5000
        )
})

function comparar_numeros(x,y){
    if(x == y){
        for(let t = 0;t<cartela.length;t++){
            if(cartela[t].outerText == x){
                cartela[t].style.background = "grey"
            }
        }
        return true
    }
    else{
        console.log("Não marque nada")
        return false
    }
}
let cont = 0
nsorteado.innerHTML = numerosmesa[0]
let pontos = 10




