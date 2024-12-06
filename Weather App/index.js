const inputFiled = document.getElementById('inputFiled');
const search = document.getElementById('search');
const mainDib = document.getElementById('mainDib');
inputFiled.addEventListener('keypress',(event)=>{
    if(event.key=="Enter"){
        const input = inputFiled.value ;
        shouwInputValue(input);
        
    }
})
search.addEventListener('click', function(){
    const input = inputFiled.value ;
    shouwInputValue(input);
    
})
async function shouwInputValue(input){
    try{
    const apiKey = "82ab3b9966d7de1b8bbcfab43ab72df1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;

    const res = await fetch(url);
    const data = await res.json();
    showapiFunc(data);
    console.log(data);

    }catch(error){
        console.log(error);
    }
}

function showapiFunc(data){
   
    mainDib.innerHTML =`
    <h4> City Name : ${data.name}</h4> 
    <h4> Temparature  : ${data.main.temp} °C </h4> 
    <h4> Description : ${data.weather[0].description}</h4> 
    <h4> Condition : ${data.weather[0].main}</h4> 
    <h4> Image : <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></h4> 
    <h4> Sun rise : ${useableTine(data.sys.sunrise)}</h4> 
    <h4> Sun set : ${useableTine(data.sys.sunset)}</h4> 
    `
}

function useableTine(unixTime){
    return new Date(unixTime *1000).toLocaleTimeString('en-us',{ hour:"numeric" , minute:"numeric" , hour12:true});

}