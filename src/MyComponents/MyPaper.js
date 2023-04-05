import Paper from "@mui/material/Paper";
import React from "react";


function MyPaper({temp_c, time, icon}) {

    return (
            <div>
                <Paper
                    sx={{borderRadius: '8px', backgroundColor: '#9db8c0', width: '150px'}}
                    // key={index}
                    elevation={3}>
                    <br/>

                    {/*<img src="cdn.weatherapi.com/weather/64x64/night/266.png" alt="blip"></img>*/}
                    <p>{temp_c}</p>
                    <p>{time}</p>

                    <img src={icon} alt="blip"></img>
                    {/*<p>{weatherData.data.forecast.forecastday[0].hour[12].temp_c}</p>*/}
                    {/*<p>{weatherData.data.forecast.forecastday[0].hour[12].time}</p>*/}

                    <br/>
                </Paper>
            </div>
    )
}

export default MyPaper