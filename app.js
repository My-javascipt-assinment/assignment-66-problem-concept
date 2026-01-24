/*==================================== Question No 1 =========================================
find missing number from array
======================================= Answer =====================================*/
// let arr = [1,3,4,5,6,7,8];
// let missingNumber = '';
// for(let i = 1 ; i <=8;i++){
// if(arr.indexOf(i) === -1){
//     // console.log(i)
//     missingNumber = missingNumber + i
// }
// }

// console.log(missingNumber)

/* let arr = [1,3,4,5,6,7,8];
let missing = '';
for(let i = 1; i <= 8; i++){
    if(arr.indexOf(i) == -1){
        // console.log(i);
        missing = missing + i
    }
}

console.log(missing)
 */


/* let arr = [1,3,4,5,6,7,8];
let missing = '';
function finder(array){
    for(let i = 1;i<= 8;i++){
        if(array.indexOf(i) == -1){
            missing = missing + i
        }

    }
     
}
finder(arr)
console.log(missing)*/


/*==================================== Question No 2 =========================================
reverse string
======================================= Answer =====================================*/
/* let str = 'maim';
let reverse = '';
function reversing(text){
for(let i = text.length-1;i >=0;i--){
    console.log(text[i]);
    reverse = reverse + text[i];
    
}
if(text == reverse){
        return('palindrome')
    }
    else{return('not palindrome')}
}
let ans = reversing(str)
console.log(reverse)
console.log(ans)
 */

/*==================================== Question No 3 =========================================
print table
======================================= Answer =====================================*/
/* 
let num = 5;
for(let i = 1;i<=10;i++){
    console.log(`${num}*${i} = ${num * i}`)
}
    */
   



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 4 =========================================
anagram
======================================= Answer =====================================*/
// function isAnagram(a,b){
//     return(
//         a.split('').sort().join() === b.split('').sort().join()
//     )
// }
// console.log(isAnagram('listen','silent'))
// console.log(isAnagram('eat','tea')) 

/* function isAnagram(a,b){
    return(
        a.split('').sort().join() == b.split('').sort().join()
    )
}
let ans = (isAnagram('listen','silent'))
console.log(ans) */


/*==================================== Question No 5 =========================================
constant and vowels
======================================= Answer =====================================*/


// let str = 'A lazy dog jumps over the fox'; 
/* let str = 'love'
   console.log(str,str.length)
str = str.replaceAll(' ','');
console.log(str,str.length);
str = str.toLowerCase();
console.log(str);
let constant = '';
let vowel = '';
function find(str){
    for(let i = 0; i < str.length;i++){
        if(str[i] === 'a'||str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u'){
            vowel = vowel + str[i]
        }
        else{
            constant = constant + str[i]
        }
    }

}
find(str)
console.log(vowel)
console.log(constant)
 */

/*==================================== Question No 6 =========================================
max number
======================================= Answer =====================================*/
/* let arr = [4,2,3,33,4,2,3];
let max = arr[0]
for(let i = 0;i< arr.length;i++){
    if(arr[i] > max){
        max= arr[i]
    }
}
console.log(max)
 */

/*==================================== Question No 7 =========================================
min number
======================================= Answer =====================================*/
/* let arr = [4,2,3,33,4,2,3];
let min = arr[0];
for(let i = 0;i < arr.length;i++){
    if(arr[i] < min){
        min = arr[i]
    }
}
console.log(min)
 */


/*==================================== Question No 8 =========================================
is vowel present in string
======================================= Answer =====================================*/
/* let str = 'ytU';
str = str.toLowerCase()
let check = (/[aeiou]/.test(str))
console.log(check)
if(/[aeiou]/.test(str)){
    console.log('vowel is existend')
}
else{
    console.log('vowel not existed')
} */




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 9 =========================================
existence of element
======================================= Answer =====================================*/
/* let arr = ['a','b','a','c','d','d','e'];
let count = {};
arr.forEach((item)=>{
    if(count[item]){
        count[item] = count[item] + 1
    }
    else{
        count[item] = 1
    }
})
console.log(count)
 */


