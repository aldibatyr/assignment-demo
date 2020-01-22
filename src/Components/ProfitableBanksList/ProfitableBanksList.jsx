import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfitableBanksList.css';
import ItemCard from '../ItemCard/ItemCard';
import { Container, Spinner } from 'react-bootstrap';

const ProfitableBanksList = props => {

  const sorted = props.list.sort((a, b) => {
    return b.NetWin - a.NetWin;
  });
  const mostProfit = sorted.slice(0, 5);
  
  const seen = new Set();


  const sliced = sorted.slice(0, 10);
  const filtered = sliced.filter(el => {
    const duplicate = seen.has(el.Bank);
    seen.add(el.Bank);
    return !duplicate;
  });

  const renderedFilteredItems = () => {
    return filtered.map((bank, i) => (
      <li key={i}>
        <div className="bank-card">
          <div className="bank-name-wrapper">
            <span className='bank-name'>{bank.Bank}</span>
          </div>
        </div>
      </li>
    ))
  }
  return (
    <Container className="profitable-banks-wrapper">
      <div className="headers">
        <div className="section-title">
          <h4>Most Profitable Reccomendations</h4>
        </div>
        <Link to='/list'>
          <div className="link-to-list">
            <span>See All</span>
          </div>
        </Link>
      </div>
      <div className="cards-section">
        {mostProfit.map((entry, i) => (
          <ItemCard key={i} props={entry} />
        ))}
      </div>
      <div className="recommendation">
        <div className="recommendation-wrapper">
          <div className="headers">
            <div className="section-title">
              <h4>These banks have the best net win:</h4>
            </div>
            <Link to=''>
              <div className="link-to-list">
                <span>Learn More</span>
              </div>
            </Link>
          </div>
          <ul>
            {renderedFilteredItems()}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default ProfitableBanksList;