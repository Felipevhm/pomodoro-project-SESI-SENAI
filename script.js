const playButton = document.querySelector(".iniciar i");
const counterElement = document.querySelector(".visor p");
const btnApper = document.querySelector('.fa-child-reaching');
const section = document.querySelector('section')

let countdown;
let timeRemaining = 25 * 60;

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

const checkButton = document.querySelector('.check-button')
checkButton.addEventListener('mouseover', () =>{
    checkButton.classList.remove('fa-circle');
    checkButton.classList.add('fa-circle-check')
})

checkButton.addEventListener('mouseout', () =>{
    checkButton.classList.remove('fa-circle-check');
    checkButton.classList.add('fa-circle')
})

checkButton.addEventListener('click', () => {
    
    checkButton.classList.add('fa-circle-')
    checkButton.style.color = 'green'
})