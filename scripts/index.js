document.getElementById('heroSearch')
.addEventListener('click', () => {
  searchHero ();
});

document.getElementById('randomHero')
.addEventListener('click', () => {
  getRandomHero ();
});

const apiUrl = 'https://superheroapi.com/api.php';
const myAccessToken = '2480652435442335';
const heroDiv = document.getElementById('heroDiv');

let powerstatsEmoji = {
  intelligence : '🧠',
  strength : '📶',
  speed : '🏃', 
  durability : '📊',
  power: '🦾',
  combat: '⚔️'
};

 async function getRandomHero () {

  const randomHero = Math.random() * 731;
  const herosId = Math.ceil(randomHero);
  const baseUrl = `${apiUrl}/${myAccessToken}/${herosId}`;
  
try {
   let response = await fetch (baseUrl);
   let hero = await response.json();
   let superHero = hero;

   superHeroRender (superHero); 
  }
  catch {
    heroDiv.innerHTML = `
    <p style = "color: white;">
      <strong>Error</strong>: <i> couldn't fetch hero</i>
     </p>`;
    setTimeout (() => {
      heroDiv.innerHTML = '';
    },2000);
  } 
};

const superHeroRender = (hero) => {
  
  const heroImage = hero.image.url;
  let powerStatHtml = '';
  let profileHtml = '';
  
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
    profileHtml += `
    <p>
      <strong>
        ${profile.toLocaleUpperCase()}
      </strong> : ${heroProfile[profile]}
    </p>`;
  });
  
  Object.keys(hero.powerstats).forEach ((stat) => {
    
    powerStatHtml += `
      <p> ${powerstatsEmoji[stat]} 
        <strong>
          ${stat.toLocaleUpperCase()}
        </strong> : ${hero.powerstats[stat]}
      </p>`;
  });
  
  heroDiv.innerHTML = `
  <h2 id="heroName" class="heroName">${hero.name}</h2>
  <div class="profileDiv" >
    <div id="heroImgStats" class="heroImg-stat js-heroImg-stat">
      <img src = "${heroImage}">
    </div>
    <div id="heroProfile" class="js-heroProfile heroProfile">
      ${profileHtml}
    </div>
  </div>
  <div id="heroInfo" class="heroInfo js-heroInfo">
    ${powerStatHtml}
  </div>`;
};

async function searchHero () {
  
  const heroSearch = document.querySelector('.js-heroInput');
  const baseUrl = `${apiUrl}/${myAccessToken}/search/${heroSearch.value}`;

  try {
    let response = await fetch (baseUrl);
    let hero = await response.json();
    let superHero = hero.results[0];

    superHeroRender(superHero);
  }
  catch {
    heroDiv.innerHTML = `
    <p style = "color: white;">
      <strong> Name error </strong>: <i>No hero with the above name</i>
    </p>`;
    setTimeout (() => {
      heroDiv.innerHTML = '';
    },2000);
  }
  heroSearch.value = '';
};