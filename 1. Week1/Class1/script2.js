// ✅ The typeof Operator
// Used for type checking:

// console.log(typeof "hello"); // string
// console.log(typeof 42);      // number
// console.log(typeof true);    // boolean
// console.log(typeof null);    // object (quirk)
// console.log(typeof undefined); // undefined
// console.log(typeof [1,2]);     // object
// console.log(typeof function(){}); // function


// let name=null;
// console.log(typeof name)


// Arthimatic Operators
// let a=10;
// let b=3;
// console.log(a + b)
// console.log(a -b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(a ** b)

// // Assignment Operators
// let x = 5;
// x +=3;
// x-=2;
// x*=4;
// x/=5;

// // Comparison Operators
// console.log(5 != '5') // false
// console.log(5 !== '5')// true
// console.log(5 == '5')// true
// console.log(5 === '5')// false

// // Logical Operators && || !
// let a= true
// let b = false

// console.log(a || b)// if the first operator is true in OR it wont check the otehr operator
// console.log(a && b)// if the first operator is false then it wont check the other operator


// let isLogged = false;
// let isAdmin = true;

// if(isLogged && isAdmin){
//     console.log("Dashboard of Admin")
// }
// else{
//     console.log("Dashboard of normal user")
// }


// ternary operator
// let num = 11
// console.log(num % 2 === 0 ? 'Even' : 'Odd')


// Conditional Statement
// let day = '4';  // ===  ==
// switch(day){
//     case 1: 
//         console.log("Monday")        
//     case 2: 
//     console.log("Tuesday")
//     break
//     case 3: 
//     console.log("Wednesday")
//     break
//     case 4: 
//     console.log("Thrusday")
//     break
//     case 5: 
//     console.log("Firday")
//     break
//     case 6: 
//     console.log("Saturday")
//     break
//     case 7: 
//     console.log("Sunday")
//     default: 
//     console.log("not a day")
// }
// 0 is for false all the nubmer have value true
for(let i='0'; i< 5 ; i=i+1){// i++ => i = i+1 ==> 012
// i = '0'  => '0'<5 (0 is converted to number and then compared which will yield true)
    if(5){
        console.log("this value")
        continue
        console.log("is from database")
    }
}

// let score = 80
// if ( score > 85){
//     console.log("4")
// }
// else if(score> 80){
//     console.log("3.7")
// }
// else if(score> 76){
//     console.log("3.3")
// }
// else if(score> 70){
//     console.log("3.00")
// }
// else if(score> 65){
//     console.log("2.7")
// }

//Loops (3 loop while , do while , for)
// initilization, condition, changing value
// while
// let i = 1;// initilization
// while(i<=5){ //condition
//     console.log("*")
//     i++;// changing value
// }

// do while
// let i = 7;
// do{
//     console.log("*")
//     i++;
// }while(i<=5);

// for loop
// for (let i =1; i<=5;i++){
//     console.log("*")
// }


// break and continue
// for(let i =1; i<=5; i++){
//     if(i<4) continue
//     console.log("value of i is : "+ i)// database sy items fetch
    
// }


// let num = '2'
// let ans = num % 2 === 0 ? "Even" : "ODD"
// console.log(ans)

// let ans  = '5' % 4
// console.log(ans , " and its type is " , typeof ans)

// let name = 1
// name = 'BASIT'


// function greet(){
//     console.log("hello")
// }
// function greetByname(name){
//     console.log("hello ", name)
// }
// greet()
// greetByname("BASIT")


console.log(typeof null == 'object')