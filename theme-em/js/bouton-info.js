
(function(){

for (let i = 1; i < 6; i++) {
   let btn = document.querySelector('.img-' + i + ' button');
   let info = document.querySelector('.img-' + i + ' .info');
   btn.addEventListener('mousedown', function() {
       info.classList.toggle('infoFade');
  
   })
 
}


    }
    
    ());