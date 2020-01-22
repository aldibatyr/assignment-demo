import React from 'react'
import './ItemCard.css';
import { Link } from 'react-router-dom';

const ItemCard = ({ props }) => {
  return (
    <div className="item-card">
      <div className="card-title">
        <h3>{props.Asset}</h3>
      </div>
      <div className="net-win">
        <p><em>NetWin: {props.NetWin}</em></p>
      </div>
      <div className="card-asset-location">
        Located at:
        <ul>
          <li>Area: {props.Area}</li>
          <li>Zone: {props.Zone}</li>
          <li>Bank: {props.Bank}</li>
          <li>Stand: {props.Stand}</li>
        </ul>
      </div>
      <div className="card-asset-action-controls">
        <Link to=''>
          <div className="card-action-button">
            <button>
              See More
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ItemCard;