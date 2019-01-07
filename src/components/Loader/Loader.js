import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import classnames from 'classnames';
import './styles/Loader.css';

const propTypes = {
  active: PropTypes.bool
};

const defaultProps = {
  active: false
};

function Loader(props) {
  return (
    <div className={classnames({
      Loader: true,
      Active: props.active,
    })}>
      <Icon className="LoaderIcon" style={{ fontSize: 80 }}>explore</Icon>
    </div>
  )
}

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
