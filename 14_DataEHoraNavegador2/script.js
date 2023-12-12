
function carregar() {
    var mds = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    mds.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
       //BOM DIA!
        img.src = 'Manha.png'
        document.body.style.background = '#da9e55'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b6d6f2'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#151618'
    }
}

