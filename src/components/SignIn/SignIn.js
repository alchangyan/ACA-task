import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import config from '../../config/default.json';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles/SignIn.css';

const propTypes = {};
const defaultProps = {};
const inputStyles = {
  width: 300,
  marginBottom: 35
};
let errors = {};

function SignIn(props) {
  const [username, setUsername] = useState('');
  const [apiKey, setApiKey] = useState('ac509e2ad8cac71de8885867ad9fcfc3');

  useEffect(() => {
    console.log(123)
  })

  function handleSubmit() {
    console.log(username,
apiKey)
  }

  return (
    <div className="SignIn">
      <TextField
        label="Username"
        value={username}
        style={inputStyles}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/>
      <TextField
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

export default SignIn;
