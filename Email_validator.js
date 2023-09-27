let submitbtn=document.querySelector(".btn")
submitbtn.addEventListener('click', async function(e){
    e.preventDefault();
    
    document.querySelector(".resultcont").innerHTML=`<img  width="50px" src="Spinner-1s-200px.svg" >`
  
    let key ='ema_live_edL71CMMt6NysRl7pbDuuqNTRaXC9HYZJ866yOm0';
    let email = document.getElementById("username").value;

    url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let response = await fetch(url);
    let result =  await response.json();
    let str=``;
    for(key of Object.keys(result)){

        if(result[key]!="" && result[key]!=" ")
        {
            str=str + `<div>${key}:${result[key]}}</div>`
        }
     
    }
  
  
    document.querySelector(".resultcont").innerHTML=str;


  })

