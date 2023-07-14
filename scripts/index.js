document.getElementById('heroSearch')
.addEventListener('click', () => {
  searchHero ();
})

document.getElementById('randomHero')
.addEventListener('click', () => {
  getRandomHero ();
})

function searchHero () {
  console.log('serached Hero')
}

function getRandomHero () {
  console.log('Got random Hero')
}