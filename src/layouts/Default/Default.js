import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './styles/Default.css';

const propTypes = {};
const defaultProps = {};

class Default extends PureComponent {
  render() {
    return (
      <div className="Default">
        Default Component
      </div>
    )
  }
}

Default.propTypes = propTypes;
Default.defaultProps = defaultProps;

export default Default;
