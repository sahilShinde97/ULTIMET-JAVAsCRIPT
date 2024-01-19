/*console.log('hello');

let title = 
document.getElementById('title');

console.log('before :',title.innerText)
let massage = 'Goodbye my lover !'

title.innerText = massage;

console.log('after :' , title.innerText)

title.innerHTML = `<p> ${massage}  </p>`

title.style.color = 'red';

title.style.backgroundColor = 'Yellow';
//************************************

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

/*
redDiv.onclick = () => {
  console.log('red')
  // getComputerChoice => 'paper'
  // userChoice vs computerChoice => result
  // -1 , 0 , 1
  // show everything on (DOM)
} 

yellowDiv.onclick = () => console.log('Yellow')
greenDiv.onclick = () => console.log('Green')
*/
const squares = document.querySelectorAll('.colorSquare')
//console.log(squares)

//console.log(squares[0].value)

// forEach loop 
const timesClicked = {'red': 0, 'yellow': 0 ,'green' : 0,}
squares.forEach(square => {
  square.onclick = () =>{
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value]
    
  }
})

function clearScores(){
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach(square => {
    square.innerText = '';
  })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()


// select random number in an array
// random fruit [1,2] = 1
// random fruit [1,2] = 2
/*
const randomFruit = (fruits) => {
  const randomNumber = Math.floor(Math.random() * fruits.length);
  
  console.log(randomNumber)

  return fruits[randomNumber];
}
  // fruits = ['🍌' , '🍎' , '🍊' , '🍐'];
  // console.log(randomFruit(fruits));
*/


// if else if else
const weatherScore = (weather , weather2) => {

  let score 

  if(weather == 'rainy' && weather2 == 'overcast'){
     score = 2;
  }
  else if(weather == 'rainy'){
    score = 1;
  }
  else if(weather == 'sunny'){
    score = -1;
  }
  else{
    score = 0;
  }
  return score;
}
console.log(weatherScore('rainy','sunny'))


const rockPaper = (computer , player) => {

  let score

  if(computer == 'rock' && player == 'paper')
  {
    score = 'computerWon'
  }
  else if(computer == 'rock' && player == 'scissors')
  {
    score = 'computerWon'
  }else{
      score = 'Tie'
}
return score
}
console.log(rockPaper('rock','scissors'))