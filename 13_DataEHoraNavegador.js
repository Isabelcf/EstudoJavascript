var DiaAgora = new Date()
var DiaSemana = DiaAgora.getDay()
var HoraAgora = DiaAgora.getHours()

switch(DiaSemana) {
    case 0: 
    console.log(`Hoje é Domingo e são ${HoraAgora} hora`)
    break

    case 1: 
    console.log(`Hoje é Segunda e são ${HoraAgora} hora`)
    break

    case 2: 
    console.log(`Hoje é Terça e são ${HoraAgora} hora`)
    break

    case 3: 
    console.log(`Hoje é Quarta e são ${HoraAgora} hora`)
    break

    case 4: 
    console.log(`Hoje é Quinta e são ${HoraAgora} hora`)
    break

    case 5: 
    console.log(`Hoje é Sexta e são ${HoraAgora} hora`)
    break

    case 6: 
    console.log(`Hoje é Sábado e são ${HoraAgora} hora`)
    break

    default: 
    console.log('Erro: dia Inválido, teste novamente')
    break
}



