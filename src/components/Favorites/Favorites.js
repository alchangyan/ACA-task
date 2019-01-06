import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import './styles/Favorites.css';

const propTypes = {};
const defaultProps = {};

class Favorites extends PureComponent {
  render() {
    return (
      <div className="Favorites">
        Favorites Component
      </div>
    )
  }
}

Favorites.propTypes = propTypes;
Favorites.defaultProps = defaultProps;

export default Favorites;