/*==================================== Question No 10 =========================================
missing number
======================================= Answer =====================================*/
/* let arr = [1,2,4,5,6,7,8];
let missing = '';
for(let i = 1;i <=8;i++){
    if(arr.indexOf(i) == -1){
        missing = missing + i
    }
}
console.log(missing) */


/*==================================== Question No 11 =========================================
leap year
======================================= Answer =====================================*/
/* let year = 2005;
if((year % 4 == 0 && year % 100 != 0)||(year % 400 == 0))
{
    console.log('leap year')
}
else{
    console.log('not leap year')
}

 */
/*==================================== Question No 12 =========================================
class in oop
======================================= Answer =====================================*/
 /* class Student {
constructor(name,age,designation){this.name = name;
  this.age = age;
  this.designation = designation;
}
details(){return `My name is ${this.name} and my age is ${this.age} and my designation is ${this.designation}`}
}
const newStudent = new Student('Aziz',30,'Designer')
console.log(newStudent);
let ans = newStudent.details();
console.log(ans) */

/* class Student {
    constructor(name,age,destination){
        this.name = name;
        this.age = age;
        this.destination = destination
        
    }
    details(){return `My name is ${this.name} and my age is ${this.age} and my destination is ${this.destination}`}
}
const newStudent = new Student('Aziz',30,'designer');
console.log(newStudent)
let ans = newStudent.details();
console.log(ans)
 */




/*==================================== Question No 13 =========================================
inheritance third pillar of oop
======================================= Answer =====================================*/
  /* class Student {
  constructor (name){this.name = name;}
}
class Student2 extends Student {
  constructor(name,age){super(name)
    this.age = age}
  show(){return `My name is ${this.name} and age is ${this.age}`}
}
const result = new Student2('Ahmed',30);
let ans = result.show();
console.log(ans)
 */

/* class Student {
    constructor(name){
        this.name = name;
    }
}

 class Student2 extends Student {
    constructor(name,age){
        super(name)
        this.age =age
    }
    show(){
        return `My name is ${this.name} and my age is ${this.age}`
    }
 }
let result = new Student2('ahmed',30)
let ans = result.show();
console.log(ans) */
/*==================================== Question No 14 =========================================
chek existence of item
======================================= Answer =====================================*/
/* let arr = ['a','b','b','a','a','c','d'];
let count = {};
arr.forEach((item)=>{
    if(count[item]){
        count[item] = count[item] + 1
    }
    else{count[item] = 1}
})

console.log(count) */


/*==================================== Question No 15 =========================================
flatten array
======================================= Answer =====================================*/
/* let arr = [1,[2,3],4,5,[6,7],8,[9]];
let flat = [];
for(let i = 0;i < arr.length;i++){
    if(Array.isArray(arr[i])){
        for(let j = 0;j < arr[i].length;j++){
            flat.push(arr[i][j])
        }
    }
    else{
        flat.push(arr[i])
    }
}

console.log(flat) */


/*==================================== Question No 16 =========================================
unique array
======================================= Answer =====================================*/
/* let arr = [1,2,2,3,4,3,3,4,5,6]
let unique = [];
for(let item of arr){
    if(!unique.includes(item)){
        unique.push(item)
    }
}
console.log(unique) */


/*==================================== Question No 17 =========================================
missing number
======================================= Answer =====================================*/
/* let arr = [1,2,4,5,6,7,8,9]
let missing = '';
for(let i = 1;i <=9;i++){
    if(arr.indexOf(i) == -1){
        missing = missing + i
    }
}
console.log(missing) */


/*==================================== Question No 18 =========================================
reverse string
======================================= Answer =====================================*/
/* let str = 'hello';
let reverse = '';
for(let i = str.length-1;i >=0;i--){
    reverse = reverse + str[i]
}

console.log(reverse) */


/*==================================== Question No 19 =========================================
anagram
======================================= Answer =====================================*/

/* function isAnagram(a,b){
    return a.split('').sort().join() == b.split('').sort().join()
}
let ans = isAnagram('eat','ate')
console.log(ans)
 */

/*==================================== Question No 20 =========================================
split and join
======================================= Answer =====================================*/
/* let str = 'hello world';
let spl = str.split(' ');
let arr = spl.join(' ')

console.log(arr)
 */


