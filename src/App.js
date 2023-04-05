import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyTab from "./MyComponents/MyTab";
import {IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


function App() {

    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState({}); // sets as object - sets with first rendering the empty object

   function handleChange(event) { // every letter is set as location, but does not api call
        setLocation(event.target.value)
    }

    async function getWeatherData() { /// I want the api call only after click
        await axios.get('http://api.weatherapi.com/v1/forecast.json?key=674bd91ce3824a2b8f372056233003&q=' + location + '&days=3&aqi=no&alerts=no\n')
            .then(response => {
                // set a const here??? to make sure it goes through to the child-component?
                setWeatherData(response.data)
                // PS - check with or without .data if problems with fetching data
                // take the api response, then assign all that with this function the useState const - location
                // console.log(response.data)
                // console.log(response.data.forecast.forecastday[1])
            })

            .catch(() => {
                console.log('tuksis');
            });
    }

    // if (weatherData === null) {
    //     console.log("i am an empty object")
    // }
    // else {console.log("I am not an empty object")
    // }

  ///////////////////////////////////////
  return (
    <div className="App">
      <header className="App-header">
          <h3>Weather for the next three days</h3>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                  <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <TextField
                      id="input-with-sx"
                      label="Type in a city"
                      variant="standard"
                      onChange={handleChange}
                  />
                  <IconButton aria-label="delete" onClick={getWeatherData}>
                      <SearchIcon />
                  </IconButton>
              </Box>
      </header>

      <main>
           <div>
               {Object.keys(weatherData).length > 0 && // js object method gives back counted keys; conditional rendering of components
                   <MyTab weatherData={weatherData}/>}
           </div>
      </main>
    </div>
  );
}

export default App;
