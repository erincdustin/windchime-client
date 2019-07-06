import config from '../config'

const WeatherApiService = {
  postCity(postalCode) {
    return fetch(`${config.API_ENDPOINT}/weather`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ postalCode })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(res=> {
        console.log(res);
      })
  },
}

export default WeatherApiService;