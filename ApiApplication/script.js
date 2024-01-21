
// https://superheroapi.com/api/access-token/character-id

const newHeroButton = document.getElementById('newHeroButton');
const HeroImageDiv = document.getElementById('HeroImage');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const SUPERHERO_TOKEN = '296311006754702' ;
const BASE_URL =`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.powerstats);
      const superHero = json
      showHeroInfo(superHero)
    });
};
const statToEmoji = {
  intelligence : '🧠',
  strength : '💪',
  speed: '⚡',
  durability:'🏋️',
  power: '📊',
  combat: '⚔️',
}

const showHeroInfo = (character) =>{
  const name = `<h2 style="white-space: nowrap;">Name: ${character.name}</h2>`
  
 const stats = Object.keys(character.powerstats).map(stat => {
  return `<P>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
 }).join('')

 const img = `<img src="${character.image.url}" height="200" width="200"/> ${stats}`;

 //console.log(stats.join(''))
 console.log(name)

 HeroImageDiv.innerHTML = `${name} ${img} ${stats}`;
 
}

const getSearchSuperHero = (name) =>{
  console.log(searchInput.value)
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    showHeroInfo(hero);
  })
};

const RandomHero = () =>{

  const numberOfHeros = 731;
 return Math.floor(Math.random()*numberOfHeros) + 1;
};

newHeroButton.onclick = () => getSuperHero(RandomHero());
searchButton.onclick = () =>
getSearchSuperHero(searchInput.value)