/*==================================== Question No 21 =========================================
settimeout
======================================= Answer =====================================*/
/* console.log('a');
let ans = setTimeout(() => {
    console.log('b')
    
}, 0);
clearTimeout(ans)
console.log('c') */




/*==================================== Question No 22 =========================================
cleartimeout
======================================= Answer =====================================*/
/* let timer;

  function handleClick() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      console.log("User ne clicking stop kar di");
    }, 1000);
  }
 */



/*==================================== Question No 23 =========================================
setInterval
======================================= Answer =====================================*/
/* let n = 0;
let remove = setInterval(() => {
    n = n + 5;
    console.log(n)
}, 2000);

function handleClick(){
    clearInterval(remove)
}
 */
/* let n = 0;
let timing = setInterval(() => {
    n++;
    console.log(n);
    if(n == 10){
        clearInterval(timing)
    }
    
}, 1000);
 */

/*==================================== Question No 24 =========================================
letter counter
======================================= Answer =====================================*/

/* function counting(){let getWord = document.getElementById('input').value;
getWord = getWord.toLowerCase();
    let letter = document.getElementById('requirement').value;
    letter = letter.toLowerCase();
    let display = document.getElementById('heading');
    getWord = getWord.split('');
    let target = getWord.filter((item)=>{ return item === letter})
    display.textContent = `${target.length} time`
}
 */
/* function counting(){
    let getWord = document.getElementById('input').value;
    getWord = getWord.toLowerCase();
    let letter = document.getElementById('requirement').value;
    letter = letter.toLowerCase();
    let display = document.getElementById('heading');
    getWord = getWord.split('');
    console.log(getWord);
    let target = getWord.filter((item)=>{
        return item == letter
    })
    display.innerHTML = target.length + ' ' + 'times' ;
} */

    /* function counting(){
    let getWord = document.getElementById('input').value;
    getWord = getWord.toLowerCase();
    let letter = document.getElementById('requirement').value;
    letter = letter.toLowerCase();
    let display = document.getElementById('heading');
    getWord = getWord.split('');
    let result = 0;
    for(let i = 0;i < getWord.length;i++){
       if(getWord[i] == letter){
        result++;
       }
    }
    display.innerHTML = result + ' ' + 'times'
}
 */

/*==================================== Question No 25 =========================================
img slider
======================================= Answer =====================================*/
 /* var init = 0;
 var images = document.getElementsByTagName('img');
 console.log(images)
 for(let i = 0;i < images.length;i++){
    images[i].style.display = 'none'
 }
images[init].style.display = 'block'
function next() {
  images[init].style.display = 'none';

  init = init + 1;
  if (init == images.length) {
    init = 0;
  }

  images[init].style.display = 'block';
}


function previous() {
  images[init].style.display = 'none';

  init = init - 1;
  if (init < 0) {
    init = images.length-1;
  }

  images[init].style.display = 'block';
}
 */
/*==================================== Question No 26 =========================================
Dom related
======================================= Answer =====================================*/
// let li = document.createElement('h1');
// console.log(li)

// let liContent = document.createTextNode('i am heading');
// console.log(liContent)
// li.appendChild(liContent);
// console.log(li.innerHTML)

// let a = document.getElementsByTagName('li');
// // console.log(a)
// let b = '';
// for(let i = 0;i < a.length;i++){
//    let m = b +   a[i].innerHTML;
//    m.style.color = 'red'
   
// }
// console.log(b)

// let div = document.getElementById('parent');
// console.log(div)
// console.log(div.children)
// console.log(div.firstElementChild)
// console.log(div.lastElementChild)
// console.log(firstChild)

// let a = document.querySelector('p');
// console.log(a);
// let b = document.querySelectorAll('p');
// console.log(b)
// for(let i = 0;i < b.length;i++){
//     console.log(b[i])
// }

/*==================================== Question No 27 =========================================
attributes
======================================= Answer =====================================*/
/* let at = document.getElementById('img');
console.log(at.attributes);
console.log(at.hasAttribute('src'));
console.log(at.getAttribute('src'));
 */


