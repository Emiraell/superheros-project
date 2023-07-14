document.getElementById('heroSearch')
.addEventListener('click', () => {
  searchHero ();
})

document.getElementById('randomHero')
.addEventListener('click', () => {
  getRandomHero ();
})

const apiUrl = 'https://superheroapi.com/api.php'
const myAccessToken = '2480652435442335'

function getRandomHero () {
  const randomHeroId = Math.random() * 731
  const heroId = Math.floor(randomHeroId) + 1
  console.log(heroId)
  const baseUrl = `${apiUrl}/${myAccessToken}/${heroId}`

  fetch(baseUrl)
  .then(response => response.json())
  .then(json => {
    
    console.log (json)
  })
  
  console.log('Got random Hero')
}


function searchHero () {
  console.log('serached Hero')
}