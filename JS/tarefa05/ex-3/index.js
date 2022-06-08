
function clicar() {
    var produto = Number(document.querySelector("select").value)
    var pg = document.querySelector("p")
    switch (produto){
        case 1: document.getElementById("img").src = "celular.jpg"
        break
        case 2: document.getElementById("img").src = "notebook.jpg"
        break
        case 3: document.getElementById("img").src = "videogame.jpg"
        break
        case 4: document.getElementById("img").src = "tv.jpg"
        break
        case 5: document.getElementById("img").src = "tablet.jpg"
        break
    }
}
