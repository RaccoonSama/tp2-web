
(function(){

    // let bouton = document.getElementById('btn_nouvelles');
    let nouvelles = document.querySelector('.nouvelles div');


  
    window.addEventListener('load', monAjax)
    // window.addEventListener('load', monAjax2)
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




btn_ajout = document.getElementById('btn-submit2');
btn_ajout.addEventListener('mousedown', function(){
  

    let article2 = {
        "title" : document.querySelector('.admin-formulaire2 [name="title"]').value,
        "content" : document.querySelector('.admin-formulaire2 [name="content"]').value ,
        "status" : "published" ,
        "categories" : [11]
       
    }

/* requete annonce */


let creerannonce = new XMLHttpRequest();

    creerannonce.open('POST',  monObjJS.URLdomain + '/wp-json/wp/v2/posts');
    
    creerannonce.setRequestHeader('X-WP-Nonce', monObjJS.nonce);

    creerannonce.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//    console.log(JSON.stringify(article));
    creerannonce.send(JSON.stringify(article2));
    creerannonce.onreadystatechange = function() {
        if (creerannonce.readyState == 4) {
            if (creerannonce.status  >= 200 && creerannonce.status < 400 ) {
                document.querySelector('.admin-formulaire2 [name="title"]').value = '';
                document.querySelector('.admin-formulaire2 [name="content"]').value = '';
            }else{
                alert('problème lors de la requête');
            }
        }
    }
})


 // let bouton = document.getElementById('btn_nouvelles');
//  let annonces = document.querySelector('.annonce');


  

//  function monAjax2()
//  {
//     let maRequete2 = new XMLHttpRequest();
//     console.log(maRequete2);
//     maRequete2.open('GET', monObjJS.URLdomain + '/wp-json/wp/v2/posts?per_page=1');
//     maRequete2.onload = function () {
//         console.log(maRequete2)
//         if (maRequete2.status >= 200 && maRequete2.status < 400) {
//             let data = JSON.parse(maRequete2.responseText);

//             let chaine = '';
//             for (const elem of data) {
//              chaine += '<h2>'+ elem.title.rendered + '</h2>';
//              chaine += elem.content.rendered;
//             }


//             annonces.innerHTML = chaine;
//         } else {
//             console.log('La connexion est faite mais il y a une erreur')
//         }
//     }
//     maRequete2.onerror = function () {
//         console.log("erreur de connexion");
//     }
//     maRequete2.send()
//  }




}
        
        ());