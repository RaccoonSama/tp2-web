
(function(){



let ctrlCarrou = document.querySelectorAll('.btn-wrap');
let carrousel = document.querySelectorAll('.carrousel-2');
let noCtrlCarrou = 0;
for (const elmCarroussel of carrousel) 
{
    
    let btn = ctrlCarrou[noCtrlCarrou++].querySelectorAll('.btn-slider');


console.log(btn.length);

let k = 0;


for (const bt of btn) {
    bt.value = k++;
    bt.addEventListener('mousedown', function() {
       elmCarroussel.style.transform = "translateX(" + (-this.value*100) + "vw)";
    });
}
}

}

());