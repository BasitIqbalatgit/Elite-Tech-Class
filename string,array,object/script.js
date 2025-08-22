// String, Array, Objects.....

// let name="BASIT"

// console.log("My name is ", name, " and i was of comsats")// break , use the variable, then again contine..
// console.log(`My name is ${name} and i was student of comsasts`) // string interpolation.


// let name = ""
// console.log("this is ", name)
// let firstName = new String("Basit ")
// console.log(" thi is also a emty ", firstName[4], " and is")

//Escape Sequence
// console.log(' This isn\'t my car')

// let name= 'isn\'t'
// let fnmae = new String('isn\\t')

// console.log(name.length)
// console.log(fnmae)

//Strings are immutable p
// let str = "Hello World"

// str[3]= 'G'
// console.log(str[3])

// let str = new String("Hello\\ World Hello World")
// console.log(str)
// str.toUpperCase(), toLowerCase(), str.cocat(str2), str.charAt(index)
// str.trim()
// console.log(str.indexOf('b'))

// console.log(str.includes("b"))
// console.log( str.replaceAll("Hello", "by"))
// console.log(str.slice(6,11))
// console.log(str.split(" "))
// let nam='ba'
// console.log(typeof nam)

// C++ java..--> group of similar elements.
// java gruop of elements

let item=["red", 1,1.1, true, 'A']
// console.log(item)


// console.log(typeof name)

//push() -> change original array 

// ret= item.push("I am good","hilo")
// console.log(item)
// // pop()
// ele = item.pop()
// console.log(ele, item)
// // unshift() shift()
// item.unshift("hi")
// console.log(item)

//splice

// item.splice(1,1,"hl")
// console.log(item)

// itm = item.slice(1,4)
// console.log(itm )
// item2 = item.concat(itm)
// console.log(item2)

//  let superheros =  new Array("Spider man", "IRon Man", "captain","superman")
//  str = superheros.toString().toLowerCase().split(",").sort() 
//  console.log(str)


 //  console.log(names)
 
 // for(let i = 0;i<names.length;i++){
    //     console.log(names[i])
    // }
    
    
    //  merge , insertion,-->sort ()

// map, filter, reduce, forEach


// let nums = [1,2,3]
// let double = nums.map(n=>n*2)

// console.log(nums)
// console.log(double)


//filter()
// let numbers=[1,2,3,4]
// let evens = numbers.filter(num => num %2 ==0)

// console.log(numbers)
// console.log(evens)


// // forEach..

// let againNubmer = [1,2,3,4,5,6]

// againNubmer.forEach(n=>(console.log(n*2)))

// Higher Order FUnction--> takes arguments other functions
// callback function --> the func that is passed as am arg .. 

// 3 works
// 1. takes all elements and reduce them to single value
// 2. call back (function)
// 3. value 

// Array.reduce((accumlator,currentValue, index, array),initialValue)

// let nums = [1,2,3,4,5]

// console.log(nums)
// let result = nums.reduce((acc, curr, index, array)=>{
//     console.log(`Sep ${index + 1}`)
//     console.log(`Acc (acc): ${acc}`)
//     console.log(`Current Value (curr): ${curr}`)
//     console.log(`Index : ${index}`)
//     console.log(`Array : ${array}`)
    
//     console.log("=======================================")
//     return acc + curr
// }, 0)


// console.log(result)



// Object..._ classes objects ...  collection of key value pairs ..


// literal .. 
// let car = {
//     brand : "Toyota",
//     color: "red", 
//     speed: "120",
//     // these 3 are the properties/ attributes.

//     drive: function(){
//         console.log("Driving the Car")
//     }
// }

// let car2 = new Object()
// car2.brand="Honda."


// console.log(car)

// // Accessing the Object
// // 1 . Dot Notation.
// console.log(car.drive())

// let person={
//     "full name": "BASIT IQBAL",
//     reg : "FA21-BSE-050"
// }
// // 2. Bracket Notation  (useful when we have variables or special character or string format)
// console.log(person["full name"])

// console.log(person)
// person["full name"] = "Ahmed "
// person.reg= "FA21-BCS-0001"
// console.log(person)


// delete person.reg
// console.log(person)


// let obj={
//     fname:"BASIT IQBAL",
//     greet: function(){
//         console.log("Hello ", this.fname)
//     }
// }

// obj.greet()

// 3imp methods;

// let car = {
//     brand : "Toyota",
//     color: "red", 
//     speed: "120",
//     // these 3 are the properties/ attributes.

//     drive: function(){
//         console.log("Driving the Car")
//     }
// }

// //Destructing...
// function displaying (obj){
//     // Destructuring
//     const {brand, color, speed,drive} = obj;


//     console.log("Brand : ", brand)
//     console.log("Brand : ", color)
//     console.log("Brand : ", speed)
//     drive()
// }

// displaying(car)


// let arr = [1,2,3,4,5]
// const [second, first ,third] = arr
// console.log(first)
// console.log(second)
// console.log(third)

// console.log(Object.keys(car))
// Object.keys(car).forEach(element => {
//     console.log(car[element])
// });


// Object.values(car).forEach(e=>{
//     console.log(e)
// })


// itm=Object.entries(car)
// console.log(itm)

// itm.forEach((e,i)=>{
//     console.log(` ${e[0]}  : ${e[1]} at index ${i}`)
// })



// let person ={
//     name: "BASIT ",
//     age: 22,
//     eat: function(){
//         console.log("Eat")
//     }
// }

// let person2 ={
//     fname: "ahsan",
//    eeat: function(){
//     console.log("i am eating")
//    }
// }

// // console.log(...person)

// merging
// const mergeObj = {...person, ...person2}
// console.log(mergeObj)

// // cloning..
// let person3 = {...person}

// person.reg="FA21-BSE-050"

// console.log(person)
// console.log(person3)


// // properties ading
// let person4 = {...person, department:"CS"}
// console.log(person4)



// let obj={
//     ["key name"]: "BASIT Iqbal"
// }

// console.log(obj["key name"])















// Dom Manipulation....


// how to access html 
// 3 ways...
// p=document.querySelector("#js")
// p=document.getElementById("js")
// p= document.getElementsByClassName("js")
// console.log(p[0].innerHTML)
// console.log(p[0].innerText)
// console.log(p[0].textContent)

// p[0].style.backgroundColor="green"


// // console.log(p[0].getAttribute('style'))

// // p[0].setAttribute('style', 'background-color : purple')

// p = document.querySelector("p")
// div = document.querySelector("div")

// span = document.createElement('span')
// span.innerHTML = "Span is here."
// div.before(span)
// div.after(span)
// div.append(span)
// div.prepend(span)
// console.log(div.childNodes)
// console.log(div.children)

// // div.insertAdjacentElement("afterend",span)


// div.addEventListener('click', (event)=>{
//     console.log(event)
// })


// document.querySelector("section").addEventListener('click',function(event){
//     console.log(event)
//     this.style.backgroundColor="red"
//     this.style.borderRadius="100%"
//     this.style.transform="translateX(800px)"
//     this.style.transitionDelay="1s"
//     this.style.transitionTimingFunction="ease"
//     this.style.transitionDuration= "4s"
// })







box = document.querySelector("#box")
inputColor = document.querySelector("#inputColor")
btn = document.querySelector("#btn")
random = document.querySelector("#btn2")


randomColor=()=>{
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    box.style.backgroundColor= `rgb(${r}, ${g}, ${b})`
    
}

colorChaning=()=>{
    col = inputColor.value;
    box.style.backgroundColor= col
    
}



btn.addEventListener('click',colorChaning)
btn2.addEventListener('click',randomColor)