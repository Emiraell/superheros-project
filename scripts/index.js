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
const heroImgStat = document.getElementById('heroImgStats')
const powerstatDiv = document.querySelector('.js-heroInfo')
const heroNameLm = document.getElementById('heroName')


async function getRandomHero () {

  const randomHero = Math.random() * 731
  const herosId = Math.floor(randomHero) + 1
  console.log(herosId)

  const baseUrl = `${apiUrl}/${myAccessToken}/${herosId}`

  let powerstatsEmoji = {
    intelligence : '🧠',
    strength : '📶',
    speed : '🏃',
    durability : '📊',
    power: '🦾',
    combat: '⚔️'
  }
  
  
try {
   let response = await fetch (baseUrl)
   let data = await response.json()
   
   console.log (data)
   
    const heroImage = data.image.url
    let powerStatHtml = ''
    //let heroNamee = data.name
   // console.log(Object.keys(data.powerstats))
    
    Object.keys(data.powerstats).forEach ((stat) => {
      
      powerStatHtml += `<p> ${powerstatsEmoji[stat]} ${stat} : ${data.powerstats[stat]}</p>`
      //console.log(powerStatHtml)
    });
    heroNameLm.innerHTML = data.name
    heroImgStat.innerHTML = `<img src = "${heroImage}" height = 200 width= 200>`
    powerstatDiv.innerHTML = powerStatHtml
    
    
    }
  catch {
    console.log ('error')
  }
}


function searchHero () {
  console.log('serached Hero')
}