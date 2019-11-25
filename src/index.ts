let hello :string = 'hello'
document.querySelectorAll('.app')[0].innerHTML = hello

function add  (x:number,y:number)  {
    return x + y
}
class Dog {
    constructor(name:string) {
        this.name = name
    }
     protected name:string = 'dog'
     readonly legs :number  = 4
    run(){}
}

console.log(Dog.prototype)

let dog : Dog = new Dog('wsbf')

console.log(Dog.name)
console.log(dog.legs)

class Husky extends Dog {
    constructor(name:string,color:string) {
        super(name)
        this.color = color
        this.name = name
    }
    color :string 
    name :string
    
}
let husky = new Husky("husky",'1')
console.log(husky.name)



