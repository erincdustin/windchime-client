import React from 'react';
import renderer from 'react-test-renderer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import WeatherReading from './WeatherReading';

library.add(faWind)

describe(`Weather Reading`, () => {
  const props = {
    weather: {
      "coord": {
          "lon": -82.37,
          "lat": 27.09
      },
      "weather": [
          {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
          }
      ],
      "base": "stations",
      "main": {
          "temp": 79.41,
          "pressure": 1016,
          "humidity": 83,
          "temp_min": 75.99,
          "temp_max": 82.99
      },
      "visibility": 16093,
      "wind": {
          "speed": 5.82,
          "deg": 120
      },
      "clouds": {
          "all": 20
      },
      "dt": 1562821257,
      "sys": {
          "type": 1,
          "id": 6184,
          "message": 0.0084,
          "country": "US",
          "sunrise": 1562841758,
          "sunset": 1562891211
      },
      "timezone": -14400,
      "id": 0,
      "name": "Venice",
      "cod": 200
  }
  }

  it('renders as expected', () => {
    const tree = renderer
      .create(<WeatherReading
            weather={props.weather}
            />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})