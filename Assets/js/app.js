var url_atual = window.location.href;

const url = url_atual + "Assets/urls.json";

window.onload = function(){

	getJson();
}


async function getJson(){

	try{

    let response = await fetch(url);

    var dados = {};

    dados = await response.json()
 
  }catch(err){
            
        console.log('fetch failed', err);
              
         
  }finally{
      

     const lista = document.querySelector(".list-urls");

     const numberHits = document.querySelector("#number-hit");

     //pegando 5 items com array slice (-5)
     var dadoTotal = 0;

     dados.slice(-5).forEach(dado =>{

     lista.innerHTML += `
     			<li>
					<span class="url">${dado.shortUrl}</span>
					<span class="count-url">${dado.hits}</span>
				</li>
				<hr class="row-url"/>`;
   		});




   	 

   	  var total = dados.slice(-5).reduce( function(tot, record) {
    	
    		
    		return tot + record.hits;
	

		},0);


    numberHits.innerText = total;


 	}

}