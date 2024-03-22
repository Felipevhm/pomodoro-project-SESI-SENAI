const playButton = document.querySelector(".iniciar i");
const counterElement = document.querySelector(".visor p");
const btnApper = document.querySelector('.fa-child-reaching');
const section = document.querySelector('section')
const checkBtn = document.querySelector('.check-button')
const timerAlongamento = document.querySelector('timer-choose')

let countdown;
let timeRemaining = 0.05 * 60;

function updateCounter() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    counterElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function toggleTimer() {
    if (playButton.classList.contains("fa-play")) {
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-pause");
        if (counterElement.textContent.trim() === "25:00") {
            timeRemaining = 25 * 60;
        }
        countdown = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateCounter();
            } else if (timeRemaining == 0){
                section.classList.remove('hidden')
            } else {
                clearInterval(countdown);
            }
        }, 1000);
    } else {
        // Pausar o contador
        playButton.classList.add("fa-play");
        playButton.classList.remove("fa-pause");
        clearInterval(countdown);
    }
}

playButton.addEventListener("click", toggleTimer);
updateCounter(); 

btnApper.addEventListener('click', () => {
  section.classList.toggle('hidden')
})

let BtnStop = document.querySelector('.button-stop')
BtnStop.addEventListener('click', () => {
    clearInterval(countdown);
    counterElement.innerHTML = '0:03'
    timeRemaining = 0.05 * 60;

    if (playButton.classList.contains('fa-pause')){
        playButton.classList.remove('fa-pause')
        playButton.classList.add('fa-play')
    }
})

const checkButton = document.querySelector('.check-button')
let isClicked = false;
checkButton.addEventListener('mouseover', () =>{
    if(!isClicked){
        checkButton.classList.remove('fa-circle');
        checkButton.classList.add('fa-circle-check')
        timerAlongamento.classList.add('bg-finished-alongamento')

    }
})
checkButton.addEventListener('mouseout', () =>{
    if(!isClicked){
        checkButton.classList.remove('fa-circle-check');
        checkButton.classList.add('fa-circle')
    }
})
checkButton.addEventListener('click', () => {
    isClicked = true;
    checkButton.classList.add('fa-circle-check');
    checkButton.classList.remove('fa-circle');
    checkButton.classList.add('fa-solid');
    checkButton.style.color = 'rgba(255, 255, 255, 0.474);'

    section.classList.add('hidden')
    counterElement.innerHTML = "0:03"
    timeRemaining = 0.05 * 60
    checkButton.classList.remove('fa-solid');
    isClicked = false;
})