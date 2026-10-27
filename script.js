const city=document.getElementById('city')
const search=document.getElementById('search')
const weather=document.getElementById('weather')

search.addEventListener('click',()=>{

    const input=city.value
    if(input){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
    

    fetch(url).then(response=>{
        if(response.status!==200){
            weather.innerHTML=`
            <p class="text-danger text-center">
            City not found.Please enter a valid city.
            </p>
            `
            return
        }
        return response.json()
    })
    .then(data=>{
        console.log(data);
        
        weather.innerHTML=`
                <h4>${data.name}</h4>
                <h2>${data.main.temp}C</h2>
                <h4>${data.weather[0].description}</h4>
                <h4>Wind speed: ${data.wind.speed}m/s</h4>
        `
        
    })

    }else{
        alert('Please enter a city name')
        return
    }
    
}
)