

class Bank{
    constructor(balance){
      this.balance = balance
     
    }
  
    withdraw(amount){
      // guard class 
      if(this.balance -amount <= 0){
        console.log(' 🙅Insufficient Bank Balance')
        console.log({balance : this.balance })
        return
      }
      this.balance -= amount
      console.log('withdraw' ,`$${amount}`)
      console.log({balance : this.balance })
    }
    
    deposit(amount){
      this.balance += amount
      console.log('deposited' , `$${amount}`)
      console.log({balance : this.balance })
    }
}

const qaziChecking = new Bank (0) 
console.log(qaziChecking.balance)


const amountInput = document.getElementById('amount')
const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw')
const balanceDiv = document.getElementById('balance')


depositButton.onclick = () => {
  const amount = Number(amountInput.value)
  qaziChecking.deposit(amount)
  balanceDiv.innerText = `Balance : ${qaziChecking.balance}`
}
withdrawButton.onclick = () => {
  const amount = Number(amountInput.value)
  qaziChecking.withdraw(amount)
  balanceDiv.innerText = `Balance : ${qaziChecking.balance}`

}
