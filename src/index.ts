//let hello :string = 'hello'
//document.querySelectorAll('.app')[0].innerHTML = hello








import Vue from 'vue'
import hello from './components/hello.vue'

let app1 = new Vue({
    el:'.app',
    components: {
        hello
    },
    template:`<hello/>`
})


