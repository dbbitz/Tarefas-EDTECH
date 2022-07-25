async function consulta(){
    const consulta = []
    for(i=0;i<5;i++){
        consulta.push(await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${i}`))
    }
    console.log(consulta)
    Promise.all(consulta)
    .then(response => {
        for(i in response){
            if(response[i].status === 200){
                console.log("OK")
            }
            else{
                console.log("Rejeitado")
            }
        }
    })
}