document.querySelector('button').addEventListener('click', getAnime)


function getAnime() { 
  fetch(`https://animechan.vercel.app/api/random`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)  
      document.querySelector('h1').innerText = data.anime
      document.querySelector('h2').innerText = data.character
      document.querySelector('h3').innerText = data.quote      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}


