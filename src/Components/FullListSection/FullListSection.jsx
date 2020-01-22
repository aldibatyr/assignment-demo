import React from 'react'
import FullList from '../FullList/FullList';

import './FullListSection.css';

const FullListSection = props => {
  return (
    <div className="full-list-section">
      <FullList list={props.list}/>
    </div>
  )
}

export default FullListSection;