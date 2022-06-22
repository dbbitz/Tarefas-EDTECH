// Variaveis dos inputs
const nome = document.getElementById('nome')
const valor = document.getElementById('valor')
const desc = document.getElementById('descricao')
const tabela = document.querySelector('table')
const popup = document.getElementById('pop-up')
const mensagem = document.getElementById('mensagem')
let ordem = 0
let produtos = []

// função para excluir elemnto do array
function meusplice(array, elemento) {
    let p = 0
    let newArray = []
    while (p < array.length) {
        if (p != elemento) {
            newArray.push(array[p])
        }
        p++
    }
    return newArray
}
function fechar2() {
    document.getElementById('popup2').style.display = "none"
}
function fechar1() {
    document.getElementById('pop-up').style.display = "none"
}
function detalhes(x) {
    let id2 = document.getElementById('popup2-id')
    let nome2 = document.getElementById('popup2-nome')
    let valor2 = document.getElementById('popup2-valor')
    let descricao2 = document.getElementById('popup2-descricao')
    let horario2 = document.getElementById('popup2-horario')
    let popup = document.getElementById('popup2')
    let i = 0
    let position = 0
    while (i < produtos.length) {
        if (produtos[i].id == x) {
            position = i
        }
        i++
    }
    id2.innerHTML = `ID: ${produtos[position].id}`
    nome2.innerHTML = `Nome: ${produtos[position].nome}`
    valor2.innerHTML = `Valor: ${produtos[position].valor}`
    descricao2.innerHTML = `Descrição: ${produtos[position].descricao}`
    horario2.innerHTML = `Horário: ${produtos[position].incluidoEm}`
    popup.style.display = 'flex'
}
function listar() {

    let i = 0
    tabela.innerHTML = '<tr> <td>Id</td> <td>Nome</td> <td>Valor</td> <td>Descrição</td> <td>Editar</td> <td>Apagar</td> </tr>'
    while (i < produtos.length) {
        tabela.innerHTML += `<tr> <td onclick="detalhes(${produtos[i].id})">${produtos[i].id}</td> <td>${produtos[i].nome}</td> <td>${produtos[i].valor}</td> <td>${produtos[i].descricao}</td> <td><img src="editar.png" onclick="editar(${produtos[i].id})"></td> <td><img src="lixeira.png" onclick="excluir(${produtos[i].id})"></td> </tr>`
        i++
    }
    console.log(i)
    console.log(produtos)
    console.log(tabela)
}
function incluir() {
    try {
        if (isNaN(nome.value) == false || isNaN(valor.value) || desc.value == '') throw 'Falha no cadastro do produto'
        else {
            ordem += 1
            const dataAtual = `${new Date(Date.now())}`
            const produto = {
                id: ordem,
                nome: nome.value,
                valor: valor.value,
                descricao: desc.value,
                incluidoEm: dataAtual
            }
            console.log(produto)
            produtos.push(produto)
            console.log(produtos)
            mensagem.style.color = 'green'
            mensagem.innerHTML = 'Produto Cadastrado com Sucesso'

        }
    } catch (e) {
        alert(e)
        mensagem.innerHTML = ''
    }
}

//função para excluir o produto da lista após clicar no botão da lixeira
function excluir(x) {
    let j = 0
    console.log(x)
    while (j < produtos.length) {
        if (produtos[j].id == x) {
            console.log(produtos[j])
            produtos = meusplice(produtos, j)
        }
        j++
    }
    console.log(produtos)

}
function editar(x) {
    // achar index do array (inicio)
    let i = 0
    let position = 0
    while (i < produtos.length) {
        if (produtos[i].id == x) {
            position = i
        }
        i++
    }
    // Colocando os valores de antes nos inputs a serem editados
    let id1 = document.getElementById('id-editar')
    id1.value = x
    let nome1 = document.getElementById('nome-editar')
    nome1.value = produtos[position].nome
    let valor1 = document.getElementById('valor-editar')
    valor1.value = produtos[position].valor
    let desc1 = document.getElementById('descricao-editar')
    desc1.value = produtos[position].descricao

    popup.style.display = 'flex'
    let botao = document.getElementById('confirm-edit')

    // botao para confirmar a edição e apagar o popup
    botao.addEventListener('click', function () {
        produtos[position].id = id1.value
        produtos[position].nome = nome1.value
        produtos[position].valor = valor1.value
        produtos[position].descricao = desc1.value
        popup.style.display = 'none'
        listar()
    })
}