function info() {
    var data = document.getElementById('data').value.split('-')
    var res = document.querySelector('p')
    var ano = data[0]
    var mes = data[1]
    var dia = data[2]
    var data2 = new Date(ano, mes, dia)
    var dsem = data2.getDay()
    var mmes = data2.getMonth()
    switch (dsem) {
        case 1: dsem = "Sábado"
            break
        case 2: dsem = "Domingo"
            break
        case 3: dsem = "Segunda"
            break
        case 4: dsem = "Terça"
            break
        case 5: dsem = "Quarta"
            break
        case 6: dsem = "Quinta"
            break
        case 0: dsem = "Sexta"
            break
    }
    switch (mmes) {
        case 1: mmes = "Janeiro"
            break
        case 2: mmes = "Fevereiro"
            break
        case 3: mmes = "Março"
            break
        case 4: mmes = "Abril"
            break
        case 5: mmes = "Maio"
            break
        case 6: mmes = "Junho"
            break
        case 7: mmes = "Julho"
            break
        case 8: mmes = "Agosto"
            break
        case 9: mmes = "Setembro"
            break
        case 10: mmes = "Outubro"
            break
        case 11: mmes = "Novembro"
            break
        case 12: mmes = "Dezembro"
            break
    }

    res.innerHTML = `Dia: ${dia}<br> Mês: ${mes} <br> Ano: ${ano} <br> ${dsem} <br> ${mmes} <br> ${new Date(ano,mes,dia).getTime()} `
}