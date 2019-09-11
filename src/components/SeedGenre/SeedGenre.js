import React from 'react';
import GenreList from '../../GenreList';
import TokenService from '../../services/token-service';
import WindChimeContext from '../../contexts/windchime-context';
import WindChimeApiService from '../../services/api-service';
import './SeedGenre.css'

class SeedGenre extends React.Component {

  static contextType = WindChimeContext;

  // gets recommended songs, creates playlist, & adds to playlist
  // stores results to DB
  handleGenrePlaylist = (genre) => {
    this.context.setTopArtists(null);
    this.context.setGenreChoice(genre)
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

  // gets user to artists, gets recommendations, creates playlist, & adds to playlist
  // stores results to DB
  handleArtistPlaylist = () => {
    this.context.setGenreChoice(null);
    WindChimeApiService.getUserArtists()
      .then(res => {
        const artists = res.items;
        let artistString = '';
        if(artists.length === 0) {
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

  renderTopArtists(){
    let mappedArtists = this.context.artists || []
    if(mappedArtists.length !== 0){
      mappedArtists = mappedArtists.map((artist, index) =>
          <img key={index} src={artist.images[0].url} alt={artist.name} />
        );
    } else {
      mappedArtists = 
      <div>
        <h4>No Top User Artists- Using Default</h4>
        <img src="https://i.scdn.co/image/6b2a709752ef9c7aaf0d270344157f6cd2e0f1a7" alt="The Beatles"></img>
        <img src="https://i.scdn.co/image/8976b6b0aacba6f7859b1f0ab7bc0adcd6ea7444" alt="Fleetwood Mac"></img>
        <img src="https://i.scdn.co/image/6b215464b769958ef1d7d9f163e3f49ebacf8842" alt="Eagles"></img>
      </div>;
    }
    return mappedArtists;
  }

  renderGenres(){
    const mappedGenres = GenreList.map((genre, index) => {
      return(
        <span className="genre-list" key={index}>
          <button 
          value={genre}
          onClick={async (e) =>{
            this.handleGenrePlaylist(e.target.value);
            TokenService.saveGenreToken('genre');
            this.props.history.push('/results');
          }}
          className="btn genre" type="button">{genre}</button>
        </span>)
      });
      return mappedGenres
  }


  render() {  
    return (
      <div>
        <div className="ribbon two"><div className="ribbon-header">Playlist Options</div></div>
        <span className="center">
        <h4>Seed the playlist Using your top Spotify artists:</h4>
            <div className="top-five">{this.renderTopArtists()}</div>
            <button className="inline btn artist orange" onClick={async ()=> {
              await TokenService.saveGenreToken('top artists');
              await this.handleArtistPlaylist();
              await this.props.history.push('/results');
              }}>Use My Top Artists</button>
        <h4>OR Pick from a list of genres:</h4>
        <div className="mapped-genres">{this.renderGenres()}</div>
        </span>
      </div>
    );
  }
}

export default SeedGenre;