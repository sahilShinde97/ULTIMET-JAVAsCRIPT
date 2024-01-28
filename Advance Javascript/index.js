

// *** While loops***


// for loops --> when you are KNOW how many times you want to loop
// While loop --> When you are NOT sure how many times you want to loop 

let finished = true
while (finished == true) {
  console.log('looping')
  finished = false
}

// ** addEventListener **


// DOM -> document object model

let playDiv = document.getElementById('play')

//playDiv.onclick = () =>{
//  console.log("yo yo")
//}

//playDiv.addEventListener('click',function(){
//  console.log("hello buddy")
//})

document.addEventListener('keydown',function(e){
  if (e.key == "q") {
    console.log('You pressed Q')
    document.getElementById('Punch').play()
  }else if(e.key =="p"){
    console.log('you pressed P')
    document.getElementById('Punchs').play()
  }else{
    console.log('Not Q')
  }
  
})


// ** <audio> Tag

