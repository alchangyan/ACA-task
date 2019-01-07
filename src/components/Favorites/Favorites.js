import React, { PureComponent } from 'react';
import DefaultLayout from '../../layouts/Default';
// import PropTypes from 'prop-types';
import './styles/Favorites.css';

const propTypes = {};
const defaultProps = {};

class Favorites extends PureComponent {
  render() {
    return (
      <DefaultLayout>
        <div className="Favorites">
          Favorites Component
        </div>
      </DefaultLayout>
    )
  }
}

Favorites.propTypes = propTypes;
Favorites.defaultProps = defaultProps;

export default Favorites;
