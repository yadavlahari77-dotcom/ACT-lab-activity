// lab act 1
// Set up a JavaScript project and debug a sample program.
let num1 = 3
let num2 = 5
let Ans = num1+num2
console.log(ans)
// after debug
let num1 = 3
let num2 = 5
let ans = num1+num2
console.log(ans)

// lab act 2
// • Perform calculations using JavaScript operators
let num1 = 3
let num2 = 5
let add = num1+num2
console.log(add)
let sub = num1-num2
console.log(sub)
let mul = num1*num2
console.log(mul)
let div = num1/num2
console.log(div)

// lab act 3
// let ans = Math.round(Math.random()*5+1);
// console.log(ans);

// lab act 4
// Use a nested function to generate a random number, understanding scope and closures.

// lab act 5
// Manipulate arrays dynamically by performing operations like map(),
// filter(), and reduce()
// let arr = [4 , 8 , 1 , 6, ]
// let mAp = arr.map((el)=>{
//     return el+2
// })
// console.log(mAp);
// let fIlter = arr.filter((el)=>{
//     return el>2
// })
// console.log(fIlter);
// let rEduce = arr.reduce((max,el)=>{
//     return max+el
//  })
//  console.log( rEduce);

// lab act 6
// Reverse a string without built-in methods.
// let str = "lahari"
// let newStr=""
// for(i=str.length-1 ; i>=0 ; i--){
//     newStr += str[i]
//     }
//     console.log(newStr)

// lab act 7
// Check if a given string is a palindrome.
// let name = "HANNAH"
// function isPalindrome(){
//     for(i=0 ;i<name.length/2;i++){
//     if(name[i]!== name[name.length-1-i]){
//         console.log("!palindrome")
//         return
//     }
// }
// console.log("isPalindrome")

// }

// lab act 8
// Debug string operations by finding length, concatenating, and
// manipulating strings.

// let str = "lahari";
// let length = str.length;
// let concat = str + " " + "yadav";
// console.log(concat);
// let str1 = str[0].toUpperCase()
// console.log(str1 + "ahari" +" " + "yadav" );


// lab act 9
// Create and update objects dynamically by implementing a constructor
// function.
// function Students(a , b ,c){
//     this.name=a,
//     this.age=b,
//     this.city=c

// }

// let s1 = new Students("lahari" , 18 , "hyd")
// // console.log(s1);

// let newObj = {...s1}
// console.log(newObj)


// lab act 10
// • Create a dynamic shopping list by adding/removing items using the
// DOM.
let ol = document.querySelector(".ol")
let  li = document.createElement(li);
li.textContent = "Orange";
ol.appendChild(li);


// lab act 11
// • Modify DOM properties dynamically to change text, background
// color, and visibility.

let head = document.querySelector('.yellow')
head.style.color = "yellow"
