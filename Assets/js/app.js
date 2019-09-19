var url_atual = window.location.href;

const url = url_atual + "Assets/urls.json";

// window.onload = function(){

// 	getJson();
// }


async function getJson(){

	try{

    let response = await fetch(url);

    var dados = {};

    dados = await response.json()
 
  }catch(err){
            
        console.log('fetch failed', err);
              
         
  }finally{
      
     console.log(dados);

     const lista = document.querySelector("list-urls");

     dados.forEach(dado =>{


     // lista.innerHTML += ``

     console.log(dado)


   		
   		});
 	}

}