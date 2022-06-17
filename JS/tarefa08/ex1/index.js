const botao = document.getElementById('botao')
function enviar() {
    const dia = document.getElementById('dia').value
    const mes = document.getElementById('mes').value
    const ano = document.getElementById('ano').value
    let date = new Date(`${Number(ano.value)}/${Number(mes.value)}/${Number(dia.value)}`)


    const obj = {
        nome: JSON.stringify(document.getElementById('nome').value),
        data: date,
        peso: Number(document.getElementById('peso').value),
        altura: Number(document.getElementById('altura').value),
        genero: document.getElementById('genero').value,
    }
    const sobj = JSON.stringify(obj)
    console.log(obj.data)   
    try {
        if (obj.nome.length < 7) throw 'Field “name” is invalid!'
    } catch (erro) {
        document.getElementById('nome').style.border = "solid red 1px"
        document.getElementById('nome-erro').innerText = erro
    }
    try {
        if (dia > 31 || mes > 12 || ano > 2022 || dia == "" || mes == "" || ano == "") throw 'Field “birthDate” is invalid!'
    } catch (erro){
        document.getElementById('data-erro').innerText = erro
        document.getElementById('dia').style.border = 'solid red 1px'
        document.getElementById('mes').style.border = 'solid red 1px'
        document.getElementById('ano').style.border = 'solid red 1px'
    }   
    try{
        if(isNaN(obj.peso) || obj.peso == "") throw 'Field "Weight" is invalid!'
    } catch (erro){
        document.getElementById('peso-erro').innerHTML = erro
        document.getElementById('peso').style.border = "solid red 1px"
    }
    try{
        if(obj.altura % parseInt(obj.altura) != 0) throw 'Field “height” is invalid!'
    } catch (erro){
        document.getElementById('altura-erro').innerHTML = erro
        document.getElementById('altura').style.border = 'solid red 1px'
    }
    try{
        if(obj.genero != 'masculino' && obj.genero != 'feminino') throw 'Field “gender” is invalid!'
    } catch (erro){
        document.getElementById('genero-erro').innerHTML = 'Field "gender” is invalid!'
        document.getElementById('genero').style.border = 'solid red 1px'
    }
       
}
