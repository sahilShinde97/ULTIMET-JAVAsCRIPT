console.log('hello');

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