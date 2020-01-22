import React from 'react';
import Container from 'react-bootstrap/Container'
import './UserControls.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UserControls = () => {
  return (
    <Container className='user-controls-container'>
      <div className="user-controls">
        <div className='settings-icon'>
          <Link to="">
            <FontAwesomeIcon icon={faCog}/>
          </Link>
        </div>
        <div className='user-name'>
          User
      </div>
        <div className='user-avatar'>
          <div className="avatar-wrapper">
            <Link to=''>
              <FontAwesomeIcon icon={faUser}/>
            </Link>
          </div>
      </div>
      </div>
    </Container>
  )
}

export default UserControls;