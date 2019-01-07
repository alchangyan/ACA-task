import React, { useState } from 'react';
import PropTypes from 'prop-types';
import config from '../../config/default.json';
import { connect } from 'react-redux';

import { signUp } from '../../services/api';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles/SignIn.css';

const propTypes = {
  signUp: PropTypes.func,
};

const defaultProps = {
  signUp: () => {},
};

const inputStyles = {
  width: 300,
  marginBottom: 35
};

function SignIn(props) {
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [apiKey, setApiKey] = useState('ac509e2ad8cac71de8885867ad9fcfc3');

  const {
    signUp,
  } = props;

  function handleSubmit() {
    if (!username || !apiKey) {
      let errors = {};
      if (!username) errors.username = true;
      if (!apiKey) errors.apiKey = true;
      setErrors(errors);
    } else {
      setErrors({});
      signUp(username, apiKey)
    }
  }

  return (
    <div className="SignIn">
      <TextField
        error={errors.username}
        label="Username"
        value={username}
        style={inputStyles}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <TextField
        error={errors.apiKey}
        label="MovieDB API key"
        value={apiKey}
        style={inputStyles}
        onChange={(e) => setApiKey(e.target.value)}
        helperText={`ex: ${config.my_api_key}`}
      />
      <br/>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </div>
  )
}

SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (username, apiKey) => dispatch(signUp(username, apiKey))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
