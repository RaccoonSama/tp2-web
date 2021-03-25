
(function(){

let bar1 = document.querySelector('#burger div:first-child');
let bar3 = document.querySelector('#burger div:last-child');
let bar2 = document.querySelector('#burger div:nth-child(2)');
let burger = document.getElementById('burger');

burger.addEventListener('mousedown', function() {
    if (bar1.classList.contains('ouvrirX1') == false) {
        console.log('fonctionnne');
        bar1.classList.remove('fermeX1');
        bar1.classList.add('ouvrirX1');

        bar2.classList.remove('fermeX2');
        bar2.classList.add('ouvrirX2');

        bar3.classList.remove('fermeX3');
        bar3.classList.add('ouvrirX3');
    }else {
        bar1.classList.add('fermeX1');
        bar1.classList.remove('ouvrirX1');

        bar2.classList.add('fermeX2');
        bar2.classList.remove('ouvrirX2');

        bar3.classList.add('fermeX3');
        bar3.classList.remove('ouvrirX3');
    }
})




    }
    
    
    
    ());