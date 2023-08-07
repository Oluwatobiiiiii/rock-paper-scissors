"use strict";
const openModal = document.querySelector('.btn-rules');
const closeModal = document.querySelector('.close-modal')






//event listeners
openModal.addEventListener('click', function(){
    document.querySelector('.modal-rules').style.display = 'block'
})

closeModal.addEventListener('click', function(){
    document.querySelector('.modal-rules').style.display = 'none'
})

//getting the image location of each click on either rock,paper,scissors
console.log(document.querySelector('.user').innerHTML)
const r  = document.querySelectorAll('.rock-paper-scissors')
r.forEach(function (m) {
   m.addEventListener('click', function(){
    console.log(m.innerHTML)
   })
   
})