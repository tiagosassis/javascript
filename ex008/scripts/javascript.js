function verificar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("image")
    var anoNascimento = window.document.getElementById("ano")
    var time = new Date;
    var sexo = window.document.getElementsByName("sexo")
    var idade

    if(anoNascimento.value.length == 0){
        alert("Verifique os dados e tente novamente")
    } else if(anoNascimento.value > time.getFullYear()){
        alert("Verifique os dados e tente novamente")
    } else if(!(sexo[0].checked || sexo[1].checked)){
        alert("Verifique os dados e tente novamente")
    }

    idade = time.getFullYear() - Number(anoNascimento.value)

    if (sexo[0].checked) {
        msg.innerText = `Detectamos um homem de ${idade} anos.`
        
        if (idade < 12) {
            img.src = "images/criança_menino.jpg"
        } else if(idade < 50){
            img.src = "images/adulto_homem.jpg"
        } else{
            img.src = "images/idoso.jpg"
        }

    } else{
        msg.innerText = `Detectamos uma mulher de ${idade} anos.`
        img.src = "images/idosa.jpg"

        if (idade < 12) {
            img.src = "images/criança_menina.jpg"
        } else if(idade < 50){
            img.src = "images/adulto_mulher.jpg"
        } else{
            img.src = "images/idosa.jpg"
        }
    }
}