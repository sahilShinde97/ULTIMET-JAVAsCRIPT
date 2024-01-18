

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

redDiv.onclick = () => {
  console.log('user chose : Rock')
  // getComputerChoice => 'paper'
  // userChoice vs computerChoice => result
  // -1 , 0 , 1
  // show everything on (DOM)
} 

yellowDiv.onclick = () => console.log('Yellow')
greenDiv.onclick = () => console.log('Green')

const squares = document.querySelectorAll('.colorSquare')
console.log(squares)

console.log(squares[0].value)