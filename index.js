const success=(position)=>{
    for(var i=0;i<4;i++){
    var p1=document.getElementsByTagName("p")[i];
    p1.style.cssText="width:30%;"
    }
    const input=document.getElementsByClassName("input1")[0].value;
    const p=document.getElementsByClassName("p")[0];
    if(input!=""){
    p.style.cssText="display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center;"
    }
   
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
console.log(latitude,longitude);

const city=document.getElementsByClassName("city")[0];
 function conversion(far)
{
return (far-273).toFixed(3);
}

fetch(https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=4810e142098401e123eed7a66306dcba).then(res=>res.json()).then(data=>{
    console.log(data);
  function  conversion(far)
{
return (far-273).toFixed(3);
}
    const city1=document.getElementsByClassName("city")[0];
    const temp1=document.getElementsByClassName("temp")[0];
    const speed1=document.getElementsByClassName("speed")[0];
    const desc1=document.getElementsByClassName("desc")[0];
    const pres1=document.getElementsByClassName("pres")[0];

    const humid=data.main.humidity;
    const pressure= data.main.pressure;
    const temp=data.main.temp;
    const name=data.name;
    const speed=data.wind.speed;
    const des=data.weather[0].description;


    city1.innerHTML=Weather of &nbsp;<span> ${name}<span>
    temp1.innerHTML=Temperature &nbsp;<span> ${ conversion(temp) } C<span>;
    pres1.innerHTML=Pressure is &nbsp;<span> ${  pressure } <span>;
    desc1.innerHTML=Sky conditions &nbsp;<span class="hello1">${des}<span>
    speed1.innerHTML=Wind Speed &nbsp;<span> ${speed} km/hr<span>



})
}
const fail=()=>{
    alert("data not retrieved");
    console.log("data not retrieved");
}
const button=document.getElementsByClassName("button")[0].addEventListener("click",()=>{
    navigator.geolocation.getCurrentPosition(success,fail);
})