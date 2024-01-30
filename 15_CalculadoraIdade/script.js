function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var FAno = document.getElementById('textoano')
    var res = document.querySelector('div#res')

    if (FAno.value.length == 0 || Number(FAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('selectsex')
        var idade = ano - Number(FAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2){
            //Bebe
            img.setAttribute('src', 'BebeMenino.png')
        } else if (idade < 10) {
            //Crianca
            img.setAttribute('src', 'CriancaMenino.png')
        } else if (idade < 18) {
            //Adolescente
            img.setAttribute('src', 'AdolescenteMenino.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'Homem.png')
        } else {
            //Idoso
            img.setAttribute('src', 'HomemIdoso.png')
        }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 2){
                //Bebe
                img.setAttribute('src', 'BebeMenina.png')
            } else if (idade < 10) {
                //Crianca
                img.setAttribute('src', 'CriancaMenina.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'AdolescenteMenina.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'Mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'MulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}
