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
  const baseUrl = `${apiUrl}/${myAccessToken}/${herosId}`
  
try {
   let response = await fetch (baseUrl)
   let hero = await response.json()
   let superHero = hero

   superHeroRender (superHero) 
  }
  catch {
    console.log ('error')
  } 
}

const superHeroRender = (hero) => {
  
  const heroImage = hero.image.url;
  let powerStatHtml = '';
  let profileHtml = '';
  
  heroNameLm.innerHTML = hero.name;
  heroImgStat.innerHTML = `<img src = "${heroImage}">`
  
  let heroProfile = {
    ['full-name']: hero.biography['full-name'],
    gender: hero.appearance.gender,
    ['place-of-birth']: hero.biography['place-of-birth'],
    ['first-appearance']: hero.biography['first-appearance'],
    alignment : hero.biography.alignment,
    height: hero.appearance.height[1],
    weight: hero.appearance.weight[1]
  };

  Object.keys(heroProfile).forEach ((profile) => {
    profileHtml += `<p> <strong>${profile.toLocaleUpperCase()}</strong> : ${heroProfile[profile]}</p>`
    heroProfileDiv.innerHTML = `
      <h3> HERO PROFILE </h3>
      ${profileHtml}`
  });
  
  Object.keys(hero.powerstats).forEach ((stat) => {
    
    powerStatHtml += `
      <p> ${powerstatsEmoji[stat]} <strong>${stat.toLocaleUpperCase()}</strong> : ${hero.powerstats[stat]}</p>`;
      powerstatDiv.innerHTML = `
        <h3> HERO ABILITIES </h4>
        ${powerStatHtml}`
  });
  
}


async function searchHero () {
  
  const heroSearch = document.querySelector('.js-heroInput')
  const baseUrl = `${apiUrl}/${myAccessToken}/search/${heroSearch.value}`

  try {
    let response = await fetch (baseUrl)
    let hero = await response.json()
    let superHero = hero.results[0]

    superHeroRender(superHero)
    heroSearch.value = ''
  }
  catch {
    console.log ('error')
  }
  
}