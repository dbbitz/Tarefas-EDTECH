function addoption(n) {
    document.getElementById("min").add(new Option(n, n))
    document.getElementById("seg").add(new Option(n, n))
}
for (i = 0; i < 60; i++) {
        addoption(i)
}

function cont() {
    var min = document.querySelector("select#min").value
    var seg = document.querySelector("select#seg").value
    var txt = document.querySelector('p')
    var botao = document.querySelector('input')
    botao.style.background = "red"
    setInterval(() => {
        seg = seg - 1
        if(seg==-1){
            setTimeout(1000)
            seg = 59
            min = min - 1
        }
        txt.innerHTML = `${min} : ${seg}`
    }, 1000);
    
}