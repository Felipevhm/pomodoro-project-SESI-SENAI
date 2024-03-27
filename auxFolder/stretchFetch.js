const apiKey = '1fZ4NS89JhTbeeXvEu8Uhg==zWf7ioezJ86uDQ3u'
console.log(apiKey)

async function getExercises() {

   let options = {
   method: 'GET',
   headers: { 'x-api-key': apiKey }
}
 
   let url =  'https://api.api-ninjas.com/v1/exercises?type=stretching&offset=30'
 

    let data;
    try {
        const response = await fetch(url, options);
        data = await response.json();
    } catch (err) {
        console.log(`error ${err}`);
    }
    return data;
}

// const batata = await getExercises()
// .then(receivedData => {
//     return receivedData;
// });

async function main() {
   const output = await getExercises();
   console.log(output);
}

 main();