/*==================================== Question No 28 =========================================
object.freeze( )
======================================= Answer =====================================*/
// /* let obj = {
//     name : 'Aziz'
// }
// Object.freeze(obj)
// // obj.age = 24
// obj['age'] = 24;
// obj['designation'] = 'developer';
// obj['schoolName'] = 'smit',

// /* delete obj['age'];
// delete obj['schoolName'];
//  */
// console.log(obj.hasOwnProperty('age'))
// let check = 'designation' in obj

// console.log(Object.keys(obj).length)
// console.log(obj) */
/*==================================== Question No 29 =========================================
previousElementSiblings and nextElementSiblings

======================================= Answer =====================================*/
/* let center = document.getElementById('center');
console.log(center.innerHTML);
console.log(center.previousElementSibling.innerHTML);
console.log(center.nextElementSibling.innerHTML)
 */

/*==================================== Question No 30 =========================================
enhanceb object literals
if we are creating object by varibles and varible name and the name of property we are defining in object that we 
only write property name not write varibale na
======================================= Answer =====================================*/

/* `let name = 'Aziz';
let age = 20;
let obje = {
    name : name,
    age : age
}

console.log(obje);

let obj = {
    name,
    age
}
console.log(obj)` */
/*==================================== Question No 31 =========================================
Itrator for of/in
======================================= Answer =====================================*/
/* let name = ['klsoom','Nasreen','Shiza','sania'];
for(let item of  name){
    console.log(item)
}

for(let index in name){
    console.log(index)
} */



/*==================================== Question No 32 =========================================
let object destructuring
======================================= Answer =====================================*/
/* let obj = {
    name : 'Aziz',
    age : 20
}
obj['designation'] = 'developer';
console.log(obj)
/* console.log(obj['name']);
console.log(obj.age) */

/* let {name,age,designation} = obj;
console.log(name);
console.log(designation) */





/*==================================== Question No 33 =========================================
array destructuring
======================================= Answer =====================================*/
/* let fruits = ['apple','mango','grapes','banana','orange'];
/* console.log(fruits[0]);
console.log(fruits[3]);
 */
/* let [one,two,three,four,five] = fruits;
console.log(one);
console.log(five)
 */ 

/*==================================== Question No 34 =========================================
spread operator is a js feature use for 
merge two or more object or array 
copy object or array 
add data to an array or object 
======================================= Answer =====================================*/
/* et one = ['apple','banana'];
let two = ['grapes'];
// let merging = one.concat(two);
let merging = [...one,...two]
console.log(merging)

let newArray = [...merging,'orange','dates','guava'];
console.log(newArray);
console.log(...newArray) */



/*==================================== Question No 35 =========================================
spread operator for object 
merge 
copy 
add data 
spread object
======================================= Answer =====================================*/
/* let one = {
    name : 'Aziz'
}
let two = {
    age : 'developer'
}
let merge = {...one,...two }
// let combine = one.concat(two)
console.log(merge)
// console.log(combine)

// add data 
let newObject = {...merge,desigination : 'developer',city:'Karachi'};
console.log(newObject)

// copy 
let ob = {...newObject};
console.log(ob)
let spre = {...ob};
console.log(spre)

let user = {
    name : 'aziz'

}
console.log(`user `,user);
let newobject = {
    ...user,
    age : 23
}
console.log(newObject) */

/* let user = {
    name : 'Aziz'
}
let newobject = {
    ...user,
    age : 30
};
console.log(newobject)
let obj = {
    ...newobject,
    city: 'karachi'
}
console.log(obj) */
/*==================================== Question No 36 =========================================
deep copy;
if we have an object and iside object we have nested object and 
we copy obj and we create any change in nested object than it always changes in copy not in origional objec like
shallow copy
======================================= Answer =====================================*/
/* const obj = {
    name : 'Aziz',
    info : {
        age : 30
    }
}
console.log(`origional object `,obj)
const copyobj = JSON.parse(JSON.stringify(obj));
copyobj.info.age = 40;
copyobj['info']['designation'] = 'developer'

console.log(copyobj) */

