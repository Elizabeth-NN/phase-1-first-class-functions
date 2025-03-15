const callback=()=>{
    console.log("this is a callback")
}

function receivesAFunction(callback)
{
    let msg=callback()
    return `HighOrder: ${msg} ,`
}

function returnsANamedFunction(){
    return function add(num1,num2){
        return num1+num2
        
    }
}

function returnsAnAnonymousFunction(){
    return ()=> "returning an anonymous function"
}