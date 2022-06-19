function sum(num1,num2){
    let soma = 0
    soma = num1 + num2 
    try{
        if(isNaN(soma)) throw `Impossible to sum ${num1} + ${num2}`
        else{
            return soma
        }
    } catch (erro){
        return erro
    }
}
function subtract(num1,num2){
    try{
        if(num1<num2) throw `[subtract] Impossible to subtract ${num1} - ${num2}`
        else{
            return sum(num1,num2*(-1))
        }
    } catch (erro){
        return erro
    }
    
}
function mutiply(num1,num2){
    try{
        if(isNaN(num1) || isNaN(num2)) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
    } catch (erro){
        return erro
    }
    if(num2 == 0){
        return 0
    }
    else if(num2 == 1){
        return num1
    } else{
        return sum(num1, mutiply(num1,subtract(num2,1)))
    }
}
function exp(num1,num2){
    try{
        if(isNaN(num1) || isNaN(num2)) throw `[multiply] Impossible to multiply ${num1} * ${num2}`
    } catch(erro){
        return erro
    }
    if(num2 == 0){
        return 0
    }
    else if(num2 == 1){
        return num1
    } else{
        return mutiply(num1, exp(num1,subtract(num2,1)))
    }
}
let i = 0
function divisaofalsa(num1,num2){
    i = i + 1
    if(num1 == num2){
        return i
    }
    else{
        return divisaofalsa(num1-num2,num2)
    }
}
function divisaoreal(num1,num2){
    try{
        if(isNaN(num1)||isNaN(num2)) throw `[divide] Impossible to divide ${num1} / ${num2}`
        else{
            i = 0
            return divisaofalsa(num1,num2)
        }
    } catch(erro){
        return erro
    }
}