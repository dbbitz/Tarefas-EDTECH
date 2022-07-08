const btn = document.querySelector("input#btn")
const tabela = document.querySelector('table')
const cot = document.querySelector('div#cot')
let moeda = document.querySelector("select").value

// Data no formato 'YYYYMMDD' Cash no formato 'USD' 'EUR'
function cotacao(data, cash) {
    fetch(`https://economia.awesomeapi.com.br/json/daily/${cash}-BRL/?start_date=20180701&end_date=${data}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let maximo = data[0].high
            let minimo = data[0].low
            let date = data[0].create_date
            let fechamento = data[0].bid
            tabela.innerHTML += `<td>${date}</td><td>${minimo}${cash}</td><td>${maximo}${cash}</td><td>${fechamento}${cash}</td>`
        })

    fetch(`https://economia.awesomeapi.com.br/last/${moeda}-BRL`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let cotacao = data.USDBRL.high
            cot.innerHTML += `<td>${cotacao}${cash}</td>`
        })
}
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
function format_data(data){
    let dia = data.getDay()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    if(Number(mes)<10){
        mes = `0${mes}`
    }
    if(Number(dia)<10){
        dia = `0${dia}`
    }
    return `${ano}${mes}${dia}`
}
function okay() {

    let datainicio = document.querySelector("input#data-inicial").value
    datainicio = datainicio.split('-')
    let datafim = document.querySelector("input#data-final").value
    datafim = datafim.split('-')
    console.log(datainicio)
    console.log(datafim)

    let datainicioUTC = new Date(datainicio[0],datainicio[1],datainicio[2])
    let datafimUTC = new Date(datafim[0],datafim[1],datafim[2]) 
    
    cotacao(datainicio.join(''), 'USD')
    
}

//AJAX

// const http = new XMLHttpRequest();
// http.open("GET", "http swapi.dev/api/people/?search=sky", true)
// http.send()

// http.onreadystatechange = function() {
//     if(http.readyState === XMLHttpRequest.DONE){
//         console.log(http.responseText)
//     }
// }

//FETCH

// fetch("https://swapi.dev/api/people/1")
//     .then(function(response){
//         return response.json()

//     })
//     .then(function (data){
//         console.log(data)
//     })