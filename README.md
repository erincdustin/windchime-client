This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Wind Chime Client

Wind Chime combines your current weather conditions with a selected genre (or your top artists) to make a custom Spotify playlist that fits the mood of the weather.

![windchime](/src/images/playlist-rs.png "App Example")

[Link to live app](https://erins-windchime-app.erincdustin.now.sh)

## Third party APIs used:

[Spotify](https://developer.spotify.com/documentation/web-api/reference/)

[OpenWeatherMap](https://openweathermap.org/current)

## Links to Backend Repos:

[Spotify Auth Server](https://github.com/erincdustin/spotify-auth-server)

[Wind Chime Server](https://github.com/erincdustin/windchime-server)


Enter Zip Code for Weather Conditions:

![Screenshot of weather route](/src/images/weather-rs.png "Enter Zip Code for Weather Conditions")

Choose from a list of genres or your top artists:

![Screenshot of playlist route](/src/images/playlist-options-rs.png "Choose from a list of genres or your top artists")

Update the mood setting on your playlist:

![Screenshot of update route](/src/images/update-rs.png "Update the mood setting on your playlist")

## Set up

Complete the following steps:

1. Clone this repository to your local machine `git clone https://github.com/erincdustin/windchime-client.git`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies with `npm install`
5. If using local server endpoints, edit in `config.js` file

## Scripts

Start the application with `npm start`

Run tests with `npm test`

## Deployment  

When your project is ready for deployment, `npm run deploy` will run the build

## Technology Used

React, React Router, CSS3


