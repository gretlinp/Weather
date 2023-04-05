import React from "react";
import {A11y, Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MyPaper from './MyPaper'

function MyWeather({weatherData1}) {
    // console.log(weatherData.data.forecast.forecastday[1].hour[1])

    // let icon = weatherData.hour[12].condition.icon
    // console.log("this is weatherData1 in comp weather:")
    // console.log(weatherData1)

    const cards = [];

    for (let i = 0; i < 24; i++) {

        cards.push (

            <SwiperSlide>
                <MyPaper
                     key={i}
                     icon={weatherData1.hour[i].condition.icon}
                     temp_c={weatherData1.hour[i].temp_c}
                     time={weatherData1.hour[i].time}>
                </MyPaper>
            </SwiperSlide>
        )
    }


    return(
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={4}
                navigation
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, A11y]}
                className="mySwiper"
            >

                    {cards}

            </Swiper>
        </>

        // <div>
        //
        // {/*    <Paper*/}
        // {/*    sx={{width: '40%', borderRadius: '8px', backgroundColor: '#9db8c0'}}*/}
        // {/*    // key={index}*/}
        // {/*    elevation={3}>*/}
        // {/*    <br/>*/}
        //
        // {/*    <img src={weatherData.data.forecast.forecastday[0].hour[12].condition.icon} alt="blip" width='60%'></img>*/}
        // {/*    <p>{weatherData.data.forecast.forecastday[0].hour[12].temp_c}</p>*/}
        // {/*    <p>{weatherData.data.forecast.forecastday[0].hour[12].time}</p>*/}
        //
        // {/*        <br/>*/}
        // {/*</Paper>*/}
        //
        //     <Carousel
        //         show={3.5} slide={2} transition={0.5}>
        //         <a>blob</a>
        //         <MyPaper  weatherData={weatherData}/>
        //     </Carousel>
        // </div>
    );
}
// )}

export default MyWeather