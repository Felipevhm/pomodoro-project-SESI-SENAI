let acc = 0
let startTimer = document.querySelector(".fa-solid")
let visorTimer = document.querySelector('p')

startTimer.addEventListener("click", () => {
  startTimer.classList.toggle("fa-pause")
  startTimer.classList.toggle("fa-play")

if(startTimer.classList.contains("fa-play")){
  console.log("Deu pause")

}
else {
  console.log("Deu play")
let timer = setInterval(function() {
        count--;
        updateTimer();
        if (count <= 0) {
            clearInterval(timer);
            count=initCount
            updateTimer();
        }
    }, 1000);
}

})
let section = document.querySelector("section")
let button = document.querySelector(".fa-child-reaching")

button.addEventListener("click", () => {
  section.classList.toggle("hidden")
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