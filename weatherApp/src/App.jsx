// import axios from 'axios'
// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {

//     const [checkWeather, setCheckWeather] = useState([])
//     let input = useRef()

//     useEffect(() => {

//     }, [check])

//     function check(event) {
//         event.preventDefault()
//         if (input.current.value === ``) {
//             alert(`Enter Your City`)
//         }

//         axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${input.current.value}&aqi=no`)
//           .then(responce => {
//               console.log(responce.data);
//               checkWeather.push(responce.data)
//               setCheckWeather([...checkWeather])
//               console.log(checkWeather);
//           }).catch(error => {
//               console.log(error);
//               alert(`Something went Wrong`)
//           })
//         input.current.value = ``
//     }

//     return (
//       <>
//       <div className='main'>

//         <h1>Weather App</h1>
//         <form onSubmit={check}>
//           <input type="text" placeholder='Enter City' ref={input} />
//           <button>Success</button>
//         </form>

//         <div>
//           {(
//             checkWeather.map((item, index) => (
//               <div key={index}>
//               <h2>{item.location.name}, {item.location.country}</h2>
//               <h4>Temperature: {item.current.temp_c}°C</h4>
//               <h4>Condition: {item.current.condition.text}</h4>
//               <h4>Humidity: {item.current.humidity}%</h4>
//               <h4>Wind Speed: {item.current.wind_kph} km/h</h4>
//               <img src={item.current.condition.icon} alt="Image" />
//             </div>
//             ))
//           )}
//         </div>
//       </div>
//       </>
//     )
// }

// export default App



import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
    const [checkWeather, setCheckWeather] = useState([]);
    let input = useRef();

    useEffect(() => {}, [checkWeather]);

    function check(event) {
        event.preventDefault();
        if (input.current.value === '') {
            alert('Enter Your City');
            return;
        }

        axios(`https://api.weatherapi.com/v1/current.json?key=e3e98122324b454b92f44333241406&q=${input.current.value}&aqi=no`)
            .then(response => {
                setCheckWeather(prevWeather => [...prevWeather, response.data]);
            })
            .catch(error => {
                console.log(error);
                alert('Something went Wrong');
            });
        input.current.value = '';
    }

    return (
        <div className='main'>
            <h1>Weather App</h1>
            <form onSubmit={check}>
                <input type="text" placeholder='Enter City' ref={input} />
                <button type="submit">Get Weather</button>
            </form>

            <div className='weather-info'>
                {checkWeather.map((item, index) => (
                    <div key={index}>
                        <h2>{item.location.name}, {item.location.country}</h2>
                        <h4>Temperature: {item.current.temp_c}°C</h4>
                        <h4>Condition: {item.current.condition.text}</h4>
                        <h4>Humidity: {item.current.humidity}%</h4>
                        <h4>Wind Speed: {item.current.wind_kph} km/h</h4>
                        <img src={item.current.condition.icon} alt="Weather Icon" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
