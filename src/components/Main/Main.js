import React, { PureComponent } from 'react';
import DefaultLayout from '../../layouts/Default';
// import PropTypes from 'prop-types';
import './styles/Main.css';

const propTypes = {};
const defaultProps = {};

class Main extends PureComponent {
  render() {
    return (
      <DefaultLayout>
        <div className="Main">
          Main Component
        </div>
      </DefaultLayout>
    )
  }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
