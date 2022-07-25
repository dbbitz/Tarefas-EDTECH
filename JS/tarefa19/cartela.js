function Sortear_Cartela() {
    let a = 10
    let n = 75
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
    return Criar_Cartela(a, n)
}

module.exports = Sortear_Cartela()