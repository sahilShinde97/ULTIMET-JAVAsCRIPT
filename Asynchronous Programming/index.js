//Asynchronous programming

// Your order 🍅 tomato soup 
// menWhile you continue your convo with a friend
// RESOLVED - Your server brings you soup 
// REJECTED - : No soup today 
/*
const orderSoup = () => console.log('sup is ready')


console.log('You start the convo with your 👧')

// start your request
setTimeout(orderSoup,2000) // 1000ms is 1sec

console.log('still speaking')
*/
/*
const promise1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    isReady = [true , false][Math.floor(Math.random() * 2)]
    isReady ? resolve(' ✅ soup is ready 🥣'): reject(' ❎  No soup Today ')},1000)
})
*/
//console.log(promise1
//  .then(success => console.log({success}))
//  .catch(error => console.log({error}))
//  )

// RESOLVED = if waiter brings you soup
// tip the waiter
// you pay for soup

// REJECTED = leave a bad review ,no tip
const promise1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    isReady = [true , false][Math.floor(Math.random() * 2)]
    isReady ? resolve(' ✅ soup is ready 🥣'): reject(' ❎  No soup Today ')},1000)
})
  const getSoup = async () => {
    // null / undefined
    const data = { rating : 0 ,tip  : 0 ,pay : 0 ,review : 0 }
   try{ 
    const soup = await promise1
    console.log(soup) 
    data.rating = 5
    data.tip = .2
    data.pay = 10
    data.review = 5
    return data
   }catch(error) {
    console.log(error)
    data.rating = 1
    data.tip = 0
    data.pay = 0
    data.review = 1

    return data
   }
  }
getSoup().then(value => console.log(value))
/*
// new add
  console.log('fetch:',
  fetch('https://dog.ceo/api/breeds/image/random')) //promise
// .then(response => response.json())// promise
// .then(data => console.log(data))
  
  //ASYNC / AWAIT
  // Rules for using async / await
  // 1. You must create a function
  const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    
    //const response =  fetch(url).then(response =>)  .then replace with await
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }
  getDog()*/