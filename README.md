# React Weather

## Goal
The goal was to rebuild the weather app I made in school but this time using react.js instead of html and javascript.

## Description
The React Weather app is a more efficient version of the weather app I built in school. The app can currently allows searching for major cities and displays a history tab that allows use to quickly look up cities that they have looked at in the past. Displays current weather data and weather data for the next five days.

##### Currently a work in progress but main functionality is present and the app is useable. 

[Live Version](https://jojo-designs.github.io/reactweather/)

[Git Hub repo](https://github.com/JoJo-designs/reactweather)


##### find the original app  at the links below.

[Original app live Version](https://jojo-designs.github.io/weatherApp/)

[Original app Git Hub repo](https://github.com/JoJo-designs/weatherApp)

 ### Table of Content

  [Usage](#Usage)

  [Improvements](#Improvements)

  [Future](#Future)

  [Images](#Image)

  [Questions](#Questions)

### Usage

The app has a user friendly UI that allows a user to get weather data for cities at the click of a button. User can use an advanced search to look for cities that may have the same name in different countries. App displays the current weather conditions and a five day forecast.

## Improvements

The goal was to make a app that use resources more efficiency. The biggest improvement was in the api calls. An issue the first app had was the limit in the api. The api couldn't return weather data just by a name. Instead the api would use the latitude and longitude values. In the original app made a call to a geo coding api then the weather api anytime data was requested. As you could imagine this was slow. The solution was to tap into the indexedDB built into the web browser. Using a npm package I created a database that could store the cities name, country, latitude and longitude values. Then building the history buttons using the data from the database. By doing this I was able avoid making two api call for searches from history element. Two api calls are still needed when looking up a new city.

Another addition to the app was the ability to do more specific searches. The original app lacked the capability to select a country so cities that share a name such as London England and London Canada. The API would only ever return one and not the other. I created an advanced search function that allows the user to select a country and enter a city name. this allows the user greater control over the data that is return. The normal search function is still intact so user don't have to enter a country to get data. The advanced search is hidden when not in use so it doesn't clutter the UI.

I found that once a request was made in the original app it took a very long time for data to appear. Manipulating the page with javascript forced the whole page to be rebuilt whenever a request was made. React solved this with it's ability to selectively rerender only the part that needed to be rerendered.

I also made some noticeable visual changes. The biggest change is the weather icons. The api supplies images that could be used but these are small low quality images. I wanted to add nicer weather icons in the original but I was constricted by a deadline. Since this app is not being handed in and I can take as long as I want, I could take the time to implement larger images. I think this greatly improved the look. 

## Future

 - I would like to try and implement a PWA.
 - Built an advance search to allow users to select a countries so user and access all cities that might share a name. (example: London England, London Canada)


## Images
I will add some when the app is a little more polished.

### Questions

[JoJo-designs](https://github.com/JoJo-designs)
I would be happy to answer questions about my work. Please contact jodi at jodiladouceur.design@gmail.com.