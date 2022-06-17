function enviar() {
    try {
        let objeto = JSON.parse(document.querySelector('textarea').value);
        document.querySelector('p').innerHTML = 'Parsable JSON string!'
        console.log(objeto);
    } catch (erro) {
        console.log(erro)
    }

}