import React from 'react'
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faMoneyCheckAlt, faCashRegister, faAddressCard } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h4>Dashboard</h4>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faDatabase} />
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faMoneyCheckAlt}/>
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faCashRegister}/>
      </div>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faAddressCard}/>
      </div>
    </div>
  )
}

export default Dashboard;