import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './styles/Main.css';

const propTypes = {};
const defaultProps = {};

class Main extends PureComponent {
  render() {
    return (
      <div className="Main">
        Main Component
      </div>
    )
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
