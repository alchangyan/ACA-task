import React, { PureComponent } from 'react';
import DefaultLayout from '../../layouts/Default';
// import PropTypes from 'prop-types';
import './styles/Details.css';

const propTypes = {};
const defaultProps = {};

class Details extends PureComponent {
  render() {
    return (
      <DefaultLayout>
        <div className="Details">
          Details Component
        </div>
      </DefaultLayout>
    )
  }
}

Details.propTypes = propTypes;
Details.defaultProps = defaultProps;

export default Details;
