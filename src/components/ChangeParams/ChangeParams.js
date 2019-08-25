import React from 'react';
import WindChimeContext from '../../contexts/windchime-context';
import WindChimeApiService from '../../services/api-service';
import TokenService from '../../services/token-service';
import './ChangeParams.css';

class ChangeParams extends React.Component {

  static contextType = WindChimeContext;

  state = {
    genre: null,
  }

  componentDidMount() {
    console.log(this.context.genreChoice)
    this.setState({ genre: this.context.genreChoice})
  }

  handleGenrePlaylist = (genre) => {
    this.context.setTopArtists(null);
    WindChimeApiService.getGenreTracks(genre, this.context.targetEnergy, this.context.targetValence, this.context.targetTempo, this.context.targetPopularity)
      .then(res => {
        this.context.setSongs(res.tracks)
        const mappedSongs = res.tracks.map(song => {
          const songId = song.id;
          return `spotify:track:${songId}`;
          }).join(',');

        WindChimeApiService.makeGenrePlaylist(this.context.id, genre, this.context.weather)
          .then(res => {
            this.context.setPlaylistId(res.id)
            const playlistId = res.id

            WindChimeApiService.setSongs(res.id, mappedSongs)
              .then(res => {
                this.context.setSnapshot(res.snapshot_id)
                const playlistBody= JSON.stringify({
                  playlist_id: playlistId,
                  user_id: this.context.id,
                  energy: this.context.targetEnergy,
                  valence: this.context.targetValence,
                  tempo: this.context.targetTempo,
                  popularity: this.context.targetPopularity
                });

                WindChimeApiService.savePlaylist(playlistBody)
                  .then(res => {
                    console.log(`User playlist ${res.playlist_id} added`);
                    TokenService.savePlaylistToken(res.playlist_id);
                  })
              })
          })
      })
      .catch(err => {
        this.context.setError(err)
      })
  }

  handleArtistPlaylist = () => {
    this.context.setGenreChoice(null);
    WindChimeApiService.getUserArtists()
      .then(res => {
        const artists = res.items;
        let artistString = '';
        if(artists !== []) {
          artistString = '3WrFJ7ztbogyGnTHbHJFl2,08GQAI4eElDnROBrJRGE0X,0ECwFtbIWEVNwjlrfc6xoL'
        } else {
          artistString = artists.map(artist => {
            return artist.id;
          }).join(',');
        }
        this.context.setTopArtists(artistString)

      WindChimeApiService.getArtistTracks(artistString, this.context.targetEnergy, this.context.targetValence, this.context.targetTempo, this.context.targetPopularity)
        .then(res => {
          this.context.setSongs(res.tracks)
          const mappedSongs = res.tracks.map(song => {
            const songId = song.id;
            return `spotify:track:${songId}`;
            }).join(',');

          WindChimeApiService.makeArtistsPlaylist(this.context.id, this.context.weather)
            .then(res => {
              this.context.setPlaylistId(res.id)
              const playlistId = res.id

                WindChimeApiService.setSongs(res.id, mappedSongs)
                  .then(res => {
                    this.context.setSnapshot(res.snapshot_id)
                    const playlistBody= JSON.stringify({
                      playlist_id: playlistId,
                      user_id: this.context.id,
                      energy: this.context.targetEnergy,
                      valence: this.context.targetValence,
                      tempo: this.context.targetTempo,
                      popularity: this.context.targetPopularity
                    });

                    WindChimeApiService.savePlaylist(playlistBody)
                      .then(res => {
                        console.log(`User playlist ${res.playlist_id} added`);
                        TokenService.savePlaylistToken(res.playlist_id);
                      })
                })
            })
        })
      })
      .catch(err => {
        this.context.setError(err)
      })
  }

  handleSetEnergy = (energyLevel) => {
    if (energyLevel !== null) {
      this.context.setTargetEnergy(Number(energyLevel))
    } else {
      this.context.setTargetEnergy(null)
    }
  }

  handleSetValence = (valenceLevel) => {
    if (valenceLevel !== null) {
      this.context.setTargetValence(Number(valenceLevel))
    } else {
      this.context.setTargetValence(null)
    }
  }

  handleSetTempo = (tempoLevel) => {
    if (tempoLevel !== null) {
      this.context.setTargetTempo(Number(tempoLevel))
    } else {
      this.context.setTargetTempo(null)
    }
  }

  handleSetPopularity = (popularityLevel) => {
    if (popularityLevel !== null) {
      this.context.setTargetPopularity(Number(popularityLevel))
    } else {
      this.context.setTargetPopularity(null)
    }
  }

  render() {
    const options = [
      null,
      .1,
      .2,
      .3,
      .4,
      .5,
      .6,
      .7,
      .8,
      .9,
      1
    ];

    const mappedTargetEnergy = options.map((energyOption, index) => {
      if (energyOption === null) {
        return <option key={index} value={null}>n/a</option>
      }
      return(
        <option key={index} value={energyOption}>{energyOption * 10}</option>
      )
    })
  
    const mappedTargetValence = options.map((valenceOption, index) => {
      if (valenceOption === null) {
        return <option key={index} value={null}>n/a</option>
      }
      return(
        <option key={index} value={valenceOption}>{valenceOption * 10}</option>
      )
    })
  
    const mappedTargetTempo = options.map((tempoOption, index) => {
      if (tempoOption === null) {
        return <option key={index} value={null}>n/a</option>
      }
      return(
        <option key={index} value={tempoOption}>{tempoOption * 10}</option>
      )
    })
  
    const mappedTargetPopularity = options.map((popularityOption, index) => {
      if (popularityOption === null) {
        return <option key={index} value={null}>n/a</option>
      }
      return(
        <option key={index} value={popularityOption * 100}>{popularityOption * 10}</option>
      )
    })

  return (
    <div className="change-params">
      <h4>Select Playlist Values Manually:</h4>
      <form>
        <span className="param">
        <label htmlFor="targetEnergy"><h4 className="align">Select Target Energy:</h4></label>
        <select value={Math.floor(this.context.targetEnergy*10)/10} name="targetEnergy" onChange={event => this.handleSetEnergy(event.target.value)}>{mappedTargetEnergy}</select>
        </span>
        <span className="param">
        <label htmlFor="targetValence"><h4 className="align">Select Target Happiness:</h4></label>
        <select value={Math.floor(this.context.targetValence*10)/10} name="targetValence" onChange={event => this.handleSetValence(event.target.value)}>{mappedTargetValence}</select>
        </span>
        <span className="param">
        <label htmlFor="targetTempo"><h4 className="align">Select Target Tempo:</h4></label>
        <select value={Math.floor(this.context.targetTempo*10)/10} name="targetTempo" onChange={event => this.handleSetTempo(event.target.value)}>{mappedTargetTempo}</select>
        </span>
        <span className="param">
        <label htmlFor="targetPopularity"><h4 className="align">Select Target Popularity:</h4></label>
        <select value={Math.floor(this.context.targetPopularity*10)/10} name="targetPopularity" onChange={event => this.handleSetPopularity(event.target.value)}>{mappedTargetPopularity}</select>
        </span>
      </form>
      <button className="btn center" onClick={()=> {
        this.props.history.goBack();
        }}>Back</button>
      <button className="btn center" onClick={()=> {
        if(!this.context.topArtists){
        this.handleGenrePlaylist(this.state.genre);
        this.props.history.push('/results');
        }
        if(this.context.topArtists){
        this.handleArtistPlaylist(); 
        this.props.history.push('/results')
        }
        }}>Update</button>
    </div>
  );
  }
}

export default ChangeParams;