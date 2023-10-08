'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModalOne = document.querySelectorAll('.start');
const btnOpenModalTwo = document.querySelectorAll('.countdown');
const btnOpenModalThree = document.querySelectorAll('.night');
const btnOpenModalFour = document.querySelectorAll('.escape');


for(let i = 0; i < btnOpenModalOne.length; i++)
    btnOpenModalOne[i].addEventListener('click',function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    var audio = document.getElementById("modal-audio");
    audio.play();
});

for(let i = 0; i < btnOpenModalTwo.length; i++)
    btnOpenModalTwo[i].addEventListener('click',function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    var audio = document.getElementById("modal-audio-1");
   audio.play();
});

for(let i = 0; i < btnOpenModalThree.length; i++)
    btnOpenModalThree[i].addEventListener('click',function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    var audio = document.getElementById("modal-audio-2");
   audio.play();
});

for(let i = 0; i < btnOpenModalFour.length; i++)
    btnOpenModalFour[i].addEventListener('click',function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    var audio = document.getElementById("modal-audio-3");
   audio.play();
});

btnCloseModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    var audio = document.getElementById("modal-audio");
   audio.pause();
   var audio = document.getElementById("modal-audio-1");
   audio.pause();
   var audio = document.getElementById("modal-audio-2");
   audio.pause();
   var audio = document.getElementById("modal-audio-3");
   audio.pause();
});

overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
