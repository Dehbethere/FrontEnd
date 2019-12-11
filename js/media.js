function calcMedia(){
    let valor01 = Number(document.getElementById("n01").value)
    let valor02 = Number(document.getElementById("n02").value)
    let valor03 = Number(document.getElementById("n03").value)

    let media = (valor01 + valor02 + valor03) / 3

    document.getElementById("media").value = media


}

function situation(){

    document.getElementById("media").value
    let midu = Number(document.getElementById("media").value) 
    
    if (midu <= 5){
        document.getElementById("situacao").value = "Reprovado"
    }
    else if(midu > 5 && midu <= 7){
        document.getElementById("situacao").value = "Recuperação"
    }
    else{
        document.getElementById("situacao").value = "Aprovado"
    }

}

function infos(){
    let persona = []
    persona.nome = document.getElementById("nome").value
    persona.rg = document.getElementById("rg").value
    persona.cpf = document.getElementById("cpf").value
    persona.email = document.getElementById("email").value
    persona.media = document.getElementById("media").value

    document.getElementById("i01").innerHTML = persona.nome
    document.getElementById("i02").innerHTML = persona.rg
    document.getElementById("i03").innerHTML = persona.cpf
    document.getElementById("i04").innerHTML = persona.email
    document.getElementById("i05").innerHTML = persona.media


}