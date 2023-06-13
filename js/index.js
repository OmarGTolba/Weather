// key = c1f328c7bb6d455dbdd223206232002
// url = https://api.weatherapi.com/v1/current.json?key=c1f328c7bb6d455dbdd223206232002&q=Lond



var contact = document.getElementById("contact-btn")
var home = document.getElementById("home-btn")

var searchInput = document.getElementById("searchInput")
var cityName= ""
var searchInput = document.getElementById("searchInput")
var all = []
m = ""



console.log(cityName);
searchInput.addEventListener("keyup",function(eventInfo){
  m += eventInfo.key
  if(searchInput.value.length >= 3){  
search(searchInput.value)
console.log(searchInput.value.length);
}
})



function search(ii){  
  var allm = []
  var my = new XMLHttpRequest();
  my.open("GET",` http://api.weatherapi.com/v1/search.json?key=c1f328c7bb6d455dbdd223206232002&q=${ii}`);
  my.send();
  my.addEventListener("readystatechange",function(){
    if(my.readyState == 4 && my.status ==200){
      allm = JSON.parse(my.response);
      cityName = allm[0].name
      console.log(cityName);
      data(cityName)
    }
  })

}

// var timestamp = 1676937600 // returns milliseconds since epoch time
//     normalisedTime = new Date(1676937600);
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    console.log(weekday[(d.getDay())+1]);

data()
function data (i){
  if (arguments.length ==0) {
 console.log(all);   
var myHttp = new XMLHttpRequest();
myHttp.open("GET",` http://api.weatherapi.com/v1/forecast.json?key=c1f328c7bb6d455dbdd223206232002&q=Alexandria&days=7`);
myHttp.send();
myHttp.addEventListener("readystatechange",function(){
  if(myHttp.readyState == 4 && myHttp.status ==200){
    all = JSON.parse(myHttp.response);
    display(all)
    console.log(all);
  }
  })
}

else{
var myHttp = new XMLHttpRequest();
myHttp.open("GET",` http://api.weatherapi.com/v1/forecast.json?key=c1f328c7bb6d455dbdd223206232002&q=${i}&days=7`);
myHttp.send();
myHttp.addEventListener("readystatechange",function(){
  if(myHttp.readyState == 4 && myHttp.status ==200){
    all = JSON.parse(myHttp.response);
    display(all)
    console.log(all);
  }
})}
}



function display(all){

  var cartona = ''
  console.log(all);
    
  cartona+=   `    <div class="col-md-4 ">

  <div class="date d-flex pt-3 justify-content-between">
 
    <h5> ${weekday[d.getDay()]}</h5>
<h5>${d.getDate()  +'-'+d.getMonth()}</h5>
</div>
<h5 class="pt-3">${all.location.name}</h5>
<div class="status d-flex py-5 justify-content-between">
  <h1 class=>
  ${all.current.temp_c} 
  <sup>o</sup> C
  </h1>
  <h1>
  <img src="https:${all.current.condition.icon}" alt="">

  </h1>
</div>
<h5>${all.current.condition.text}</h5>
<div class="icons py-3 d-flex">
<div class="d-flex w-100 justify-content-evenly">
  <div class="col-md-4 d-flex align-items-center">
  <i class="fa-solid fa-umbrella fs-4 bg-transparent "></i>
<h4> ${all.forecast.forecastday[0].day.daily_chance_of_rain} %</h4>
</div>

<div class="col-md-4 d-flex align-items-center">
<i class="fa-solid fa-wind fs-4 bg-transparent"></i>
<h4>${all.forecast.forecastday[0].day.maxwind_kph}</h4>
</div>
<div class="col-md-4 d-flex align-items-center">
<i class="fa-regular fa-compass fs-4 bg-transparent"></i>
<h4>East</h4>
</div>
</div>
</div>
</div>

`
  cartona+= `<div id="mid" class="col-md-4  align-items-center  text-center">

  <div class="date d-flex pt-3 justify-content-center  ">
 
    <h5 class=" mb-3"> ${(weekday[d.getDay()] === 'Saturday') ? 'Sunday' :weekday[d.getDay()+1]
  }</h5>
</div>
<div class="div align-self-center mt-5">
  <h3 class=" mt-5">
  <img src="https:${all.forecast.forecastday[1].day.condition.icon}
  " alt="">
  </h3>
  <h4 class=" mt-3">
  ${all.forecast.forecastday[1].day.avgtemp_c} 
  </h4>
<h5 class=" mt-3"> ${all.forecast.forecastday[1].day.avgtemp_f} </h5>
<h6 class=" mt-5">${all.forecast.forecastday[1].day.condition.text}</h6>
</div>



</div>
`
cartona+= `<div  class="col-md-4  align-items-center  text-center">

<div class="date d-flex pt-3 justify-content-center  ">

  <h5 class=" mb-3"> ${(weekday[d.getDay()] === 'Saturday') ? 'Monday' :weekday[d.getDay()+2]}</h5>
</div>
<div class="div align-self-center mt-5">
<h3 class=" mt-5">
<img src="https:${all.forecast.forecastday[2].day.condition.icon}
" alt="">

</h3>
<h4 class=" mt-3">
${all.forecast.forecastday[2].day.avgtemp_c} 
</h4>
<h5 class=" mt-3"> ${all.forecast.forecastday[2].day.avgtemp_f} </h5>
<h6 class=" mt-5">${all.forecast.forecastday[2].day.condition.text}</h6>
</div>
</div>
`
document.getElementById("weather").innerHTML = cartona

}

contact.addEventListener("click", function(){
  contact.setAttribute("href","contact.html")
})

home.addEventListener("click", function(){
  home.setAttribute("href", "index.html")
})