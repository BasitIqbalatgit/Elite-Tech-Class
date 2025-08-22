// // Function.....

// // function is a keyword
// // adding it is just a name (like variable custome names)
// // function adding(a, b){// parameters list..
// //     console.log("Adding a and b : ") // console statement (just print on console)
// //     return a, b; // the result or final answer that the function will return
// // }

// // adding(1,2)// funciton calling / function invoke , these 1,2 are argument list.
// //2 things are most imp:
// // first one is function definition -> function adding(a, b){}
// // second function calling or invoke -> adding(1,2)
// // types of function:
// function adding1(a,b){
//     return a+b
// }
// let ans=adding1(1,2)
// console.log(ans)
// function adding2(a,b){
//     console.log("a + b : ", a+b)
// }
// adding2(4 , 5)
// // function expression
// let doSomething = function(){
//     console.log("i am an annonemous function")
// }
// doSomething()
// // ES6..
// // fat arrow
// let FatArrowFunc =()=>{
//     console.log("Fat Arrow Function")
// }
// FatArrowFunc()
// // Normal Function
// function greeting(name){
//     console.log("Hello ", name)
// }
// greeting("Ahmed ")

// ;(
//     function(){
//         console.log("Hello guys")
//     }
// )()




// ;(
//     ()=>{
//         console.log("i am a fat arrow function in the circular brackets with on the spot calling")
//     }
// )()


// // callback (higher order function)

// setTimeout(function(){
//     console.log("i am in set time and will run after 5000ms ")       
// }, 5000)




// let gr = function(){
//     return 1
// }
// setTimeout(gr, timeout);





// // factorial 
// // 5! = 5 * 4 * 3 * 2 * 1 = 120
// // recursive function -> those functions that call themselve until their base condition is met
// function fact(n){
//     if (n===1){
//         return 1
//     }

//     return n * fact(n-1)         
// }

// let factOf5 = fact(5)
// console.log("Factorial is : ", factOf5)

// let n=5;
// let answer=1;
// for(let i=1 ; i<=n; i++){
//     answer *=i
// }
// console.log(answer)



// Higher Order Functions: takes or returns another function✅
// CallBacks: ones output will be an input for other and can invoked later in the code✅
// Asyn and sync

function discount(price,discount){
    // price -> rupess (simple number)
    // discount -> percentage
    // price * (discount/100)
    return price * (discount / 100)
}
setTimeout(()=>console.log(discount(100,10)), 2000)
// console.log(discount(1000,2))
console.log("this is the last statement")
console.log("Browse more items")
console.log("add items to cart")
//single page application (that have virtual..)


// 1. CallBack -> CallBack hell
// 2. Promisses -> syntax was very difficult 
// 3. asyc await