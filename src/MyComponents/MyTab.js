import React, {useState} from "react";
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import TodayIcon from '@mui/icons-material/Today';

import MyWeather from "./MyWeather";

function MyTab({weatherData}) {

    // console.log("This is weatherdata")
    // console.log(weatherData)


    // console.log(weatherData);
    const [value, setValue] = useState(1);
    let day1h = {};

    // day1h = weatherData["forecast"]["forecastday"][0];
    day1h = weatherData.forecast.forecastday[0];


    let day2h = {};
    day2h = weatherData["forecast"]["forecastday"][1];

    let day3h = {};
    day3h = weatherData["forecast"]["forecastday"][2];

    // console.log(day1h);

    // console.log(weatherData.data.forecast.forecastday[1].hour[1])
    // console.log(weatherData.data.forecast.forecastday[0])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div className="App">
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab value="1" icon={<TodayIcon />} label="Today" iconPosition="start"/>
                        <Tab value="2"  icon={<KeyboardArrowRightIcon />} label="Tomorrow" iconPosition="start" />
                        <Tab value="3" icon={<KeyboardDoubleArrowRightIcon />} label="Overmorrow" iconPosition="start" />
                    </TabList>
                </Box>

                <TabPanel value="1">
                    <MyWeather weatherData1={day1h}/>
                </TabPanel>

                <TabPanel value="2">
                    <MyWeather weatherData1={day2h}/>
                </TabPanel>

                <TabPanel value="3">
                    <MyWeather weatherData1={day3h}/>
                </TabPanel>

            </TabContext>
        </div>

    );
}

export default MyTab