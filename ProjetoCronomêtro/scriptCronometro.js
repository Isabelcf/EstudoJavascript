const tempo = document.getElementById("tempo");
const marca = document.getElementById("listamarcacao");
/*abaixo usamos let pois são variáveis que vão mudar de valor*/ 
let intervaloID = 0;
let timer = 0; 
let marcacao = [];

const formatTime = (time) => {
    /*Basicamente a const, ou seja a variável do tempo abaixo serve para chamar a função Math.floor() que serve para arredondar um número para o menor inteiro mais próximo. Por exemplo, Math.floor(x) retorna o menor número inteiro dentre o número "x". Dentro da função eu vou passar o tempo, e pegar o resto desse tempo por 360000, esse valor nós dividimos no caso de minutos por 6000 e segundos por 100*/
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`
}

const toggleTimer = () => {
    const button = document.getElementById('StartPause');
    const action = button.getAttribute('action');

    clearInterval(intervaloID);

    if (action == 'start' || action == 'continue') {
        intervaloID = setInterval(() => {
            timer += 1;
            setTimer(timer)
        }, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<span class="material-icons">pause</span>';
    } else if (action == 'pause') {
        button.setAttribute('action', 'continue');
        button.innerHTML = '<span class="material-icons">play_arrow</span>';
    }


}

const setTimer = (timeValue) => {
    tempo.innerText = formatTime(timeValue);
}

document.getElementById('StartPause').addEventListener('click', toggleTimer);