async function geoCodeing(cityName) {
   let data
    try {
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=89e0b7e8dbbac9434ed75176dac7f8a3`);
        data = await res.json();
        console.log(data)
    } catch(error) {
        console.log(error)
    }
    return data
}