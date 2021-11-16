window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let locationIcon = document.querySelector('.weather-icon');

    let timme = document.querySelector('.card-title1');
    let timme2 = document.querySelector('.card-title2');
    let timme3 = document.querySelector('.card-title3');
    let timme4 = document.querySelector('.card-title4');
    let timme5 = document.querySelector('.card-title5');

    let speed1 = document.querySelector('.sped1');
    let speed2 = document.querySelector('.sped2');
    let speed3 = document.querySelector('.sped3');
    let speed4 = document.querySelector('.sped4');
    let speed5 = document.querySelector('.sped5');

    let deskr2 = document.querySelector('.desk2');
    let deskr3 = document.querySelector('.desk3');
    let deskr4 = document.querySelector('.desk4');
    let deskr5 = document.querySelector('.desk5');

    let temp2 = document.querySelector('.temp2');
    let temp3 = document.querySelector('.temp3');
    let temp4 = document.querySelector('.temp4');
    let temp5 = document.querySelector('.temp5');

    let temp_max2 = document.querySelector('.temp_max2');
    let temp_max3 = document.querySelector('.temp_max3');
    let temp_max4 = document.querySelector('.temp_max4');
    let temp_max5 = document.querySelector('.temp_max5');

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
                temperatureDescription.textContent = data.current.weather[0].description;
                locationTimezone.textContent = data.timezone;
                const icon = data.current.weather[0].icon;
                locationIcon.innerHTML= `<img src="icons/${icon}.png">`;
                speed1.textContent = data.current.wind_speed;
                speed2.textContent = data.daily[0].wind_speed;
                speed3.textContent = data.daily[1].wind_speed;
                speed4.textContent = data.daily[2].wind_speed;
                speed5.textContent = data.daily[3].wind_speed;

                deskr2.textContent = data.daily[0].weather[0].description;
                deskr3.textContent = data.daily[1].weather[0].description;
                deskr4.textContent = data.daily[2].weather[0].description;
                deskr5.textContent = data.daily[3].weather[0].description;

                temp2.textContent = data.daily[0].temp.min;
                temp3.textContent = data.daily[1].temp.min;
                temp4.textContent = data.daily[2].temp.min;
                temp5.textContent = data.daily[3].temp.min;

                temp_max2.textContent = data.daily[0].temp.max;
                temp_max3.textContent = data.daily[1].temp.max;
                temp_max4.textContent = data.daily[2].temp.max;
                temp_max5.textContent = data.daily[3].temp.max;
            });

        });

    }
    var d = new Date();

    var month=new Array("january","february","march","april","may","june",
    "july","august","september","october","november","december");

    

    timme.textContent =d.getDate()+ " " + month[d.getMonth()]
    + " " + d.getFullYear();

    d.setDate(d.getDate() + 1);

    timme2.textContent =d.getDate()+ " " + month[d.getMonth()];

    d.setDate(d.getDate() + 1);

    timme3.textContent =d.getDate()+ " " + month[d.getMonth()];

    d.setDate(d.getDate() + 1);

    timme4.textContent =d.getDate()+ " " + month[d.getMonth()];

    d.setDate(d.getDate() + 1);

    timme5.textContent =d.getDate()+ " " + month[d.getMonth()];

});


