import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './styles/Details.css';

const propTypes = {};
const defaultProps = {};

class Details extends PureComponent {
  render() {
    return (
      <div className="Details">
        Details Component
      </div>
    )
  }
}

Details.propTypes = propTypes;
Details.defaultProps = defaultProps;

export default Details;