/*==================================== Question No 37 =========================================
shallow copy of object 
if we have an object and a nested object and we copy object and 
in copy we create any modification than it modification is applied also on  origional 
object, it is  called shallow copy of object 

======================================= Answer =====================================*/
/* let details = {
    name : 'Aziz',
    age : 22,
    infor : {
        city : 'Karachi'
    }
}
console.log(details);

let copy = {
    ...details
}
copy.infor.city = 'Lahore';
copy.infor.district = 'Kohat'
console.log('copy ', copy) */



/*==================================== Question No 38 =========================================
callback function 
the function that is passed in another functions's  as an argument is called 
call back funciton
======================================= Answer =====================================*/
/* function cb(){
    console.log('i am call back function')
}

function main(callback){
    console.log('i am main function');
    callback();
}
main(cb) */




/*==================================== Question No 39 =========================================
higher order function
======================================= Answer =====================================*/
/* function a(){
    console.log('i am argument funciotn')
}

function main(callback){
    callback();
    return function(){
        console.log('i am higher order function i am returning a  function also')
    }

}

let ans = main(a)
ans()
 */

/*==================================== Question No 40 =========================================
closure funtion
======================================= Answer =====================================*/
/* function parent(m){
    let n = 20;
    return function(){
        console.log(m+n)
    }

}
let ans = parent(10);
ans()
 */



/*==================================== Question No 41 =========================================
closure function example
======================================= Answer =====================================*/
/* let heading = document.getElementById('heading')
function a(){
    let count = 0;
    return function(){
        count++;
    //    return count;
    
return heading.innerHTML = count
    }
}
let ans = a() */
/* let ans = a()
console.log(ans()) */


/* let heading = document.getElementById('heading');

  function a() {
    let count = 0; // private variable (closure)
    return function() {
      count++;
      heading.innerHTML = count;
    }
  }

  // Create closure and assign to global variable so HTML can access it
  let counter = a(); */




/*==================================== Question No 42 =========================================
try catch
======================================= Answer =====================================*/
/* try{let num = 5;
let ans = num.toUpperCase();
console.log(ans);}
catch(error){
    console.log(error)
}
console.log(2 + 5) */




/*==================================== Question No 43 =========================================
filter
======================================= Answer =====================================*/
// const fruits  = ['apple','banana','mango','banana','grapes','banana','guava']
/* let filter = fruits.filter((item,index)=>{
    return( item == 'banana'
       
    )
})
console.log(filter) */

// by for loop 
/* let arr = [];
for(let i = 0;i < fruits.length;i++){
    // console.log(fruits[i])
    if(fruits[i] === 'banana'){
        arr.push(fruits[i]);
        
    }
    else{
        console.log('no item found')
    }
}
console.log(arr) */


// example two with object 

/* const user  = [
    {id : 1,
        name : 'ahmed',
        title : 'Mern Eng'
    },
    {id : 2,
        name : 'Obaid',
        title : 'Admin Exec'
    },

    {id : 3,
        name : 'Aizaz',
        title : 'Ui ux designer'
    },

    {id : 4,
        name : 'Bilal',
        title : 'Mern Eng'
    }
]
 */
/* let ans = user.filter((item)=>{
    return(item.title === 'Mern Eng')
})
console.log(ans) */

// by for loop 

/* let obj = []
 for(let i = 0; i < user.length;i++){
    // console.log(user[i])
    if(user[i].title == 'Mern Eng'){
        obj.push(user[i])
    }
 }
 console.log(obj) */
/*==================================== Question No 44 =========================================
find
======================================= Answer =====================================*/
/* const fruits = ['apple','mango','orange','mango','grapes','banana','mango'];
let ans = fruits.find((item)=>{
    return(item == 'mango')
})
console.log(ans)
 */


const user  = [
    {id : 1,
        name : 'ahmed',
        title : 'Mern Eng'
    },
    {id : 2,
        name : 'Obaid',
        title : 'Admin Exec'
    },

    {id : 3,
        name : 'Aizaz',
        title : 'Ui ux designer'
    },

    {id : 4,
        name : 'Bilal',
        title : 'Mern Eng'
    }
]


let arr = [];
for(let item of user){
    if(item.title === 'Mern Eng'){
        arr.push(item);
        break;
    }
}
console.log(arr)

/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*//*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*//*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================

==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*/

/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*//*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







