import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './styles/SnackBar.css';

const propTypes = {
  handleClose: PropTypes.func,
  text: PropTypes.string,
  linkSource: PropTypes.string,
  linkText: PropTypes.string,
  open: PropTypes.bool,
};

const defaultProps = {
  handleClose: () => {},
  text: '',
  linkSource: '',
  linkText: '',
  open: false,
};
 
function SnackBar(props) {
  const {
    handleClose,
    text,
    linkSource,
    linkText,
    open,
  } = props;

  let actionArray = [
    <IconButton
      key="close"
      aria-label="Close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon />
    </IconButton>
  ];

  if (linkSource) {
    actionArray.unshift(
      <Button key="undo" color="primary" size="small" onClick={handleClose}>
        <a
          href={linkSource}
          target="_blank"
          rel="noopener noreferrer"
          style={{color: '#fff'}}
        >
          {linkText}
        </a>
      </Button>
      )
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={60000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{text}</span>}
      action={actionArray}
    />
  )
}

SnackBar.propTypes = propTypes;
SnackBar.defaultProps = defaultProps;

export default SnackBar;
