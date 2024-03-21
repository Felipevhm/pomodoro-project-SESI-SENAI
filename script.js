let startTimer = document.querySelector(".fa-solid")

startTimer.addEventListener("click", ()=>{

  startTimer.classList.toggle("fa-pause")
  startTimer.classList.toggle("fa-play")
})

let section = document.querySelector("section")

let button = document.querySelector(".fa-child-reaching")

button.addEventListener("click", ()=>{
 section.classList.toggle("hidden")


}
)

