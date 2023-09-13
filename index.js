const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const weatherDetails2 = document.querySelector('.weather-details2');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey = 'c4aebc33d58e72d6c52a87d3c4c96dbf';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                weatherDetails2.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const temp_min = document.querySelector('.weather-details .temp_min span');
            const pressure = document.querySelector('.weather-details2 .pressure span');


            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'clear.png';
                    break;

                case 'Rain':
                    image.src = 'rain.png';
                    break;

                case 'Snow':
                    image.src = 'snow.png';
                    break;

                case 'Clouds':
                    image.src = 'cloud.png';
                    break;

                case 'Haze':
                    image.src = 'mist.png';
                    break;
                case 'Thunderstorm':
                    image.src = '';
                    break;
                case 'Drizzle':
                    image.src = '';
                    break;
                case 'Smoke':
                    image.src = '';
                    break;
                case 'Dust':
                    image.src = '';
                    break;
                case 'Fog':
                    image.src = '';
                    break;
                case 'Tornado':
                    image.src = '';
                    break;
                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            temp_min.innerHTML = `${parseInt(json.main.temp_min)}<span>°C</span>`;
            pressure.innerHTML = `${parseInt(json.main.pressure)}hPa`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';


        });


});
