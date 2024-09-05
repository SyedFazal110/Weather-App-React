import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const App = () => {

    const [checkWeather, setCheckWeather] = useState([])
    let inputRef = useRef()

    useEffect(() => {

    }, [checkStatus])

    function checkStatus(event) {
        event.preventDefault()
        if (inputRef.current.value === ``) {
            alert(`Enter Your City`)
        }
        // async function getdata() {

        axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${inputRef.current.value}&aqi=no`)
            .then(responce => {
                console.log(responce.data);
                checkWeather.push(responce.data)
                setCheckWeather([...checkWeather])
                console.log(checkWeather);
            }).catch(error => {
                console.log(error);
                alert(`Something went Wrong`)
            })
        // }
        // getdata()
        inputRef.current.value = ``
    }

    return (
        <>
            <h1>Weather App</h1>
            <form onSubmit={checkStatus}>
                <input type="text" placeholder='Enter city name!' ref={inputRef} />
                <button>Success</button>
            </form>

            <div>
                {(
                    checkWeather.map((item, index) => (
                        <div key={index}>
                            <h2>{item.location.name}, {item.location.country}</h2>
                            <p>Temperature: {item.current.temp_c}°C</p>
                            <p>Condition: {item.current.condition.text}</p>
                            <img src={item.current.condition.icon} alt="Weather condition" />
                            <p>Humidity: {item.current.humidity}%</p>
                            <p>Wind Speed: {item.current.wind_kph} kph</p>
                        </div>
                    ))
                )}
            </div>

        </>
    )
}

export default App
