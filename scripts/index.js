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
const heroProfileDiv = document.querySelector('.js-heroProfile')


async function getRandomHero () {

  const randomHero = Math.random() * 731
  const herosId = Math.floor(randomHero) + 1
  //console.log(herosId)

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
   
   
   //console.log (data)
   /*console.log(data.biography['full-name'])
   console.log(data.biography['place-of-birth'])
   console.log(data.appearance.gender)
   console.log(data.appearance.height[1])
   console.log(data.appearance.weight[1])
   console.log(data.biography.alignment)
   console.log(data.biography['alter-egos'])*/
   //data.biography.aliases.forEach((person) => {console.log(person += '' )})
   
    const heroImage = data.image.url
    let powerStatHtml = ''
    let profileHtml = ''
    let heroProfile = {
      ['full-name'] : data.biography['full-name'],
      gender: data.appearance.gender,
      ['place-of-birth']:data.biography['place-of-birth'],
      ['first-appearance'] : data.biography['first-appearance'],
      alignment : data.biography.alignment,
      height : data.appearance.height[1],
      weight : data.appearance.weight[1]
    }
    Object.keys(heroProfile).forEach ((profile) => {
      profileHtml += `<p> ${profile} : ${heroProfile[profile]}</p>`
      //console.log(profileHtml)
    });
    //let heroNamee = data.name
   // console.log(Object.keys(data.powerstats))
    
    Object.keys(data.powerstats).forEach ((stat) => {
      
      powerStatHtml += `
        <p> ${powerstatsEmoji[stat]} ${stat.toLocaleUpperCase()} : ${data.powerstats[stat]}</p>`
      //console.log(powerStatHtml)
    });
    heroNameLm.innerHTML = data.name
    heroImgStat.innerHTML = `<img src = "${heroImage}" height = 200 width= 200>`
    heroProfileDiv.innerHTML = profileHtml
    powerstatDiv.innerHTML = powerStatHtml
    
    
    
    
    }
  catch {
    console.log ('error')
  }
}


function searchHero () {
  console.log('serached Hero')
}