let countAlongamentos = document.getElementById("texto");
let elementoTexto = document.getElementById("output");

function saveCounterStates(){
   localStorage.setItem("currentCounter",countAlongamentos.value)
   console.log("Salvo no localStorage, counter: " + countAlongamentos.value)

   localStorage.setItem("currentOffset",countOffset)
   console.log("Salvo no localStorage, offset: " + countOffset)

}

function recoverCounterStates(){
   let storedCounter = localStorage.getItem("ss")  
   console.log("Recuperado do localStorage: " + storedCounter )

   let storedOffset = localStorage.getItem("currentOffset")  
   console.log("Recuperado do localStorage: " + storedOffset )
   
   elementoTexto.textContent = storedCounter

   countAlongamentos = storedCounter
   countOffset = storedOffset
}