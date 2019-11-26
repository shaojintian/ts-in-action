//let hello :string = 'hello'
//document.querySelectorAll('.app')[0].innerHTML = hello








import Vue from 'vue'


let app1 = new Vue({
    el:'.app',
    data: {
        name:"Ts@sjr"
    },
    template:`<h1>hello {{name}}</h1>`
})


