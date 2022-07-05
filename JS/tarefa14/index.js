import pageBrigadeiro from "./brigadeiros.js"
import pageDoces from "./doces.js"
import pageCupcakes from "./cupcakes.js"
import mainPage from "./main.js"

const main = document.querySelector('#main')
const home = document.getElementById('home')
let brigadeiros = document.getElementById('brigadeiros')
let doces = document.getElementById('doces')
let cupcakes = document.getElementById('cupcakes')



brigadeiros.addEventListener('click', () => {
    main.innerHTML = `${pageBrigadeiro()}`
    history.pushState({},'','brigadeiros/')
})
doces.addEventListener('click', () => {
    main.innerHTML = pageCupcakes()
    history.pushState({},'','doces/') 
})
cupcakes.addEventListener('click', () => {
    main.innerHTML = pageDoces()
    history.pushState({},'','cupcakes/')
})
home.addEventListener('click', () => {
    main.innerHTML = mainPage()
    history.pushState({},'','home/')
})



//botoes.forEach(function (x){
//    console.log(x.value)
//})
//for(i of botoes){
 //   console.log(i.value)
//}