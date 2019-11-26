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


let c = (...args: number[]) => {
    args.forEach(arg =>{
        console.log(arg)
    })
}

let list : number[] = [1,2,3]

let l2 : number =2

let f = () => ({name:'a'})

let x : string | number  = 1
if (typeof x === 'string') {

}else{
    x.toFixed(2).length
    
}





let obj = {
    a : 1,
    b : 2,
    c : 3
    
}

function getValues<T,K extends keyof T>(obj:T,keys:K[]):T[K][]{
    return keys.map(key => obj[key])
}

console.log(getValues(obj,['a']))
console.log(getValues(obj,['b','c']))

interface obj{
    a: number
    b: number
    c: number
}


type ReadonlyObj = Readonly<obj>


//namespace

















