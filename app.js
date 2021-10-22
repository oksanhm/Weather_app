window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let locationIcon = document.querySelector('.weather-icon');



    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long=position.coords.longitude;
            lat=position.coords.latitude;


           // const proxy="https://cors-anywhere.herokuapp.com/";
            const api=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=ae04af4b9db54af79238cd29745231a0&units=metric`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temp, feels_like} = data.current;
                temperatureDegree.textContent = temp;
                temperatureDescription.textContent = data.alerts[0].event;
                locationTimezone.textContent = data.timezone;
                const icon = data.current.weather[0].icon;
                locationIcon.innerHTML= `<img src="icons/${icon}.png">`;
            });

        });

    }
    

    
});