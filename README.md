# Api fetching weather data for specific location
This api will return the weather data for given location (lat/lon), data is fetched from openweathermap.org<br/>
It's using GraphQL and Node.JS as technologies

## Installation
Install node on local environment and run following commands in repo directory

```
npm install
node src/index.js
```


Your api will now be available on the following url: http://localhost:4000/

## Example query:
```
query {
  location(lat: 51.0543 lon: 3.7174) {
    lat
    lon
    timezone
    timezone_offset
    current {
      dt
      sunrise
      sunset
      temp
      feels_like
      pressure
      humidity
      dew_point
      uvi
      clouds
      visibility
      wind_speed
      wind_deg
      weather {
        id
        main
        description
        icon
      }
    }
  }
}
```