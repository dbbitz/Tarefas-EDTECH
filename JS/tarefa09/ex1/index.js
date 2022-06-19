function soma(num1,num2){
    let soma = 0
    soma = num1 + num2 
    try{
        if(isNaN(soma)) throw `Impossible to sum ${num1} + ${num2}`
        else{
            console.log(soma)
        }
    } catch (sum){
        console.log(sum)
    }
}
