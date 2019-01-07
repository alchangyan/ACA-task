import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from './services/api';
import SignIn from './components/SignIn';
import Main from './components/Main';
import Details from './components/Details';
import Favorites from './components/Favorites';
import Loader from './components/Loader';
import SnackBar from './components/SnackBar';
import './styles/App.css';

const propTypes = {
  signIn: PropTypes.func,
  sbText: PropTypes.string,
  sbLinkSource: PropTypes.string,
  sbLinkText: PropTypes.string,
  showSnackBar: PropTypes.bool,
};

const defaultProps = {
  signIn: () => {},
  sbText: '',
  sbLinkSource: '',
  sbLinkText: '',
  showSnackBar: false,
};

function App(props) {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const {
    sbText,
    sbLinkSource,
    sbLinkText,
    showSnackBar,

    loggedIn,
    signIn,
  } = props;

  function handleOpenSnackBar() {
    setOpenSnackBar(true);
  }

  function handleCloseSnackBar(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  }

  useEffect(() => {
    if (showSnackBar) {
      handleOpenSnackBar();
    }
  }, [showSnackBar])

  useEffect(() => {
    const apiKey = localStorage.getItem('apiKey');
    const sessionId = localStorage.getItem('sessionId');
    if (apiKey && sessionId) {
      signIn(apiKey, sessionId)
    }
  },[])

  return (
    <Fragment>
      {
        loggedIn
        ? <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/details/:id" component={Details} />
            <Route path="/favorites" component={Favorites} />
            <Route component={Main}/>
          </Switch>
        : <Switch>
            <Route
              exact
              path="/sign-in"
              component={SignIn}
            />
            <Route component={SignIn}/>
          </Switch>
      }
      {props.loader && <Loader active={props.loader}/>}
      <SnackBar
        open={openSnackBar}
        handleClose={handleCloseSnackBar}
        text={sbText}
        linkSource={sbLinkSource}
        linkText={sbLinkText}
      />
    </Fragment>
    );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    loader: state.globals.loader,
    loggedIn: state.globals.loggedIn,
    sessionId: state.globals.sessionId,

    sbText: state.globals.sbText,
    sbLinkSource: state.globals.sbLinkSource,
    sbLinkText: state.globals.sbLinkText,
    showSnackBar: state.globals.showSnackBar,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (apiKey, sessionId) => dispatch(signIn(apiKey, sessionId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
