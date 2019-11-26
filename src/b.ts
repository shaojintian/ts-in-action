/// <reference path="a.ts" />>

namespace Shape{
    export function square(x: number){
        return x * x
    }
}


console.log( Shape.circle(1),Shape.square(1))