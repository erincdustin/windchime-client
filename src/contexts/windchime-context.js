import React, { Component } from 'react'

const WindChimeContext = React.createContext({
    error: '',
    songs: null,
    weather: null,
    genreChoice: null,
    id: null,
    artists: null,
    topArtists: null,
    playlistId: null,
    userPlaylists: null,
    snapshot: null,
    targetEnergy: null,
    targetValence: null,
    targetTempo: null,
    targetPopularity: null,
    setError: () => { },
    clearError: () => { },
    setSongs: () => { },
    setWeather: () => { },
    setGenreChoice: () => { },
    setId: () => { },
    setArtists: () => { },
    setTopArtists: () => { },
    setPlaylistId: () => { },
    setUserPlaylists: () => { },
    setSnapshot: () => { },
    setTargetEnergy: () => { },
    setTargetValence: () => { },
    setTargetTempo: () => { },
    setTargetPopularity: () => { },
})

export default WindChimeContext;

export class WindChimeProvider extends Component {
    constructor(props) {
        super(props)
        const state = {
            error: '',
            songs: null,
            weather: null,
            genreChoice: null,
            id: null,
            artists: null,
            topArtists: null,
            userPlaylists: null,
            playlistId: null,
            snapshot: null,
            targetEnergy: null,
            targetValence: null,
            targetTempo: null,
            targetPopularity: null,
            setError: this.setError,
            clearError: this.clearError,
            setSongs: this.setSongs,
            setWeather: this.setWeather,
            setGenreChoice: this.setGenreChoice,
            setId: this.setId,
            setArtists: this.setArtists,
            setTopArtists: this.setTopArtists,
            setPlaylistId: this.setPlaylistId,
            setUserPlaylists: this.setUserPlaylists,
            setSnapshot: this.setSnapshot,
            setTargetEnergy: this.setTargetEnergy,
            setTargetValence: this.setTargetValence,
            setTargetTempo: this.setTargetTempo,
            setTargetPopularity: this.setTargetPopularity
          }   
        this.state = state; 
    }

    setError = error => {
      console.error(error)
      this.setState({ error })
    }

    clearError = () => {
      this.setState({ error: '' })
    }

    setUserPlaylists = (userPlaylists) => {
      this.setState({ userPlaylists })
    }

    setSongs = (songs) => {
      this.setState({ songs })
    }

    setWeather = (weather) => {
      this.setState({ weather })
    }

    setGenreChoice = (genreChoice) => {
      this.setState({ genreChoice })
    }

    setId = (id) => {
      this.setState({ id })
    }

    setArtists = (artists) => {
      this.setState({ artists })
    }

    setTopArtists = (topArtists) => {
      this.setState({ topArtists })
    }

    setPlaylistId = (playlistId) => {
      this.setState({ playlistId })
    }

    setSnapshot = (snapshot) => {
      this.setState({ snapshot })
    }

    setTargetEnergy = (targetEnergy) => {
      this.setState({ targetEnergy })
    }

    setTargetValence = (targetValence) => {
      this.setState({ targetValence })
    }

    setTargetTempo = (targetTempo) => {
      this.setState({ targetTempo })
    }

    setTargetPopularity = (targetPopularity) => {
      this.setState({ targetPopularity })
    }

    render() {
        return (
            <WindChimeContext.Provider value={this.state}>
                {this.props.children}
            </WindChimeContext.Provider>
        )
    }
}
