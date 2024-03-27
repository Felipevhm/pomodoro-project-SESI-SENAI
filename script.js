const playButton = document.querySelector(".iniciar i");
const counterElement = document.querySelector(".visor p");
const section = document.querySelector('section')
const timerAlongamento = document.querySelector('timer-choose')
const restTime = document.querySelector('.rest-time');
const restPlayButton = document.querySelector('.rest-play-button')
const restStopButton = document.querySelector('.rest-stop-button')
const visorBtn = document.querySelector('.botoes')
const btnStop = document.querySelector('.button-stop')
const stopRandomText = document.querySelector('.stop-random-text')

let countdown;
let timeRemaining = 0.05 * 60; //3 segundos
let restTimeRemaining = 0.05 * 60; //5 minutos


// 125 / 60 = 2
// 125 % 60 = 5 
function updateCounter() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    let secondsFormated;

    if (seconds < 10){
        secondsFormated = `0${seconds}`
    } else{
        secondsFormated = seconds
    }

    if (minutes < 10){
        minutes = `0${minutes}`
    }

    counterElement.innerText = `${minutes}:${secondsFormated}`
}

let noRepeat = [];
let randomNumber;

function toggleTimer() {
    if (playButton.classList.contains("fa-play")) {
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
        if (counterElement.innerText.trim() === "25:00") { //trim remove espaços antes e depois do texto e compara com "25:00"
            timeRemaining = 25 * 60;
        }
        countdown = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateCounter();
            } else if (timeRemaining == 0){
                section.classList.remove('hidden')
                clearInterval(countdown);
                playButton.classList.add('fa-play')
                // let randomNumber;
                // do {
                //     randomNumber = Math.floor(Math.random() * 5)
                // } while(noRepeat.includes(randomNumber))
                // noRepeat.push(randomNumber)
                randomNumber = Math.floor(Math.random() * 5)
                document.querySelector('.alongamento-title').innerText = alongamentoJson[randomNumber].nome;
                document.querySelector('.alongamento-desc').innerText = alongamentoJson[randomNumber].execucao;
                document.querySelector('.img-exercise').style.backgroundImage = `url(${alongamentoJson[randomNumber].img})`;
                playButton.removeEventListener('click', toggleTimer)
                playButton.style.cursor = 'default'
                btnStop.removeEventListener('click', btnStop)
                btnStop.style.cursor = 'default'
            }
        }, 1000);
    } else {
        playButton.classList.add("fa-play");
        playButton.classList.remove("fa-pause");
        clearInterval(countdown);
    }
}

playButton.addEventListener("click", toggleTimer);
updateCounter(); 

function stopCountDown(){
    clearInterval(countdown);
    counterElement.innerHTML = '00:03'
    timeRemaining = 0.05 * 60;

    if (playButton.classList.contains('fa-pause')){
        playButton.classList.remove('fa-pause')
        playButton.classList.add('fa-play')
    }
}

const checkButton = document.querySelector('.check-button')
let isClicked = false;
checkButton.addEventListener('mouseover', () =>{
    if(!isClicked){
        checkButton.classList.remove('fa-circle');
        checkButton.classList.add('fa-circle-check')
    }
})
checkButton.addEventListener('mouseout', () =>{
    if(!isClicked){
        checkButton.classList.remove('fa-circle-check');
        checkButton.classList.add('fa-circle')
    }
})
let countAlongamentos = 0;
let arrayAlongamentos = [];
checkButton.addEventListener('click', () => {
    isClicked = true;
    checkButton.classList.add('fa-circle-check');
    checkButton.classList.remove('fa-circle');
    checkButton.classList.add('fa-solid');
    checkButton.style.color = 'rgba(255, 255, 255, 0.474);'
    section.classList.add('hidden')
    counterElement.innerHTML = "00:03"
    timeRemaining = 0.05 * 60
    checkButton.classList.remove('fa-solid');
    isClicked = false;
    restTime.innerText = '00:03'
    restTimeRemaining = 0.05 * 60;
    playButton.addEventListener('click', toggleTimer)
    playButton.style.cursor = 'pointer'
    btnStop.addEventListener('click', stopCountDown)
    btnStop.style.cursor = 'pointer'
    countAlongamentos++;
    arrayAlongamentos.push({number: randomNumber, nome:alongamentoJson[randomNumber].nome})
    console.log(arrayAlongamentos)
})


function restTimeStart(){
    let restMinutes = Math.floor(restTimeRemaining / 60);
    let restSeconds = (restTimeRemaining % 60)
    
    if(restSeconds < 10){
        restSeconds = `0${restSeconds}`
    }
    if(restMinutes < 10){
        restMinutes = `0${restMinutes}`
    }

    restTime.innerText = `${restMinutes}:${restSeconds}`

    if (restTimeRemaining < 0){
        clearInterval(loopRestInterval)
        restTime.innerHTML = 'finalizado'
        restPlayButton.classList.remove('fa-pause')
        restPlayButton.classList.add('fa-play')
    } else {
        restTimeRemaining--;   
    }
}

let loopRestInterval;

restPlayButton.addEventListener('click', () => {
    restPlayButton.classList.toggle('fa-pause');
    restPlayButton.classList.toggle('fa-play');

    if (restPlayButton.classList.contains('fa-pause')){
        loopRestInterval = setInterval(restTimeStart, 1000)
    } else {
        clearInterval(loopRestInterval)
    }
})

restStopButton.addEventListener('click', () => {
    if(restPlayButton.classList.contains('fa-pause')){
        restPlayButton.classList.remove('fa-pause');
        restPlayButton.classList.add('fa-play');
        restTimeRemaining = 0.05 * 60;
    }
    clearInterval(loopRestInterval);
    restTime.innerHTML = '00:03';
})

const initCount =  0.1* 60;
let count =  initCount // 25 minutos em segundos
// let timerElement = document.getElementById('timer');
let startButton = document.getElementById('startButton');

function updateTimer() {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    visorTimer.innerHTML = minutes + ':' + seconds;
}

// startButton.onclick = function() {
//     let timer = setInterval(function() {
//         count--;
//         updateTimer();
//         if (count <= 0) {
//             clearInterval(timer);
//             count=initCount
//             updateTimer();
//         }
//     }, 1000);
// }