addEventListener("click",calcular)
function calcular() {
    var op1 = document.querySelector("input#num1").value
    var op2 = document.querySelector("input#num2").value
    var operador = document.querySelector("select").value
    var result = document.querySelector("p")
    var op1 = Number(op1)
    var op2 = Number(op2)
    if(operador == "+"){result.innerHTML = `${op1+op2}`}
    if(operador == "-"){result.innerHTML = `${op1-op2}`}
    if(operador == "*"){result.innerHTML = `${op1*op2}`}
    if(operador == "/"){result.innerHTML = `${op1/op2}`}
    
}