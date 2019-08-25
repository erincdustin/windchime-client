import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Redirect from '../../routes/Redirect';
import WindChimeApiService from '../../services/api-service';
import WindChimeContext from '../../contexts/windchime-context';
import HomePage from '../../routes/HomePage';
import LandingPage from '../../routes/LandingPage';
import GenreOption from '../../routes/GenreOption';
import PastPlaylists from '../../routes/PastPlaylists';
import ChangeGenreParams from '../../routes/ChangeGenreParams';
import Results from '../../routes/Results';
import NotFoundPage from '../../routes/NotFoundPage';
import PrivateRoute from '../Utils/PrivateRoute';
 
class App extends React.Component {

  static contextType = WindChimeContext;

  //makes GET call to spotify user endpoint and sets state
  //crosschecks user ID against database
  //if user id not found, post to /api/user endpoint to add to DB
  componentDidMount() {
    WindChimeApiService.getUser()
    .then(res => {
      this.context.setId(res.id)
      WindChimeApiService.findStoredUser()
        .then(res => {
          let user = res.filter(user => user.id === this.context.id);
          if (user === undefined || user.length === 0) {
            WindChimeApiService.postUser(user[0].id)
              .then(res => {
                console.log(`${res.id} added`);
                this.context.setId(res.id)
              })
            } else {
              this.context.setId(user[0].id)
              console.log('User found')
            }
          })
        })
    .catch(err => {
      this.context.setError(err)
    })

    WindChimeApiService.getUserArtists()
      .then(res => {
        this.context.setArtists(res.items)
      })
      .catch(err => {
        this.context.setError(err)
      })
    }

  render() {   
  return (
    <div className="App">            
      <main>
        <section>
          <div className="error">{this.context.error.message}</div>
          <Switch>
            <Route 
            exact path={'/'}
            component={LandingPage} />

            <Route 
            exact path={'/redirect'}
            component={Redirect} />

            <PrivateRoute 
            exact path={'/genreOption'}
            component={props => 
              <GenreOption
                {...props}
                />} 
              />

            <PrivateRoute 
            exact path={'/results'}
            component={props => 
              <Results
                {...props}
                />} 
              />

            <PrivateRoute 
            exact path={'/changeGenreParams'}
            component={props =>
              <ChangeGenreParams
                {...props}
            />}
            />

            <PrivateRoute 
            exact path={'/getWeather'}
            component={props => 
              <HomePage
              {...props}
              />}
              />

              <PrivateRoute 
            exact path={'/playlists'}
            component={props => 
              <PastPlaylists
              {...props}
              />}
              />

              <Route
              component={NotFoundPage}
              />
            </Switch>
        </section>
      </main>
    </div>
  );
  }
}

export default App;