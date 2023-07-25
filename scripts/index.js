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

let powerstatsEmoji = {
  intelligence : '🧠',
  strength : '📶',
  speed : '🏃', 
  durability : '📊',
  power: '🦾',
  combat: '⚔️'
}


 async function getRandomHero () {

  const randomHero = Math.random() * 731
  const herosId = Math.floor(randomHero) + 1
  //console.log(herosId)

  const baseUrl = `${apiUrl}/${myAccessToken}/${herosId}`
  
try {
   let response = await fetch (baseUrl)
   let hero = await response.json()
   let superHero = hero
   superHeroRender (superHero)
   
   /* const heroImagee = hero.image.url
    let powerStatHtml = ''
    let profileHtml = ''
    let heroProfile = {
      ['full-name'] : hero.biography['full-name'],
      gender: hero.appearance.gender,
      ['place-of-birth']:hero.biography['place-of-birth'],
      ['first-appearance'] : hero.biography['first-appearance'],
      alignment : hero.biography.alignment,
      height : hero.appearance.height[1],
      weight : hero.appearance.weight[1]
    }
    Object.keys(heroProfile).forEach ((profile) => {
      profileHtml += `<p> ${profile} : ${heroProfile[profile]}</p>`
    });
    
    Object.keys(hero.powerstats).forEach ((stat) => {
      
      powerStatHtml += `
        <p> ${powerstatsEmoji[stat]} ${stat.toLocaleUpperCase()} : ${hero.powerstats[stat]}</p>`
    });
    heroNameLm.innerHTML = hero.name
    heroImgStat.innerHTML = `<img src = "${heroImagee}" height = 200 width= 200>`
    heroProfileDiv.innerHTML = profileHtml
    powerstatDiv.innerHTML = powerStatHtml*/
    
    }
  catch {
    console.log ('error')
  }
  
}



const superHeroRender = (hero) => {

    
     const heroImagee = hero.image.url
     let powerStatHtml = ''
     let profileHtml = ''
     let heroProfile = {
       ['full-name'] : hero.biography['full-name'],
       gender: hero.appearance.gender,
       ['place-of-birth']:hero.biography['place-of-birth'],
       ['first-appearance'] : hero.biography['first-appearance'],
       alignment : hero.biography.alignment,
       height : hero.appearance.height[1],
       weight : hero.appearance.weight[1]
     }
     Object.keys(heroProfile).forEach ((profile) => {
       profileHtml += `<p> ${profile} : ${heroProfile[profile]}</p>`
     });
     
     Object.keys(hero.powerstats).forEach ((stat) => {
       
       powerStatHtml += `
         <p> ${powerstatsEmoji[stat]} ${stat.toLocaleUpperCase()} : ${hero.powerstats[stat]}</p>`
     });
     heroNameLm.innerHTML = hero.name
     heroImgStat.innerHTML = `<img src = "${heroImagee}" height = 200 width= 200>`
     heroProfileDiv.innerHTML = profileHtml
     powerstatDiv.innerHTML = powerStatHtml
 
}


async function searchHero () {

  const heroSearch = document.querySelector('.js-heroInput')
  const baseUrl = `${apiUrl}/${myAccessToken}/search/${heroSearch.value}`
  //console.log(baseUrl)

  
  try {
    let response = await fetch (baseUrl)
    let hero = await response.json()
    let superHero = hero.results[0]

    superHeroRender(superHero)
    heroSearch.value = ''


    
    
     /*const heroImage = hero.results[0].image.url
     //console.log(heroImage)
     let powerStatHtml = ''
     let profileHtml = ''
     let heroProfile = {
       ['full-name'] : hero.results[0].biography['full-name'],
       gender: hero.results[0].appearance.gender,
       ['place-of-birth']:hero.results[0].biography['place-of-birth'],
       ['first-appearance'] : hero.results[0].biography['first-appearance'],
       alignment : hero.results[0].biography.alignment,
       height : hero.results[0].appearance.height[1],
       weight : hero.results[0].appearance.weight[1]
     }
     Object.keys(heroProfile).forEach ((profile) => {
       profileHtml += `<p> ${profile.toUpperCase()} : ${heroProfile[profile]}</p>`
     });
     
     Object.keys(hero.results[0].powerstats).forEach ((stat) => {
       
       powerStatHtml += `
         <p> ${powerstatsEmoji[stat]} ${stat.toLocaleUpperCase()} : ${hero.results[0].powerstats[stat]}</p>`
     });
     heroNameLm.innerHTML = hero.results[0].name
     heroImgStat.innerHTML = `<img src = "${heroImage}" height = 200 width= 200>`
     heroProfileDiv.innerHTML = profileHtml
     powerstatDiv.innerHTML = powerStatHtml*/
     
     }
   catch {
     console.log ('error')
   }
}