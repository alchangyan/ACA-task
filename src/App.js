import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn';
import Main from './components/Main';
import Details from './components/Details';
import Favorites from './components/Favorites';
import Loader from './components/Loader';
import './styles/App.css';

function App() {
  const loggedIn = false;
  const loader = true;

  return (
    <Fragment>
      {
        loggedIn
        ? <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/details/:id" component={Details} />
            <Route path="/favorites" component={Favorites} />
            <Redirect to="/"/>
          </Switch>
        : <Switch>
            <Route exact path="/sign-in" component={SignIn} />
            <Redirect to="/sign-in" />
          </Switch>
      }
      {loader && <Loader />}
    </Fragment>
    );
}

export default App;
