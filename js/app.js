"use strict";


//getting the image location of each click on either rock,paper,scissors
console.log(document.querySelector('.user').innerHTML)
const r  = document.querySelectorAll('.rock-paper-scissors')
r.forEach(function (m) {
   m.addEventListener('click', function(){
    console.log(m.innerHTML)
   })
   
})