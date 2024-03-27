let listaExercicios = []

function getExercises(){
fetch ( 'https://api.api-ninjas.com/v1/exercises?type=stretching&offset=10',
   {method: 'GET',
   headers: {'X-Api-Key' :'1fZ4NS89JhTbeeXvEu8Uhg==zWf7ioezJ86uDQ3u' },
   contentType: 'application/json',


   })
   .then(response => response.json())
   .then(dados => {
   listaExercicios = dados
   })
   .catch(error => console.log(error))
}

getExercises()


setTimeout(() => {
   console.log(listaExercicios)
}, 2000)
