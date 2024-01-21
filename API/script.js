//https://https/dog.ceo/api/breeds/image/random
// .then - tell about promises
// asynchronous programming

// stuff you don't have to wait for
console.log('run 1st')

const dogImageDiv = document.getElementById('dogImage')

const dogButton = document.getElementById('dogButton')
// stuff you have to wait for
const getNewDog = () => {
fetch('https://dog.ceo/api/breeds/image/random')
.then(Response => Response.json())
.then(json =>  {
  dogImageDiv.innerHTML = `<img src ='${json.message}'height = 300 width = 300/>`
})
} 


dogButton.onclick = () => getNewDog()

console.log('run 3rd')