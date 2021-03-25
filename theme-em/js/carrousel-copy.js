
(function(){

let btn = document.querySelectorAll('.btn-slider');
console.log(btn.length);
let carrousel = document.querySelector('.carrousel-2');

let k = 0;


for (const bt of btn) {
    bt.value = k++;
    bt.addEventListener('mousedown', function() {
       carrousel.style.transform = "translateX(" + (-this.value*100) + "vw)";
    });
}
}



());