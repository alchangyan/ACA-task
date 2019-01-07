import React from 'react';
import NavBar from '../../components/NavBar';
// import PropTypes from 'prop-types';
import './styles/Default.css';

const propTypes = {};
const defaultProps = {};

function Default(props) {
  return (
    <div className="Default">
      <NavBar />
      <div style={{padding: 15}}>
        {props.children}
      </div>
    </div>
  )
}

Default.propTypes = propTypes;
Default.defaultProps = defaultProps;

export default Default;
