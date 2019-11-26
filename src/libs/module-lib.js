function moduleLib(options){
    console.log('moduleLib')
}

moduleLib.version ='1.0.0'
moduleLib.doSomething = function doSomething(){
    console.log('modulelib doSomething')
}

exports.moduleLib