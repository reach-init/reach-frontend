import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth0 } from '../../auth/react-auth'
import './Modal.css'
import Modal from '@material-ui/core/Modal';
import ProfilePost from './ProfilePost';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
  },
}));

export default function PostModal({post, open, handleClose}) {
  const { isAuthenticated, loginWithRedirect, logoutWithRedirect } = useAuth0()
  const classes = useStyles();
  
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ProfilePost post={post} isModal/>
    </div>
  );

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}
