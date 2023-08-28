let contador = 0
let res = document.querySelector('section#result')
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

function contar() {
    contador ++ /*É a mesma coisa que contador = contador + 1 . Esse contador é utilizado em situações em que precisamos
    que seja acrescentado sempre um número a frente do atual*/
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}
