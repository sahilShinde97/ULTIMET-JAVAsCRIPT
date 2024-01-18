

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
