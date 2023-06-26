window.getWeather();
function getWeather() {

    let city = document.querySelector("#cityName").value;
    console.log("City Name: ", city);

    //let API_KEY = `72df1165103b0c7ca19c5636f5c6d129`;

    //Getting request through api example

    axios.get(`https://localhost:3000/weather1`)
        .then(function (response) {
            // handle success
            ({
                city: 'Beijing',
                tempInC: '34',
                humidity: '56',
                high:'40',
                low: '30'
            });
           
        })
        .catch(function (error) {
            // handle error
            console.log(response.data);
            
            document.querySelector("#result").innerHTML = "Weather data not worked"
        })
}