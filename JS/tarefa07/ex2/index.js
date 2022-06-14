var input = document.querySelector('input')
document.addEventListener('keydown', function (event) {
    console.log(event.key)
    var caracteres = 0
    if (isNaN(event.key) == true && event.key != "Backspace") {
        alert('digite um numero')
    }
    
    if(input.value.length == 5){
        input.value += "-"
    }

})
