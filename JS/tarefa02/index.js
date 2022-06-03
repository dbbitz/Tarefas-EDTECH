function comparar_num() {
    var n1 = document.getElementById('num1').value
    var n2 = document.getElementById('num2').value
    var result = document.getElementById('resultado_num')
    var num1 = Number(n1)
    var num2 = Number(n2)
    
    if (num1 > num2){
        result.innerHTML = "o primeiro é maior que o segundo"
    }
    if (num1 < num2){
        result.innerHTML = "o primero é menor que o segundo"
    }
    if (num1 == num2){
        result.innerHTML = "os numeros sao iguais"
    }
}
function comparar_strings(){
    var str1 = document.getElementById('string1')
    var str2 = document.getElementById('string2')
    var result = document.getElementById('resultado_str')
    if (str1.value.length > str2.value.length){
        result.innerHTML = "o tamanho da primeira string é maior que o da segunda"
    }
    if (str2.value.length > str1.value.length){
        result.innerHTML = "o tamanho da primeira string é menor que o da segunda"
    }
    if (str2.value.length == str1.value.length){
        result.innerHTML = "o tamanho da primeira string é igual ao da segunda"
    }
}
function idade_sexo(){
    var masc = document.getElementById('masculino')
    var femi = document.getElementById('feminino')
    var nasc = document.getElementById('nascimento').value
    var result = document.getElementById('resultado_idade_sexo')
    var nasc1 = nasc.split("-")
    var morte = (2022*365 - (Number(nasc1[0])-1)*365 - (Number(nasc1[1])*30) - Number(nasc1[2]))
    if(masc.checked==true){
        result.innerHTML = `Faltam ${73*365 - morte} dias para sua morte`
    }
    if(femi.checked==true){
        result.innerHTML = `Faltam ${80*365 - morte} dias para sua morte`
    }
}
