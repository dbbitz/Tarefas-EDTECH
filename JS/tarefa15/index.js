let moeda = document.querySelector("select").value
const btn = document.querySelector("input#btn")
const tabela = document.querySelector('table')
function dolar(){
    fetch('https://economia.awesomeapi.com.br/json/daily/USD-BRL/?start_date=20220701&end_date=20220701')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let maximo = data[0].high
            let minimo = data[0].low
            let date = data[0].create_date
            let fechamento = data[0].bid
            tabela.innerHTML += `<td>${date}</td><td>${maximo} - ${minimo}</td> <td>${fechamento}</td>`
        })
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let cotacao = data.USDBRL.high
            tabela.innerHTML += `<td>${cotacao}</td>`
        })
        
}
function okay(){
    return dolar()
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