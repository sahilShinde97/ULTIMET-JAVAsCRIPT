// classes : main topic
// methods
// properties


// this
class Car {
    constructor(name,color,topSpeed){
        //properties
       this.name = name
       this.color = color
       this.topSpeed = topSpeed
       this.currentSpeed = 0;
    }
  // getters and setters
  
    getCurrentSpeed(){
      return currentSpeed
    }
    zeroTOSixty(){
       setTimeout(() => {
        console.log('pHEW! That was fast !')
        this.currentSpeed = 60;
        console.log(this.currentSpeed)
       },3000)
    }

    drive(){
    //  console.log('just drove 2 miles!')
      this.currentSpeed += 10;
      console.log(`driving speed at ${this.currentSpeed}mph`)
    }
    brake(){
      console.log('Braking !')
      this.currentSpeed -= 10;
      
    }
    stop(){
      console.log('coming to a screeching halt !')
      this.currentSpeed = 0;
    }
}
// porsche yellow 250 


const ferrari = new Car('ferrari','red',250)


ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
console.log(ferrari.currentSpeed);
ferrari.brake()
ferrari.stop()
console.log(ferrari.currentSpeed)


//console.log(ferrari.name)
//console.log(ferrari.color)
//console.log(ferrari.topSpeed)
//console.log(ferrari.currentSpeed)
//ferrari.drive()
//ferrari.break()
//console.log(ferrari.currentSpeed)
//ferrari.drive()
//ferrari.drive()
//console.log(ferrari.currentSpeed)
//ferrari.zeroTOSixty()
//console.log(ferrari.currentSpeed)

const porsche = new Car('porsche','yellow',250)

console.log(porsche.name)
console.log(porsche.color)
console.log(porsche.topSpeed)
const numbers = [1,2,3,4,5]
.forEach(_ => porsche.drive())
porsche.zeroTOSixty()
porsche.stop()
console.log(porsche.currentSpeed)

