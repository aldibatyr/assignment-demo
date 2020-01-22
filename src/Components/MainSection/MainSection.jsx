import React, { useState, useEffect } from 'react';
import './MainSection.css';
import ProfitableBanksList from '../ProfitableBanksList/ProfitableBanksList';

const MainSection = props => {
  return (
    <div className="main-section">
      <ProfitableBanksList list={props.list}/>
    </div>
  )
}

export default MainSection;