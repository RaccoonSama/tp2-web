
(function(){

    // let bouton = document.getElementById('btn_nouvelles');
    let nouvelles = document.querySelector('.nouvelles div');


  
    window.addEventListener('load', monAjax)
    function monAjax()
    {
       let maRequete = new XMLHttpRequest();
       console.log(maRequete);
       maRequete.open('GET', monObjJS.URLdomain + '/wp-json/wp/v2/posts?per_page=3');
       maRequete.onload = function () {
           console.log(maRequete)
           if (maRequete.status >= 200 && maRequete.status < 400) {
               let data = JSON.parse(maRequete.responseText);

               let chaine = '';
               for (const elem of data) {
                chaine += '<h2>'+ elem.title.rendered + '</h2>';
                chaine += elem.content.rendered;
               }


               nouvelles.innerHTML = chaine;
           } else {
               console.log('La connexion est faite mais il y a une erreur')
           }
       }
       maRequete.onerror = function () {
           console.log("erreur de connexion");
       }
       maRequete.send()
    }
    
/*2e request */

btn_ajout = document.getElementById('btn-submit');
btn_ajout.addEventListener('mousedown', function(){
  

    let article = {
        "title" : document.querySelector('.admin-formulaire [name="title"]').value,
        "content" : document.querySelector('.admin-formulaire [name="content"]').value ,
        "status" : "published" ,
        "categories" : [10]
       
    }
   

    let creerArticle = new XMLHttpRequest();

    creerArticle.open('POST',  monObjJS.URLdomain + '/wp-json/wp/v2/posts');
    
    creerArticle.setRequestHeader('X-WP-Nonce', monObjJS.nonce);

    creerArticle.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//    console.log(JSON.stringify(article));
    creerArticle.send(JSON.stringify(article));
    creerArticle.onreadystatechange = function() {
        if (creerArticle.readyState == 4) {
            if (creerArticle.status  >= 200 && creerArticle.status < 400 ) {
                document.querySelector('.admin-formulaire [name="title"]').value = '';
                document.querySelector('.admin-formulaire [name="content"]').value = '';
            }else{
                alert('problème lors de la requête');
            }
        }
    }
})






}
        
        ());