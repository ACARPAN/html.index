// css selector 
// tagName 
let a1 = document.querySelector('h1')
console.log(a1)
a1.addEventListener('click',function(){
    a1.style.color = "yellow"; 
    a1.style.backgroundColor = "grey";
    a1.textContent = "Anuja";
})
//className 
 let a2 = document.querySelector('.two')
console.log(a2)
a2.addEventListener('mouseover' , function (){
    a2.style.backgroundColor ="red";
})

 //id 
 let a3 = document.querySelector('#one')
 console.log(a3)
 a3.addEventListener (function (){
    a3.style.color = "blue";
    a3.style.textContent = "Poudyal"
 })
