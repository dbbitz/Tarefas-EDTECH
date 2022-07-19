const EstadosSelect = document.getElementById('estados')
const CidadesSelect = document.getElementById('cidades')
const tabela = document.getElementById('tabela')
function ConvertDaySem(n){
    switch (n){
        case 3: return "Domingo"
        break
        case 4: return "Segunda"
        break
        case 5: return "Terça"
        break
        case 6: return "Quarta"
        break
        case 0: return "Quinta"
        break
        case 1: return "Sexta"
        break
        case 2: return "Sábado"
        break
    }
}
async function ListarEstados() {
    const UFInfo = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    const UFs = await UFInfo.json()
    for (i in UFs) {
        EstadosSelect.innerHTML += `<option value="${UFs[i].sigla}">${UFs[i].nome}</option>`
    }
}
ListarEstados()
async function ListarMunicipios(uf) {
    new Promise(async (resolve, reject) => {
        const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        if (res.status != 200) {
            reject("Rejeitado")
        }
        resolve()
        console.log("Resolvido")
        const resconvertido = await res.json()
        for (i in resconvertido) {
            CidadesSelect.innerHTML += `<option value="${resconvertido[i].id}">${resconvertido[i].nome}</option>`
        }
    })

}
// Evento para ser disparado ao selecionar o estado (Listar municipios)
EstadosSelect.addEventListener('change', () => {
    CidadesSelect.innerHTML = "<option>Selecione o Município</option>"
    ListarMunicipios(EstadosSelect.value)
    console.log(EstadosSelect.value)
})
// Evento para ser disparado ao mudar a opção de cidade
CidadesSelect.addEventListener('change', async () => {
    const IdCidade = await Number(CidadesSelect.value)
    const Data = await new Date(Date.now())
    const DataHoje = Data.toLocaleDateString()
    const DataAmanha = new Date(Data.setDate(Data.getDate() + 1)).toLocaleDateString()
    const DataDpsDeAmanha = new Date(Data.setDate(Data.getDate() + 1)).toLocaleDateString()
    const DataDpsDpsDeAmanha = new Date(Data.setDate(Data.getDate() + 1)).toLocaleDateString()
    const Dsem = Data.getDay()
    const DsemAmanha = new Date(Data.setDate(Data.getDate() + 1)).getDay()
    const DsemDpsDeAmanha = new Date(Data.setDate(Data.getDate() + 1)).getDay()
    const DsemDpsDpsDeAmanha = new Date(Data.setDate(Data.getDate() + 1)).getDay()
    console.log(Dsem,DsemAmanha,DsemDpsDeAmanha,DsemDpsDpsDeAmanha)

    new Promise(async (resolve, reject) => {
        let ApiTempo = await fetch(`https://apiprevmet3.inmet.gov.br/previsao/${IdCidade}`)
        let tempo = await ApiTempo.json()
        if (ApiTempo.status != 200) {
            reject()
            console.log('Rejeitado')
            return
        }
        resolve()
        console.log(DataHoje)
        console.log(DataAmanha)
        console.log(DataDpsDeAmanha)
        console.log(DataDpsDpsDeAmanha)
        console.log(Dsem)
        console.log(tempo)
        console.log(tempo[IdCidade][DataHoje])
        tabela.innerHTML += `
        <tr>
            <td>${DataHoje}</td>
            <td>${ConvertDaySem(Dsem)}</td>
            <td>Manhã</td>
            <td><img src="${tempo[IdCidade][DataHoje].manha.icone}"></td>
            <td>${tempo[IdCidade][DataHoje].manha.resumo}</td>
            <td>${tempo[IdCidade][DataHoje].manha.temp_max}ºC - ${tempo[IdCidade][DataHoje].manha.temp_max}ºC</td>
        </tr>
        <tr>
            <td>${DataHoje}</td>
            <td>${ConvertDaySem(Dsem)}</td>
            <td>Tarde</td>
            <td><img src="${tempo[IdCidade][DataHoje].tarde.icone}"></td>
            <td>${tempo[IdCidade][DataHoje].tarde.resumo}</td>
            <td>${tempo[IdCidade][DataHoje].tarde.temp_max}ºC - ${tempo[IdCidade][DataHoje].tarde.temp_max}ºC</td>
        </tr>
        <tr>
            <td>${DataHoje}</td>
            <td>${ConvertDaySem(Dsem)}</td>
            <td>Manhã</td>
            <td><img src="${tempo[IdCidade][DataHoje].noite.icone}"></td>
            <td>${tempo[IdCidade][DataHoje].noite.resumo}</td>
            <td>${tempo[IdCidade][DataHoje].noite.temp_max}ºC - ${tempo[IdCidade][DataHoje].noite.temp_max}ºC</td>
        </tr>


        <tr>
            <td>${DataAmanha}</td>
            <td>${ConvertDaySem(DsemAmanha)}</td>
            <td>Manhã</td>
            <td><img src="${tempo[IdCidade][DataAmanha].manha.icone}"></td>
            <td>${tempo[IdCidade][DataAmanha].manha.resumo}</td>
            <td>${tempo[IdCidade][DataAmanha].manha.temp_max}ºC - ${tempo[IdCidade][DataAmanha].manha.temp_max}ºC</td>
        </tr>
        <tr>
            <td>${DataAmanha}</td>
            <td>${ConvertDaySem(DsemAmanha)}</td>
            <td>Tarde</td>
            <td><img src="${tempo[IdCidade][DataAmanha].tarde.icone}"></td>
            <td>${tempo[IdCidade][DataAmanha].tarde.resumo}</td>
            <td>${tempo[IdCidade][DataAmanha].tarde.temp_max}ºC - ${tempo[IdCidade][DataAmanha].tarde.temp_max}ºC</td>
        </tr>
        <tr>
            <td>${DataAmanha}</td>
            <td>${ConvertDaySem(DsemAmanha)}</td>
            <td>Manhã</td>
            <td><img src="${tempo[IdCidade][DataAmanha].noite.icone}"></td>
            <td>${tempo[IdCidade][DataAmanha].noite.resumo}</td>
            <td>${tempo[IdCidade][DataAmanha].noite.temp_max}ºC - ${tempo[IdCidade][DataAmanha].noite.temp_max}ºC</td>
        </tr>


        <tr>
            <td>${DataDpsDeAmanha}</td>
            <td>${ConvertDaySem(DsemDpsDeAmanha)}</td>
            <td>Manhã</td>
            <td><img src="${tempo[IdCidade][DataDpsDeAmanha].icone}"></td>
            <td>${tempo[IdCidade][DataDpsDeAmanha].resumo}</td>
            <td>${tempo[IdCidade][DataDpsDeAmanha].temp_max}ºC - ${tempo[IdCidade][DataDpsDeAmanha].temp_max}ºC</td>
        </tr>

        <tr>
            <td>${DataDpsDpsDeAmanha}</td>
            <td>${ConvertDaySem(DsemDpsDpsDeAmanha)}</td>
            <td>Manhã</td>
            <td><img src="${tempo[IdCidade][DataDpsDpsDeAmanha].icone}"></td>
            <td>${tempo[IdCidade][DataDpsDpsDeAmanha].resumo}</td>
            <td>${tempo[IdCidade][DataDpsDpsDeAmanha].temp_max}ºC - ${tempo[IdCidade][DataDpsDpsDeAmanha].temp_max}ºC</td>
        </tr>
        `
        tabela.style.display = "block"
    })
})

